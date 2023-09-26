import { useState, useRef, useEffect } from 'react'
import { View, StyleSheet, TextInput, ScrollView } from 'react-native'
import {
  Dialog,
  IconButton,
  Portal,
  RadioButton,
  Snackbar,
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
import { GradientButton } from '@components/GradientButton'
import { BlurView } from 'expo-blur'
import { Loading } from '@components/Loading'
import { useAuth } from '@hooks/useAuth'
import { api } from '@services/api'
import { maskPhone } from '@utils/Masks'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

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

const authenticateSchema = yup.object({
  name: yup.string().required('Informe seu nome.'),
  phone: yup
    .string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato de telefone inválido')
    .required('Informe seu telefone.'),
})

export function Authenticate() {
  const phoneRef = useRef<TextInput>(null)
  const navigation = useNavigation<AuthNavigatorRoutesProps>()
  const [isLoading, setIsLoading] = useState(false)
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [selected, setSelected] = useState('first')
  const [dialog, setDialog] = useState(false)
  const [formType, setFormType] = useState('')
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(authenticateSchema),
  })

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
  const { authenticate } = useAuth()

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

  async function handleSignUp({ name, phone }: FormDataProps) {
    try {
      setIsLoading(true)
      await api.post(`/register`, {
        name,
        phone,
        user_type: formType.toLocaleUpperCase(),
      })
      await authenticate(phone)
    } catch (error) {
      setShowSnackbar(true)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }

  return isLoading ? (
    <Loading />
  ) : (
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
          <RadioButton.Android
            value={'first'}
            uncheckedColor={colors.primary}
          />
          <RadioButton.Android
            value={'second'}
            uncheckedColor={colors.primary}
          />
          <RadioButton.Android
            value={'third'}
            uncheckedColor={colors.primary}
          />
          <RadioButton.Android
            value={'fourth'}
            uncheckedColor={colors.primary}
          />
        </View>
      </RadioButton.Group>
      <View style={styles.buttons}>
        <GradientButton
          fullWidth
          fullHeight
          onPress={() => openDialog('producer')}
        >
          Sou produtor
        </GradientButton>
        <Button mode="outlined" onPress={() => openDialog('service_provider')}>
          Sou prestador de serviço
        </Button>
        <Button mode="text" onPress={() => navigation.navigate('signIn')}>
          <Text
            variant="titleLarge"
            style={{
              color: colors.primary,
              textDecorationLine: 'underline',
            }}
          >
            Fazer login
          </Text>
        </Button>
      </View>
      <Portal>
        {dialog && (
          <BlurView style={{ flex: 1 }} intensity={5} tint="light">
            <Dialog
              visible={dialog}
              onDismiss={hideDialog}
              style={{
                backgroundColor: colors.background,
                borderWidth: 2,
                borderColor: colors.primary,
              }}
            >
              <Dialog.Actions style={{ flex: 1, paddingTop: 10 }}>
                <IconButton icon="close" onPress={hideDialog} />
              </Dialog.Actions>
              <Dialog.Content style={{ gap: 30, marginBottom: 20 }}>
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
                  render={({ field: { value, onChange } }) => (
                    <Input
                      label="Telefone (DDD)"
                      placeholder="Digite um telefone"
                      keyboardType="numeric"
                      returnKeyType="send"
                      onSubmitEditing={handleSubmit(handleSignUp)}
                      value={value}
                      onChangeText={(text) => {
                        const formattedText = maskPhone(text)
                        onChange(formattedText)
                      }}
                      errorMessage={errors.phone?.message}
                      inputRef={phoneRef}
                    />
                  )}
                />
              </Dialog.Content>
              <Dialog.Actions style={{ justifyContent: 'center' }}>
                <GradientButton onPress={handleSubmit(handleSignUp)}>
                  Enviar
                </GradientButton>
              </Dialog.Actions>
            </Dialog>
          </BlurView>
        )}
      </Portal>
      <Portal>
        <Snackbar
          visible={showSnackbar}
          onDismiss={() => setShowSnackbar(false)}
          action={{
            label: 'ok',
            onPress: () => setShowSnackbar(false),
          }}
        >
          Algo deu errado. Tente novamente mais tarde.
        </Snackbar>
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
    height: '63%',
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
