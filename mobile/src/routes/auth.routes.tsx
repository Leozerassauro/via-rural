// Native
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'
// Screens
import { Authenticate } from '@screens/Authenticate'
import { SignIn } from '@screens/SignIn'

type AuthRoutes = {
  authenticate: undefined
  signIn: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="authenticate" component={Authenticate} />
      <Screen name="signIn" component={SignIn} />
    </Navigator>
  )
}
