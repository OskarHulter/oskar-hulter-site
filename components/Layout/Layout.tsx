import Head from 'next/head'
import { PageProps } from 'types/Blog'
import { VStack } from '@chakra-ui/react'
import { Footer } from '@components/Layout/Footer'
import { Header } from '@components/Layout/Header/Header'


export function Layout({
  pageTitle,
  pageDescription,
  children,
}: PageProps) {

  return<>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta charSet='utf-8' />
      <meta name='Description' content={pageDescription}></meta>
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
}
