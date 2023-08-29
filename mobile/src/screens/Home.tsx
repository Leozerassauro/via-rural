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

const getNextValue = (currentValue: string) => {
  const sequence = ['first', 'second', 'third', 'fourth']
  const currentIndex = sequence.indexOf(currentValue)
  const nextIndex = (currentIndex + 1) % sequence.length
  return sequence[nextIndex]
}

export function Home() {
  const phoneRef = useRef<TextInput>(null)
  const [selected, setSelected] = useState('first')
  const [dialog, setDialog] = useState(false)
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

  const openDialog = () => setDialog(true)
  const hideDialog = () => setDialog(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelected((prevSelected) => getNextValue(prevSelected))
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

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
        <Button mode="contained" onPress={openDialog}>
          Sou produtor
        </Button>
        <Button mode="outlined" onPress={openDialog}>
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
            <Input
              label="Nome"
              placeholder="Digite um nome"
              returnKeyType="next"
              onSubmitEditing={() => phoneRef.current?.focus()}
            />
            <Input
              label="Telefone (DDD)"
              placeholder="Digite um telefone"
              returnKeyType="send"
              onSubmitEditing={() => console.log('Enviou')}
              inputRef={phoneRef}
            />
          </Dialog.Content>
          <Dialog.Actions style={{ justifyContent: 'center' }}>
            <Button
              mode="contained"
              style={{ width: '70%' }}
              onPress={() => console.log('Enviou')}
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
