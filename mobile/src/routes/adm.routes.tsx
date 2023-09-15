// Native
import {
  createDrawerNavigator,
  DrawerNavigationProp,
} from '@react-navigation/drawer'
// Components
import { AdmDrawer } from '@components/AdmDrawer'
// Screens
import { Home } from '@screens/adm/Home'
import { Contacts } from '@screens/adm/Contacts'

export type AdmRoutes = {
  contacts: undefined
  news: undefined
}

export type AdmNavigatorRoutesProps = DrawerNavigationProp<AdmRoutes>

const { Navigator, Screen } = createDrawerNavigator<AdmRoutes>()

export function AdmRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={() => <AdmDrawer />}
    >
      <Screen name="contacts" component={Contacts} />
      <Screen name="news" component={Home} />
    </Navigator>
  )
}
