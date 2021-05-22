import { FC } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-sans/700.css'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const mdx = {
  p: {
    fontSize: 'lg',
    lineHeight: '1.8',
  },
  h1: {
    fontFamily: 'body',
    fontSize: 'xl',
  },
}

const fonts = {
  heading: 'IBM Plex Mono',
  body: 'IBM Plex Sans',
}

const styles = {
  global: props => ({
    'body': {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('white', 'gray.800')(props),
      lineHeight: 'base',
      a: {
        color: '#00a395'
      },

    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    '.mdx-prose': mdx,
  })
}


const theme = extendTheme({ styles, colors, fonts })

const ThemeProvider: FC = ({ children }) =>
  <ChakraProvider theme={theme}>
    {children}
  </ChakraProvider>

export default ThemeProvider