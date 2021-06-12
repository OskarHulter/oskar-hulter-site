import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@constants'
import { BaseProps } from '@types'


export function ThemeProvider({ children }:BaseProps) {

  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}
