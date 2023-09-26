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
import { AddNews } from '@screens/adm/AddNews'

export type AdmRoutes = {
  contacts: undefined
  news: undefined
  addNews: undefined
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
      <Screen name="news" component={Home} />
      <Screen name="contacts" component={Contacts} />
      <Screen name="addNews" component={AddNews} />
    </Navigator>
  )
}
