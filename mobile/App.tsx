import { Home } from '@screens/Home'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
// Themes
import { lightTheme } from '@themes/light'

export default function App() {
  return (
    <PaperProvider theme={lightTheme}>
      <StatusBar style="auto" />
      <Home />
    </PaperProvider>
  )
}
