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
import { FontAwesome } from '@expo/vector-icons'
// Routes
import { AppNavigatorRoutesProps, AppRoutes } from '@routes/app.routes'
import { useAuth } from '@hooks/useAuth'

export function Drawer() {
  const { colors } = useTheme()
  const { signOut } = useAuth()
  const navigation = useNavigation<AppNavigatorRoutesProps>()

  function handleNavigation(route: keyof AppRoutes) {
    navigation.navigate(route)
  }

  return (
    <Surface style={[styles.surface, { backgroundColor: colors.tertiary }]}>
      <PaperDrawer.Section style={styles.drawer}>
        <PaperDrawer.Section theme={{ colors: { onBackground: 'red' } }}>
          <PaperDrawer.Item
            label="INSTITUCIONAL"
            rippleColor={colors.surfaceVariant}
            theme={{ colors: { onSurfaceVariant: colors.background } }}
            onPress={() => handleNavigation('institutional')}
          />
        </PaperDrawer.Section>
        <PaperDrawer.Section>
          <PaperDrawer.Item
            label="FAQ"
            rippleColor={colors.surfaceVariant}
            theme={{ colors: { onSurfaceVariant: colors.background } }}
            onPress={() => handleNavigation('faq')}
          />
        </PaperDrawer.Section>
        <PaperDrawer.Section>
          <PaperDrawer.Item
            label="NOTÍCIAS"
            rippleColor={colors.surfaceVariant}
            theme={{ colors: { onSurfaceVariant: colors.background } }}
            onPress={() => handleNavigation('home')}
          />
        </PaperDrawer.Section>
        <PaperDrawer.Item
          label="PERFIL"
          rippleColor={colors.surfaceVariant}
          theme={{ colors: { onSurfaceVariant: colors.background } }}
          onPress={() => handleNavigation('profile')}
        />
      </PaperDrawer.Section>
      <PaperDrawer.Section title="" showDivider={false}>
        <PaperDrawer.Section title="" showDivider={true}>
          <Surface style={styles.socialMediaSurface} elevation={0}>
            <IconButton
              icon={() => (
                <FontAwesome
                  name="facebook"
                  size={28}
                  color={colors.background}
                />
              )}
              size={35}
              onPress={() =>
                openURL('https://www.facebook.com/viaruraloficial')
              }
            />
            <IconButton
              icon="instagram"
              iconColor={colors.background}
              size={35}
              onPress={() => openURL('https://www.instagram.com/via_rural_/')}
            />
            <IconButton
              icon="web"
              iconColor={colors.background}
              size={35}
              onPress={() => openURL('http://via-rural.com/')}
            />
            <IconButton
              icon="whatsapp"
              iconColor={colors.background}
              size={35}
              onPress={() =>
                openURL('http://api.whatsapp.com/send?phone=54999789415')
              }
            />
          </Surface>
        </PaperDrawer.Section>
        <PaperDrawer.Item
          label="SAIR"
          theme={{ colors: { onSurfaceVariant: colors.background } }}
          onPress={signOut}
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
