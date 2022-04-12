import { extendTheme } from '@chakra-ui/react'

const colors = {
  black: '#000000',
  white: '#FFFFFF',
  yellow: {
    900: '#FFBA08',
    450: 'rgba(255, 186, 8, 0.5)'
  },
  gray: {
    900: '#47585B',
    700: '#999999',
    350: 'rgba(153, 153, 153, 0.5)',
    200: '#DADADA',
    50: '#F5F8FA'
  }

}

const fonts = {
  heading: 'Poppins, sans-serif',
  body: 'Poppins, sans-serif',
}

const styles = {
  global: {
    body: {
      bg: 'white',
      color: 'gray.900'
    }
  }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
}

export const theme = extendTheme({ colors, fonts, styles, config });
