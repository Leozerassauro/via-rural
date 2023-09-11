import { Header } from '@components/Header'
import { View, ScrollView } from 'react-native'
import { Divider, Text, useTheme } from 'react-native-paper'

export function FAQ() {
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
        <Text variant="displaySmall" style={{ color: colors.primary }}>
          FAQ
        </Text>
        <Text
          variant="titleMedium"
          style={{ color: colors.primary, marginBottom: 35 }}
        >
          Perguntas e respostas
        </Text>
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
      </ScrollView>
    </View>
  )
}
