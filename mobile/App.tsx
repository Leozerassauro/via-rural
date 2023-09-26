/* eslint-disable camelcase */
// Native
import { StatusBar } from 'expo-status-bar'
import { PaperProvider } from 'react-native-paper'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
// Components
import { Loading } from '@components/Loading'
// Themes
import { lightTheme } from '@themes/light'
// Routes
import { Routes } from '@routes/index'
import { AuthContextProvider } from '@contexts/Auth'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })
  return (
    <PaperProvider theme={lightTheme}>
      <StatusBar style="light" />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </PaperProvider>
  )
}
