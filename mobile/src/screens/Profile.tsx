import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Input } from '@components/Input'
import { StyleSheet, View } from 'react-native'
import { Avatar, useTheme } from 'react-native-paper'

export function Profile() {
  const { colors } = useTheme()
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Avatar.Icon
          size={120}
          icon="account"
          style={{ backgroundColor: colors.surfaceVariant, marginBottom: 40 }}
        />
        <Input mode="outlined" label="Nome" value="Leonardo" />
        <Input
          mode="outlined"
          label="Telefone (DDD)"
          value="(54) 99999 - 9999"
          keyboardType="numeric"
        />
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Salvar
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    gap: 35,
    padding: 60,
  },
})
