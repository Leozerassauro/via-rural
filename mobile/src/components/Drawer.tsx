// Native
import { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Drawer as PaperDrawer, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
// Routes
import { AppNavigatorRoutesProps, AppRoutes } from '@routes/app.routes'

export function Drawer() {
  const [active, setActive] = useState('home')

  const { colors } = useTheme()
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigation(route: keyof AppRoutes) {
    navigation.navigate(route)
    setActive(route)
  }

  return (
    <>
      <PaperDrawer.Section title="Menu" style={styles.drawer}>
        <PaperDrawer.Item
          label="Página Inicial"
          icon="home"
          rippleColor={colors.primary}
          active={active === 'home'}
          onPress={() => handleNavigation('home')}
        />
        <PaperDrawer.Item
          label="Perfil"
          icon="account"
          rippleColor={colors.primary}
          active={active === 'profile'}
          onPress={() => handleNavigation('profile')}
        />
        <PaperDrawer.Item
          label="FAQ"
          icon="information"
          rippleColor={colors.primary}
          active={active === 'faq'}
          onPress={() => handleNavigation('faq')}
        />
      </PaperDrawer.Section>
      <PaperDrawer.Section title="" showDivider={false}>
        {/* <PaperDrawer.Item label="Sair" icon="logout" onPress={signOut} /> */}
      </PaperDrawer.Section>
    </>
  )
}

const styles = StyleSheet.create({
  drawer: {
    marginTop: 50,
  },
})
