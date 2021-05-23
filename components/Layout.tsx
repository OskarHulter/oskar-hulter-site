import React, { FC } from 'react'
import Head from 'next/head'
import Header from '@components/Header/Header'
import { SimpleGrid } from '@chakra-ui/layout'
import { Box } from '@chakra-ui/react'


const Layout: FC<Props> = ({ pageTitle, description, children }) =>
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="Description" content={description}></meta>
      <title>{pageTitle}</title>
    </Head>
    <SimpleGrid columns={5} spacingX='1em' spacingY='1em'>

      <Box bg="tomato" height='300'></Box>
      <Box bg="tomato" height='300'></Box>
      <Box bg="tomato" height='300'></Box>
      <Box bg="tomato" height='300'></Box>
      <Box bg="tomato" height='300'></Box>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: bold;
        }
        
        .content {
          padding: 2rem 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        footer img {
          padding: 0 5px;
          height: 1rem;
        }
        `}</style>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>
      Built with <img src="/netliheart.svg" alt="Netlify Heart" /> for you
      </footer>
    </SimpleGrid>
  </>

type Props = {
  pageTitle: string
  description?: string
}

export default Layout