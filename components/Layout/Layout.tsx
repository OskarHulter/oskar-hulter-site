import React, { FC } from 'react'
import Head from 'next/head'
import { VStack } from '@chakra-ui/react'
import Header from '@components/Layout/Header/Header'
import Footer from '@components/Layout/Footer'


const Layout: FC<Props> = ({ pageTitle, description, children }) =>
  <>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='Description' content={description}></meta>
      <title>{pageTitle}</title>
    </Head>
    <VStack
      height='100vh'
      align='stretch'
      overflowY='scroll'
      scrollSnapType='y mandatory'
      scrollSnapStop='always'
      scrollSnapAlign='center'
    >

      <Header />

      <main>
        {children}
      </main>

      <Footer />

    </VStack>
  </>

type Props = {
  pageTitle: string
  description?: string
}

export default Layout