import { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, TextInput, ScrollView } from 'react-native'
import {
  Dialog,
  IconButton,
  Portal,
  RadioButton,
  Text,
  useTheme,
} from 'react-native-paper'
// Assets
import LogoSvg from '@assets/logo.svg'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { Twilio } from 'twilio'

type FormDataProps = {
  name: string
  phone: string
}

const getNextValue = (currentValue: string) => {
  const sequence = ['first', 'second', 'third', 'fourth']
  const currentIndex = sequence.indexOf(currentValue)
  const nextIndex = (currentIndex + 1) % sequence.length
  return sequence[nextIndex]
}

const signInSchema = yup.object({
  name: yup.string().required('Informe seu nome.'),
  phone: yup
    .string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato de telefone inválido')
    .required('Informe seu telefone.'),
})

export function SignIn() {
  const phoneRef = useRef<TextInput>(null)
  const [selected, setSelected] = useState('first')
  const [dialog, setDialog] = useState(false)
  const [formType, setFormType] = useState('')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(signInSchema),
  })
  const accountSid = 'AC993d91986b0045cea340f49df015cbab'
  const authToken = 'cf26fda07cccd0855e859a6bec3a6e1a'

  const phrases = {
    first: {
      phase: 'Mão de obra qualificada. Recomendo!',
      person: 'Larissa Gusman',
    },
    second: {
      phase: 'Via Rural disponibilizando a melhor mão de obra rural.',
      person: 'Talita Castro',
    },
    third: {
      phase: 'As melhores soluções de serviços agrícolas.',
      person: 'Tatina Fajolli',
    },
    fourth: {
      phase: 'Profissionais resposáveis e competentes.',
      person: 'Gabriela Fizo',
    },
  }

  const { colors } = useTheme()

  const openDialog = (type: string) => {
    setDialog(true)
    setFormType(type)
  }

  const hideDialog = () => setDialog(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelected((prevSelected) => getNextValue(prevSelected))
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  const sendMessage = () => {
    const client = new Twilio(accountSid, authToken)

    const message = 'Sua mensagem aqui.'
    const from = 'whatsapp:+555499789415' // Seu número Twilio do WhatsApp
    const to = 'whatsapp:+14155238886' // O número de destino

    client.messages
      .create({
        body: message,
        from,
        to,
      })
      .then((message) =>
        console.log('Mensagem enviada com sucesso:', message.sid),
      )
      .catch((error) => console.error('Erro ao enviar a mensagem:', error))
  }

  async function handleSignIn({ name, phone }: FormDataProps) {
    sendMessage()
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.banner, { backgroundColor: colors.primary }]}>
        <LogoSvg />
        <Animated.View entering={FadeInRight} exiting={FadeOutLeft}>
          <View style={styles.phasesContent}>
            <Text
              variant="titleLarge"
              style={{ color: colors.background, textAlign: 'center' }}
            >
              {phrases[selected].phase}
            </Text>
            <Text variant="bodyMedium" style={{ color: colors.background }}>
              {phrases[selected].person}
            </Text>
          </View>
        </Animated.View>
      </View>
      <RadioButton.Group
        onValueChange={(newValue) => setSelected(newValue)}
        value={String(selected)}
      >
        <View style={styles.phasesButtons}>
          <RadioButton.Android value={'first'} />
          <RadioButton.Android value={'second'} />
          <RadioButton.Android value={'third'} />
          <RadioButton.Android value={'fourth'} />
        </View>
      </RadioButton.Group>
      <View style={styles.buttons}>
        <Button mode="contained" onPress={() => openDialog('producer')}>
          Sou produtor
        </Button>
        <Button mode="outlined" onPress={() => openDialog('serviceProvider')}>
          Sou prestador de serviço
        </Button>
      </View>
      <Portal>
        <Dialog
          visible={dialog}
          onDismiss={hideDialog}
          style={{ backgroundColor: colors.background }}
        >
          <Dialog.Actions>
            <IconButton icon="close" onPress={hideDialog} />
          </Dialog.Actions>
          <Dialog.Content style={{ gap: 30, marginBottom: 40 }}>
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange } }) => (
                <Input
                  label="Nome"
                  placeholder="Digite um nome"
                  returnKeyType="next"
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                  onSubmitEditing={() => phoneRef.current?.focus()}
                />
              )}
            />
            <Controller
              control={control}
              name="phone"
              render={({ field: { onChange } }) => (
                <Input
                  label="Telefone (DDD)"
                  placeholder="Digite um telefone"
                  keyboardType="numeric"
                  returnKeyType="send"
                  onSubmitEditing={() => console.log('Enviou')}
                  onChangeText={onChange}
                  errorMessage={errors.phone?.message}
                />
              )}
            />
          </Dialog.Content>
          <Dialog.Actions style={{ justifyContent: 'center' }}>
            <Button
              mode="contained"
              style={{ width: '70%' }}
              onPress={handleSubmit(handleSignIn)}
            >
              Enviar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
  },
  banner: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '65%',
    paddingTop: '50%',
    paddingBottom: '15%',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  phasesContent: {
    alignItems: 'center',
    paddingHorizontal: 50,
    gap: 20,
  },
  phasesButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 25,
  },
  buttons: {
    flex: 1,
    paddingHorizontal: 45,
    gap: 20,
  },
})
