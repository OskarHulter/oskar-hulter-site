import Head from 'next/head'
import { PageProps } from 'types'
import { VStack } from '@chakra-ui/react'
import { AnimateIn } from '@components/Layout/AnimateIn'
import { Footer } from '@components/Layout/Footer'
import { Header } from '@components/Layout/Header/Header'


export function Layout({
  pageTitle,
  pageDescription,
  children,
}: PageProps) {

  return <>
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
      maxW={[
        'auto',    // 0-30em
        'auto',    // 30em-48em
        'auto',    // 48em-62em
        '1200px',  // 62em+
      ]}
    >

      <Header />
      <AnimateIn>
        <main>
          {children}
        </main>
      </AnimateIn>
      
      <Footer />

    </VStack>
  </>
}
