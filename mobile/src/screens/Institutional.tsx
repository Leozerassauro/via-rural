import { Header } from '@components/Header'
import { SocialMedias } from '@components/SocialMedias'
import { View, ScrollView, Image } from 'react-native'
import { Divider, Text, useTheme } from 'react-native-paper'
import InstitutionalImg from '@assets/institutionalImg.png'

export function Institutional() {
  const { colors } = useTheme()
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
        <Text variant="headlineSmall">headline 1</Text>
        <Text variant="bodyLarge">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facilis saepe quasi reiciendis voluptas incidunt ex. Nostrum fuga
          labore recusandae aspernatur voluptates assumenda ipsa nesciunt,
          necessitatibus dolorum perspiciatis, repellat itaque?
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">headline 2</Text>
        <Text variant="bodyLarge">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facilis saepe quasi reiciendis voluptas incidunt ex. Nostrum fuga
          labore recusandae aspernatur voluptates assumenda ipsa nesciunt,
          necessitatibus dolorum perspiciatis, repellat itaque?
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">headline 3</Text>
        <Text variant="bodyLarge">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facilis saepe quasi reiciendis voluptas incidunt ex. Nostrum fuga
          labore recusandae aspernatur voluptates assumenda ipsa nesciunt,
          necessitatibus dolorum perspiciatis, repellat itaque?
        </Text>
        <Divider bold style={{ width: '100%', marginBottom: 15 }} />
        <Text variant="headlineSmall">headline 4</Text>
        <Text variant="bodyLarge">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facilis saepe quasi reiciendis voluptas incidunt ex. Nostrum fuga
          labore recusandae aspernatur voluptates assumenda ipsa nesciunt,
          necessitatibus dolorum perspiciatis, repellat itaque?
        </Text>
        <Divider bold style={{ width: '100%' }} />
        <SocialMedias />
      </ScrollView>
    </View>
  )
}
