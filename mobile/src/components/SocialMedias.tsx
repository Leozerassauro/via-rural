import { LinearGradient } from 'expo-linear-gradient'
import { View, StyleSheet } from 'react-native'
import { IconButton, Surface, Text, useTheme } from 'react-native-paper'
import { FontAwesome } from '@expo/vector-icons'
import { openURL } from 'expo-linking'

export function SocialMedias() {
  const { colors } = useTheme()

  return (
    <View style={styles.container}>
      <Text
        variant="titleLarge"
        style={{ textAlign: 'center', color: colors.primary }}
      >
        Entre em contato conosco agora mesmo!
      </Text>
      <View style={styles.content}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: { flexDirection: 'row', gap: 15 },
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
