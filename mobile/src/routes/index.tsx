// Native
import { View } from 'react-native'
import { useTheme } from 'react-native-paper'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
// Hooks
import { useAuth } from '@hooks/useAuth'
// Routes
import { AuthRoutes } from './auth.routes'
import { AppRoutes } from './app.routes'
import { AdmRoutes } from './adm.routes'
import { Loading } from '@components/Loading'

export function Routes() {
  const { colors } = useTheme()
  const { user, isLoadingUserStorageData } = useAuth()

  const theme = DefaultTheme
  theme.colors.background = colors.background

  if (isLoadingUserStorageData) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <NavigationContainer theme={theme}>
        {/* {user.id ? <AppRoutes /> : <AuthRoutes />} */}
        <AdmRoutes />
      </NavigationContainer>
    </View>
  )
}
