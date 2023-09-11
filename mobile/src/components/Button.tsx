// Native
import { StyleSheet } from 'react-native'
import {
  Button as PaperButton,
  ButtonProps,
  useTheme,
} from 'react-native-paper'

type Props = ButtonProps

export function Button({ ...rest }: Props) {
  const { fonts } = useTheme()

  return (
    <PaperButton
      accessibilityRole="button"
      labelStyle={fonts.titleLarge}
      style={styles.container}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    minHeight: 65,
    maxHeight: 65,
    justifyContent: 'center',
    borderRadius: 25,
  },
})
