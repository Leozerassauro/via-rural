// Native
import { useState } from 'react'
import { TextInput as ReactNativeTextInput } from 'react-native'
import {
  HelperText,
  TextInput,
  TextInputProps,
  useTheme,
} from 'react-native-paper'

type Props = TextInputProps & {
  password?: boolean
  inputRef?: React.RefObject<ReactNativeTextInput>
  errorMessage?: string | null
}

export function Input({
  errorMessage = null,
  password = false,
  inputRef,
  ...rest
}: Props) {
  const [showPassword, setShowPassword] = useState(false)
  const invalid = !!errorMessage
  const { colors } = useTheme()

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <TextInput
        secureTextEntry={password && !showPassword}
        right={
          password && (
            <TextInput.Icon
              icon={showPassword ? 'eye-off' : 'eye'}
              onPress={handleShowPassword}
            />
          )
        }
        error={invalid}
        ref={inputRef}
        style={{
          backgroundColor: colors.background,
          borderBottomWidth: 0.5,
          fontSize: 20,
          width: '100%',
        }}
        {...rest}
      />
      {invalid && (
        <HelperText
          type="error"
          style={{ marginTop: -20, marginBottom: -10, fontSize: 14 }}
        >
          {errorMessage}
        </HelperText>
      )}
    </>
  )
}
