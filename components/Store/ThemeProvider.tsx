import { BaseProps } from 'types'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@data/theme'


export function ThemeProvider({ children }:BaseProps) {

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
