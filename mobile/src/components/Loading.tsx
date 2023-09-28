import { View, StyleSheet } from 'react-native'
import { ActivityIndicator, useTheme } from 'react-native-paper'

export function Loading() {
  const { colors } = useTheme()
  return (
    <View style={styles.container}>
      <ActivityIndicator animating={true} color={colors.primary} size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
