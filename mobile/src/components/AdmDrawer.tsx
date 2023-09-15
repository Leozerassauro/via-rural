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
import { AdmNavigatorRoutesProps, AdmRoutes } from '@routes/adm.routes'

export function AdmDrawer() {
  const [active, setActive] = useState('home')

  const { colors } = useTheme()
  const navigation = useNavigation<AdmNavigatorRoutesProps>()

  function handleNavigation(route: keyof AdmRoutes) {
    navigation.navigate(route)
    setActive(route)
  }

  return (
    <Surface style={[styles.surface, { backgroundColor: colors.tertiary }]}>
      <PaperDrawer.Section style={styles.drawer}>
        <PaperDrawer.Section>
          <PaperDrawer.Item
            label="CONTATOS"
            rippleColor={colors.surfaceVariant}
            theme={{ colors: { onSurfaceVariant: colors.background } }}
            onPress={() => handleNavigation('contacts')}
          />
        </PaperDrawer.Section>
        <PaperDrawer.Item
          label="NOTICIAS"
          rippleColor={colors.surfaceVariant}
          theme={{ colors: { onSurfaceVariant: colors.background } }}
          onPress={() => handleNavigation('news')}
        />
      </PaperDrawer.Section>
      <PaperDrawer.Section title="" showDivider={false}>
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
