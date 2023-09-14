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

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })
  return (
    <PaperProvider theme={lightTheme}>
      <StatusBar style="light" />
      {fontsLoaded ? <Routes /> : <Loading />}
    </PaperProvider>
  )
}
