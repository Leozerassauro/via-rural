// Native

import { StyleSheet } from 'react-native'
import { Drawer as PaperDrawer, Surface, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
// Routes
import { AdmNavigatorRoutesProps, AdmRoutes } from '@routes/adm.routes'
import { useAuth } from '@hooks/useAuth'

export function AdmDrawer() {
  const navigation = useNavigation<AdmNavigatorRoutesProps>()

  const { colors } = useTheme()
  const { signOut } = useAuth()

  function handleNavigation(route: keyof AdmRoutes) {
    navigation.navigate(route)
  }

  return (
    <Surface style={[styles.surface, { backgroundColor: colors.tertiary }]}>
      <PaperDrawer.Section style={styles.drawer}>
        <PaperDrawer.Section>
          <PaperDrawer.Item
            label="NOTICIAS"
            rippleColor={colors.surfaceVariant}
            theme={{ colors: { onSurfaceVariant: colors.background } }}
            onPress={() => handleNavigation('news')}
          />
        </PaperDrawer.Section>
        <PaperDrawer.Item
          label="CONTATOS"
          rippleColor={colors.surfaceVariant}
          theme={{ colors: { onSurfaceVariant: colors.background } }}
          onPress={() => handleNavigation('contacts')}
        />
      </PaperDrawer.Section>
      <PaperDrawer.Section title="" showDivider={false}>
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
