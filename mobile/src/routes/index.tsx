// Native
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

// Routes
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'

export function Routes() {
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.background

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <NavigationContainer theme={theme}>{<AppRoutes />}</NavigationContainer>
    </View>
  )
}
