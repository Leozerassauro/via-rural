import { Header } from '@components/Header'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  Divider,
  IconButton,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { openURL } from 'expo-linking'
import { FontAwesome } from '@expo/vector-icons'
import { api } from '@services/api'
import { Fragment, useEffect, useState } from 'react'
import { NewsDTO } from '@dtos/NewsDTO'

export function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [newsList, setNewsList] = useState<NewsDTO[]>([])

  const { colors } = useTheme()

  async function getNews() {
    try {
      setIsLoading(true)
      const { data } = await api.get('/get-news')

      setNewsList(data.news)
    } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <View>
      <Header />
      <ScrollView
        persistentScrollbar={true}
        contentContainerStyle={{
          padding: 50,
          paddingBottom: 200,
          gap: 15,
          alignItems: 'center',
        }}
      >
        {isLoading ? (
          <></>
        ) : (
          newsList.map((news) => (
            <Fragment key={news.id}>
              <Text variant="headlineSmall">{news.title}</Text>
              <Text variant="bodyLarge" style={{ textAlign: 'justify' }}>
                {news.body}
              </Text>
              <Divider bold style={{ width: '100%', marginBottom: 15 }} />
            </Fragment>
          ))
        )}

        <Text
          variant="titleLarge"
          style={{ textAlign: 'center', color: colors.primary }}
        >
          Entre em contato conosco agora mesmo!
        </Text>
        <View style={{ flex: 1, flexDirection: 'row', gap: 15 }}>
          <Surface style={styles.surface} elevation={2}>
            <LinearGradient
              colors={['#25621E', '#3B9D30', '#163A12']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.iconButton}
            >
              <IconButton
                icon={() => (
                  <FontAwesome
                    name="facebook"
                    size={42}
                    color={colors.background}
                  />
                )}
                size={48}
                onPress={() =>
                  openURL('https://www.facebook.com/viaruraloficial')
                }
              />
            </LinearGradient>
          </Surface>
          <Surface style={styles.surface} elevation={2}>
            <LinearGradient
              colors={['#25621E', '#3B9D30', '#163A12']}
              start={{ x: 0, y: 0 }}
              end={{ x: 2, y: 1 }}
              style={styles.iconButton}
            >
              <IconButton
                icon="instagram"
                iconColor={colors.background}
                size={48}
                onPress={() => openURL('https://www.instagram.com/via_rural_/')}
              />
            </LinearGradient>
          </Surface>
          <Surface style={styles.surface} elevation={2}>
            <LinearGradient
              colors={['#25621E', '#3B9D30', '#163A12']}
              start={{ x: 1, y: 1 }}
              end={{ x: 0, y: 0 }}
              style={styles.iconButton}
            >
              <IconButton
                icon="web"
                iconColor={colors.background}
                size={48}
                onPress={() => openURL('http://via-rural.com/')}
              />
            </LinearGradient>
          </Surface>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  surface: {
    width: 80,
    height: 80,
    borderRadius: 15,
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
})
