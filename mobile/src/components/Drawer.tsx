// Native
import { useState } from 'react'
import { openURL } from 'expo-linking'
import { StyleSheet } from 'react-native'
import {
  Drawer as PaperDrawer,
  IconButton,
  Surface,
  useTheme,
} from 'react-native-paper'
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
    <Surface style={[styles.surface, { backgroundColor: colors.tertiary }]}>
      <PaperDrawer.Section style={styles.drawer}>
        <PaperDrawer.Section theme={{ colors: { onBackground: 'red' } }}>
          <PaperDrawer.Item
            label="PERFIL"
            // icon="account"
            rippleColor={colors.surfaceVariant}
            theme={{ colors: { onSurfaceVariant: colors.background } }}
            // active={active === 'profile'}
            onPress={() => handleNavigation('profile')}
          />
        </PaperDrawer.Section>
        <PaperDrawer.Section>
          <PaperDrawer.Item
            label="FAQ"
            // icon="information"
            rippleColor={colors.surfaceVariant}
            theme={{ colors: { onSurfaceVariant: colors.background } }}
            // active={active === 'faq'}
            onPress={() => handleNavigation('faq')}
          />
        </PaperDrawer.Section>
        <PaperDrawer.Item
          label="INSTITUCIONAL"
          // icon="home"
          rippleColor={colors.surfaceVariant}
          theme={{ colors: { onSurfaceVariant: colors.background } }}
          // active={active === 'home'}
          onPress={() => handleNavigation('home')}
        />
      </PaperDrawer.Section>
      <PaperDrawer.Section title="" showDivider={false}>
        <PaperDrawer.Section title="" showDivider={true}>
          <Surface style={styles.socialMediaSurface} elevation={0}>
            <IconButton
              icon="facebook"
              size={35}
              onPress={() =>
                openURL('https://www.facebook.com/viaruraloficial')
              }
            />
            <IconButton
              icon="instagram"
              size={35}
              onPress={() => openURL('https://www.instagram.com/via_rural_/')}
            />
            <IconButton
              icon="web"
              size={35}
              onPress={() => openURL('http://via-rural.com/')}
            />
          </Surface>
        </PaperDrawer.Section>
        <PaperDrawer.Item
          label="SAIR"
          // icon="logout"
          theme={{ colors: { onSurfaceVariant: colors.background } }}
        />
      </PaperDrawer.Section>
    </Surface>
  )
}

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 20,
  },
  drawer: {
    marginTop: 50,
  },
  socialMediaSurface: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
