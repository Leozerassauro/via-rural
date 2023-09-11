// Native
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
// Components
import { Drawer } from '@components/Drawer'
// Screens
import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import { FAQ } from '@screens/FAQ'

export type AppRoutes = {
  home: undefined
  profile: undefined
  faq: undefined
}

export type AppNavigatorRoutesProps = DrawerNavigationProp<AppRoutes>

const { Navigator, Screen } = createDrawerNavigator<AppRoutes>()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={() => <Drawer />}
    >
      <Screen name="home" component={Home} />
      <Screen name="profile" component={Profile} />
      <Screen name="faq" component={FAQ} />
    </Navigator>
  )
}
