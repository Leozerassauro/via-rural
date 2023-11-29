import { Header } from '@components/Header'
import { SocialMedias } from '@components/SocialMedias'
import { View, ScrollView, Image } from 'react-native'
import { Divider, Text, useTheme } from 'react-native-paper'
import InstitutionalImg from '@assets/institutionalImg.png'
import { Fragment, useEffect, useState } from 'react'
import { api } from '@services/api'

type InstitutionalProps = {
  id: string
  title: string
  body: string
  user_type: 'SERVICE_PROVIDER' | 'PRODUCER'
}

export function Institutional() {
  const [institutional, setInstitutional] = useState<InstitutionalProps[]>([])

  const { colors } = useTheme()

  async function getInstitutional() {
    const response = await api.get('/institutional')

    setInstitutional(response.data.institutional)
  }

  useEffect(() => {
    getInstitutional()
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
          Institucional
        </Text>
        <Text
          variant="titleLarge"
          style={{
            color: colors.primary,
            marginBottom: 35,
          }}
        >
          Saiba mais sobre nós
        </Text>
        <Image
          source={InstitutionalImg}
          style={{ marginBottom: 20 }}
          alt="wheat field"
        />
        {institutional.map((institutional) => (
          <Fragment key={institutional.id}>
            <Text variant="headlineSmall">{institutional.title}</Text>
            <Text variant="bodyLarge" style={{ textAlign: 'justify' }}>
              {institutional.body}
            </Text>
            <Divider bold style={{ width: '100%', marginBottom: 15 }} />
          </Fragment>
        ))}
        <SocialMedias />
      </ScrollView>
    </View>
  )
}
