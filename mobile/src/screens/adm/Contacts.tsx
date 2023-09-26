import { Header } from '@components/Header'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  Card,
  Checkbox,
  IconButton,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { useAuth } from '@hooks/useAuth'

export function Contacts() {
  const { user } = useAuth()

  console.log(user)

  const { colors } = useTheme()
  return (
    <View>
      <Header />
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
        <Card style={styles.card}>
          <View style={styles.view}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked)
              }}
            />
            <View style={styles.texts}>
              <Text variant="titleLarge">Helen Prates</Text>
              <Text variant="bodyMedium">(54) 99999-9999</Text>
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
                  onPress={() => console.log('Zaperson')}
                />
              </LinearGradient>
            </Surface>
          </View>
        </Card>

        <View style={{ width: '100%' }}>
          <Text variant="bodyLarge">Contatados</Text>
        </View>
        <Card style={[styles.card, { backgroundColor: colors.surfaceVariant }]}>
          <View style={styles.view}>
            <Checkbox
              status={'checked'}
              onPress={() => {
                setChecked(!checked)
              }}
            />
            <View style={styles.texts}>
              <Text variant="titleLarge">Helen Prates</Text>
              <Text variant="bodyMedium">(54) 99999-9999</Text>
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
                  onPress={() => console.log('Zaperson')}
                />
              </LinearGradient>
            </Surface>
          </View>
        </Card>
      </ScrollView>
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
