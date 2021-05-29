import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-sans/700.css'
import { BaseProps } from 'types/Blog'
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  transparent: 'transparent',
  black: '#000',
  white: '#fff',
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

const textStyles = {
  h1: {
    // you can also use responsive styles
    fontSize: ['48px', '72px'],
    fontWeight: 'bold',
    lineHeight: '110%',
    letterSpacing: '-2%',
  },
  h2: {
    fontSize: ['36px', '48px'],
    fontWeight: 'semibold',
    lineHeight: '110%',
    letterSpacing: '-1%',
  },
}


const styles = {
  global: props => ({
    'html': {
      scrollBehavior: 'smooth'
    },
    'body': {
      fontFamily: 'body',
      color: mode('black', 'white')(props),
      bg: mode('white', 'black')(props),
      lineHeight: 'base',
      a: {
        color: 'brand.700'
      }
    },
    'main': {
      h: '100%'
    },
    'section':{
      w: '100vw',
      display: 'flex',
      direction: 'column',
      alignItems: 'center',
      lineHeight: '1.7',
      bg: 'linear-gradient( to top, brand.700  0%, brand.800)',
    },
    '*::placeholder': {
      color: mode('brand.700', 'brand-800')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('brand.800', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
    '.mdx-prose': mdx,
  })
}

const config = {
  useSystemColorMode: true
}

const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    textStyles,
    config,
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
)


export function ThemeProvider({ children }:BaseProps) {

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
