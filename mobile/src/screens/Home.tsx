import { Header } from '@components/Header'
import { View, ScrollView } from 'react-native'
import { Divider, Text } from 'react-native-paper'

export function Home() {
  return (
    <View>
      <Header />
      <ScrollView
        contentContainerStyle={{
          padding: 50,
          paddingBottom: 200,
          gap: 15,
          alignItems: 'center',
        }}
      >
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
