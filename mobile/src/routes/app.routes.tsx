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
import { Institutional } from '@screens/Institutional'
import { BestPractices } from '@screens/BestPractices'

export type AppRoutes = {
  home: undefined
  profile: undefined
  faq: undefined
  institutional: undefined
  bestPractices: undefined
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
      <Screen name="institutional" component={Institutional} />
      <Screen name="bestPractices" component={BestPractices} />
    </Navigator>
  )
}
