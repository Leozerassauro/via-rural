import { Header } from '@components/Header'
import { View, ScrollView, StyleSheet } from 'react-native'
import {
  Card,
  Divider,
  IconButton,
  Surface,
  Text,
  useTheme,
} from 'react-native-paper'
import { LinearGradient } from 'expo-linear-gradient'
import { openURL } from 'expo-linking'
import { FontAwesome } from '@expo/vector-icons'
import { Input } from '@components/Input'

export function Home() {
  const { colors } = useTheme()
  return (
    <View>
      <Header />
      <ScrollView
        persistentScrollbar={true}
        contentContainerStyle={{
          padding: 20,
          paddingBottom: 200,
          gap: 50,
          alignItems: 'center',
        }}
      >
        <Card style={styles.card}>
          <Input label="Título" value="headline 1" />
          <Input
            multiline
            label="Corpo"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            facilis saepe quasi reiciendis voluptas incidunt ex. Nostrum fuga
            labore recusandae aspernatur voluptates assumenda ipsa nesciunt,
            necessitatibus dolorum perspiciatis, repellat itaque?"
          />
          <Input multiline label="Link" value="" />
        </Card>
        <Card style={styles.card}>
          <Input label="Título" value="headline 2" />
          <Input
            multiline
            label="Corpo"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            facilis saepe quasi reiciendis voluptas incidunt ex. Nostrum fuga
            labore recusandae aspernatur voluptates assumenda ipsa nesciunt,
            necessitatibus dolorum perspiciatis, repellat itaque?"
          />
          <Input multiline label="Link" value="" />
        </Card>
        <Card style={styles.card}>
          <Input label="Título" value="headline 3" />
          <Input
            multiline
            label="Corpo"
            value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            facilis saepe quasi reiciendis voluptas incidunt ex. Nostrum fuga
            labore recusandae aspernatur voluptates assumenda ipsa nesciunt,
            necessitatibus dolorum perspiciatis, repellat itaque?"
          />
          <Input multiline label="Link" value="" />
        </Card>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    gap: 10,
    padding: 15,
  },
})
