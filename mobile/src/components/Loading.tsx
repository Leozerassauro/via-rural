import { View } from 'react-native'
import { ActivityIndicator, useTheme } from 'react-native-paper'

export function Loading() {
  const { colors } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ActivityIndicator animating={true} color={colors.primary} size="large" />
    </View>
  )
}
