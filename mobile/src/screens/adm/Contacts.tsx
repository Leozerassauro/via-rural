import { Header } from '@components/Header'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  Card,
  Checkbox,
  IconButton,
  ProgressBar,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback, useState } from 'react'
import { api } from '@services/api'
import { useFocusEffect } from '@react-navigation/native'
import { UserDTO } from '@dtos/UserDTO'
import { Loading } from '@components/Loading'
import { openURL } from 'expo-linking'

export function Contacts() {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState<UserDTO[]>([])

  const { colors } = useTheme()

  async function getUsers() {
    const { data } = await api.get('/get-users')
    setUsers(data.users)
  }

  useFocusEffect(
    useCallback(() => {
      getUsers()
    }, [users]),
  )

  async function handleChangeContactedStatus(user: UserDTO) {
    try {
      setIsLoading(true)
      const updatedContacted = !user.contacted
      await api.patch(`/edit-user-contact-status/${user.id}`, {
        contacted: updatedContacted,
      })
      setUsers((prevUsers) =>
        prevUsers.map((u) =>
          u.id === user.id ? { ...u, contacted: updatedContacted } : u,
        ),
      )
    } catch (error) {
      console.error('Erro ao alterar o estado de contato do usuário:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView
          persistentScrollbar={true}
          contentContainerStyle={{
            padding: 20,
            paddingBottom: 200,
            gap: 15,
            alignItems: 'center',
          }}
        >
          <Text variant="titleLarge" style={{ color: colors.primary }}>
            PAINEL DE CONTATOS
          </Text>
          <View style={{ width: '100%' }}>
            <Text variant="bodyLarge">Não contatados</Text>
          </View>
          {users
            .filter((user) => !user.contacted)
            .map((user) => (
              <Card
                key={user.id}
                style={[styles.card, { backgroundColor: colors.background }]}
              >
                <View style={styles.view}>
                  <Checkbox
                    status={user.contacted ? 'checked' : 'unchecked'}
                    onPress={() => {
                      handleChangeContactedStatus(user)
                    }}
                  />
                  <View style={styles.texts}>
                    <Text variant="titleLarge">{user.name}</Text>
                    <Text variant="bodyMedium">{user.phone}</Text>
                  </View>
                  <Surface style={styles.surface} elevation={2}>
                    <LinearGradient
                      colors={['#25621E', '#3B9D30', '#163A12']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.iconButton}
                    >
                      <IconButton
                        icon="whatsapp"
                        iconColor={colors.background}
                        onPress={() =>
                          openURL(
                            `http://api.whatsapp.com/send?phone=${user.phone}`,
                          )
                        }
                      />
                    </LinearGradient>
                  </Surface>
                </View>
              </Card>
            ))}

          <View style={{ width: '100%' }}>
            <Text variant="bodyLarge">Contatados</Text>
          </View>
          {users
            .filter((user) => user.contacted)
            .map((user) => (
              <Card
                key={user.id}
                style={[
                  styles.card,
                  { backgroundColor: colors.surfaceVariant },
                ]}
              >
                <View style={styles.view}>
                  <Checkbox
                    status={user.contacted ? 'checked' : 'unchecked'}
                    onPress={() => {
                      handleChangeContactedStatus(user)
                    }}
                  />
                  <View style={styles.texts}>
                    <Text variant="titleLarge">{user.name}</Text>
                    <Text variant="bodyMedium">{user.phone}</Text>
                  </View>
                  <Surface style={styles.surface} elevation={2}>
                    <LinearGradient
                      colors={['#25621E', '#3B9D30', '#163A12']}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                      style={styles.iconButton}
                    >
                      <IconButton
                        icon="whatsapp"
                        iconColor={colors.background}
                        onPress={() =>
                          openURL(
                            `http://api.whatsapp.com/send?phone=${user.phone}`,
                          )
                        }
                      />
                    </LinearGradient>
                  </Surface>
                </View>
              </Card>
            ))}
        </ScrollView>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    flex: 1,
    padding: 15,
  },
  view: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  texts: {
    flex: 1,
    marginLeft: 20,
  },
  surface: {
    borderRadius: 15,
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
})
