import { GradientButton } from '@components/GradientButton'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { useAuth } from '@hooks/useAuth'
import { StyleSheet, View, TextInput, Alert } from 'react-native'
import { Avatar, Text, useTheme } from 'react-native-paper'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRef, useState } from 'react'
import { maskPhone } from '@utils/Masks'
import { api } from '@services/api'
import { storageUserGet, storageUserSave } from '@storage/storageUser'
import LottieView from 'lottie-react-native'

type ProfileDataProps = {
  name: string
  phone: string
}

const editProfileSchema = yup.object({
  name: yup.string().required('Informe seu nome.'),
  phone: yup
    .string()
    .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato de telefone inválido')
    .required('Informe seu telefone.'),
})

export function Profile() {
  const phoneRef = useRef<TextInput>(null)
  const [showLottie, setShowLottie] = useState(false)

  const { colors } = useTheme()
  const { user } = useAuth()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileDataProps>({
    resolver: yupResolver(editProfileSchema),
    defaultValues: {
      name: user.name,
      phone: user.phone,
    },
  })

  async function handleEditProfile({ name, phone }: ProfileDataProps) {
    try {
      await api.patch('/edit-profile', {
        name,
        phone,
      })

      const user = await storageUserGet()
      user.name = name
      user.phone = phone
      await storageUserSave(user)

      setShowLottie(true)

      setTimeout(() => {
        setShowLottie(false)
      }, 2000)
    } catch (error) {
      Alert.alert(
        '❌ Algo deu errado',
        'Não foi possível alterar seu cadastro. Por favor, tente novamente mais tarde.',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
      )
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {showLottie ? (
          <>
            <Text variant="titleLarge">Cadastro alterado com sucesso!</Text>
            <LottieView
              source={require('../assets/success.json')}
              loop
              autoPlay
            />
          </>
        ) : (
          <>
            <Avatar.Icon
              size={120}
              icon="account"
              style={{
                backgroundColor: colors.surfaceVariant,
                marginBottom: 40,
              }}
            />
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <Input
                  label="Nome"
                  placeholder="Digite um nome"
                  returnKeyType="next"
                  value={value}
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
                  onSubmitEditing={handleSubmit(handleEditProfile)}
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
            <GradientButton
              fullHeight
              onPress={handleSubmit(handleEditProfile)}
            >
              Salvar
            </GradientButton>
          </>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 35,
    padding: 60,
  },
})
