// Native
import { LinearGradient } from 'expo-linear-gradient'
import { StyleSheet } from 'react-native'
import { IconButton, IconButtonProps, useTheme } from 'react-native-paper'

type Props = IconButtonProps & {
  fullWidth?: boolean
  fullHeight?: boolean
}

export function GradientRoundedButton({ ...rest }: Props) {
  const { colors } = useTheme()

  return (
    <LinearGradient
      colors={['#25621E', '#3B9D30', '#163A12']}
      start={{ x: 1, y: 1 }}
      end={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <IconButton accessibilityRole="button" {...rest} />
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,

    position: 'absolute',
    bottom: 50,
    right: 50,
  },
})
