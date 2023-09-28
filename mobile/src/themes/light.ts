// Native
import { DefaultTheme } from 'react-native-paper'

export const lightTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  ...DefaultTheme.colors,
  colors: {
    ...DefaultTheme.colors,
    primary: '#25621E',
    secondary: '#3B9D30',
    onSecondaryContainer: '#FFFFFF',
    secondaryContainer: '#25621E',
    tertiary: '#163A12',

    error: '#EB0000',

    background: '#FFFFFF',
    surfaceVariant: '#D9D9D9',
  },
  fonts: {
    ...DefaultTheme.fonts,
    bodyMedium: {
      fontFamily: 'Nunito_400Regular',
      fontSize: 15,
    },
    bodyLarge: {
      fontFamily: 'Nunito_400Regular',
      fontSize: 20,
    },
    headlineSmall: {
      fontFamily: 'Nunito_900Black',
      fontSize: 20,
    },
    titleLarge: {
      fontFamily: 'Nunito_700Bold',
      fontSize: 18,
    },
    displayLarge: {
      fontFamily: 'Nunito_900Black',
      fontSize: 40,
    },
  },
}
