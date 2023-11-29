import { Header } from '@components/Header'
import { SocialMedias } from '@components/SocialMedias'
import { api } from '@services/api'
import { Fragment, useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import { Divider, Text, useTheme } from 'react-native-paper'

type FaqProps = {
  id: string
  code: number
  title: string
  body: string
  user_type: 'SERVICE_PROVIDER' | 'PRODUCER'
}

export function FAQ() {
  const [faqs, setFaqs] = useState<FaqProps[]>([])

  const { colors } = useTheme()

  async function getFaqs() {
    const response = await api.get('/faqs')

    setFaqs(response.data.faqs)
  }

  useEffect(() => {
    getFaqs()
  }, [])

  return (
    <View>
      <Header />
      <ScrollView
        contentContainerStyle={{
          padding: 50,
          paddingBottom: 200,
          gap: 15,
        }}
      >
        <Text variant="displayLarge" style={{ color: colors.primary }}>
          FAQ
        </Text>
        <Text
          variant="titleLarge"
          style={{ color: colors.primary, marginBottom: 35 }}
        >
          Perguntas e respostas
        </Text>
        {faqs
          .sort((a, b) => a.code - b.code)
          .map((faq) => (
            <Fragment key={faq.id}>
              <Text variant="headlineSmall">{faq.title.toUpperCase()}</Text>
              <Text variant="bodyLarge" style={{ textAlign: 'justify' }}>
                {faq.body}
              </Text>
              <Divider bold style={{ width: '100%', marginBottom: 15 }} />
            </Fragment>
          ))}
        <SocialMedias />
      </ScrollView>
    </View>
  )
}
