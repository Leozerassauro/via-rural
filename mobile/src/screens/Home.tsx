import { Header } from '@components/Header'
import { View, ScrollView, StyleSheet } from 'react-native'
import { Divider, Text, useTheme } from 'react-native-paper'
import { api } from '@services/api'
import { Fragment, useCallback, useState } from 'react'
import { NewsDTO } from '@dtos/NewsDTO'
import { Loading } from '@components/Loading'
import { SocialMedias } from '@components/SocialMedias'
import { useFocusEffect } from '@react-navigation/native'
import { Button } from '@components/Button'
import { openURL } from 'expo-linking'
import { GradientButton } from '@components/GradientButton'

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

  useFocusEffect(
    useCallback(() => {
      getNews()
    }, []),
  )

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
        <View>
          <Text variant="displayLarge" style={{ color: colors.primary }}>
            Notícias
          </Text>
          <Text
            variant="titleLarge"
            style={{
              color: colors.primary,
              marginBottom: 35,
            }}
          >
            As últimas notícias sobre o meio Rural !
          </Text>
        </View>
        {isLoading ? (
          <Loading />
        ) : (
          newsList.map((news) => (
            <Fragment key={news.id}>
              <View style={styles.newsContainer}>
                <Text variant="headlineSmall">{news.title}</Text>
                <Text variant="bodyLarge" style={{ textAlign: 'justify' }}>
                  {news.body}
                </Text>
                {news.link && (
                  <GradientButton onPress={() => openURL(news.link)}>
                    Ver notícia completa
                  </GradientButton>
                )}
              </View>
              <Divider bold style={{ width: '100%', marginVertical: 20 }} />
            </Fragment>
          ))
        )}
        <SocialMedias />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  newsContainer: {
    flex: 1,
    gap: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
