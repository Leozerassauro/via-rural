import { Input } from '@components/Input'
import { View, TextInput, StyleSheet } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useRef } from 'react'
import { Text, useTheme } from 'react-native-paper'
import LogoSvg from '@assets/logo.svg'
import { GradientButton } from '@components/GradientButton'
import { Button } from '@components/Button'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import { useNavigation } from '@react-navigation/native'

type SignInProps = {
  email: string
  password: string
}

const signInSchema = yup.object({
  email: yup.string().email().required('Informe seu email.'),
  password: yup.string().required(),
})

export function SignIn() {
  const passwordRef = useRef<TextInput>(null)
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInProps>({
    resolver: yupResolver(signInSchema),
  })

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <View style={[styles.banner, { backgroundColor: colors.primary }]}>
        <LogoSvg />
      </View>
      <View style={styles.inputs}>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange } }) => (
            <Input
              label="Email"
              placeholder="Digite seu email"
              returnKeyType="next"
              onChangeText={onChange}
              errorMessage={errors.email?.message}
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => (
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              returnKeyType="send"
              onSubmitEditing={() => console.log('Enviou')}
              onChangeText={onChange}
              errorMessage={errors.password?.message}
              inputRef={passwordRef}
            />
          )}
        />
      </View>
      <View style={styles.buttons}>
        <GradientButton>Entrar</GradientButton>
        <Button mode="text" onPress={() => navigation.goBack()}>
          <Text
            variant="titleLarge"
            style={{
              color: colors.primary,
              textDecorationLine: 'underline',
            }}
          >
            Voltar para tela inicial
          </Text>
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 15,
  },
  banner: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  inputs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 45,
    gap: 20,
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    marginTop: 20,
    paddingHorizontal: 45,
  },
})
