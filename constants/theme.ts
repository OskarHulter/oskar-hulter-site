import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-sans/700.css'
import {
  extendTheme, ThemeConfig, useBreakpointValue, useColorModeValue, withDefaultColorScheme,
} from '@chakra-ui/react'
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

const fonts = {
  heading: 'IBM Plex Mono',
  body: 'IBM Plex Sans',
}

const textStyles = {
  h1: {
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
  p: {
    fontSize: ['sm','md', 'lg'],
    lineHeight: '150%',
  }
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
      'a, a::hover': {
        color: 'brand.700',
        textDecoration: 'none',
        bg: useColorModeValue('primary.200', 'primary.700')
      },
      'p': {
        color: 'white',
        fontWeight: '700',
        lineHeight: '1.2',
        fontSize: useBreakpointValue({ base: '3xl', md: '4xl' })
      },
      'button': {
        cursor: 'pointer'
      },
      'h1': {
        textShadow: '0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1)'
      }
    },
    'section':{
      display: 'flex',
      direction: 'column',
      alignItems: 'center',
      bg: 'linear-gradient( to top, brand.700  0%, brand.800)',
    },
    '*::placeholder': {
      color: mode('brand.700', 'brand-800')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('brand.800', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    }
  })
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

export const theme = extendTheme(
  {
    styles,
    colors,
    fonts,
    textStyles,
    config,
  },
  withDefaultColorScheme({ colorScheme: 'brand' })
)