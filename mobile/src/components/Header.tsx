// Native
import { Appbar, useTheme } from 'react-native-paper'
import { DrawerActions, useNavigation } from '@react-navigation/native'
// Assets
import LogoSvg from '@assets/logo.svg'

export function Header() {
  const navigation = useNavigation()

  const { colors } = useTheme()

  return (
    <Appbar.Header
      mode="center-aligned"
      style={{ backgroundColor: colors.primary, height: 100 }}
    >
      <Appbar.Action
        icon="menu"
        iconColor={colors.surface}
        size={32}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />

      <Appbar.Content title={<LogoSvg width={180} />} />
    </Appbar.Header>
  )
}
