import { SignIn } from '@screens/SignIn'
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
// Themes
import { lightTheme } from '@themes/light'
import { Routes } from '@routes/index'

export default function App() {
  return (
    <PaperProvider theme={lightTheme}>
      <StatusBar style="light" />
      <Routes />
    </PaperProvider>
  )
}
