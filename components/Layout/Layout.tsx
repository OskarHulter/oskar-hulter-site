import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import { AnimateIn } from '@components/Layout/AnimateIn'
import { Footer } from '@components/Layout/Footer'
import { Header } from '@components/Layout/Header/Header'
import { PageProps } from '@types'


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
    <Box
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(static/abstract-galaxy-no-text.svg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >

      <Header />

      <AnimateIn>
        <main>
          {children}
        </main>
      </AnimateIn>
    
      <AnimateIn>
        <Footer />
      </AnimateIn>
    </Box>
  </>
}
