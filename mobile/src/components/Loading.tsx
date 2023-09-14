import { ActivityIndicator, useTheme } from 'react-native-paper'

export function Loading() {
  const { colors } = useTheme()
  return (
    <ActivityIndicator
      animating={true}
      color={colors.primary}
      size="large"
      style={{ flex: 1 }}
    />
  )
}
