import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '@data/theme'


export default class MyDocument extends NextDocument {

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}