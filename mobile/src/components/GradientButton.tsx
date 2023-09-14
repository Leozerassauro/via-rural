// Native
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import {
  Button as PaperButton,
  ButtonProps,
  useTheme,
} from 'react-native-paper'

type Props = ButtonProps & {
  fullWidth?: boolean
  fullHeight?: boolean
}

export function GradientButton({ fullWidth, fullHeight, ...rest }: Props) {
  const { fonts, colors } = useTheme()

  return (
    <LinearGradient
      colors={['#25621E', '#3B9D30', '#163A12']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[
        styles.container,
        {
          width: fullWidth ? '100%' : '70%',
          minHeight: fullHeight ? 65 : 50,
          maxHeight: fullHeight ? 65 : 50,
        },
      ]}
    >
      <PaperButton
        accessibilityRole="button"
        labelStyle={fonts.titleLarge}
        textColor={colors.surface}
        {...rest}
      />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    borderRadius: 25,
  },
})
