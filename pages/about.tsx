import { FC } from 'react'
import { GetStaticProps } from 'next'
import Layout from '@components/Layout/Layout'
import { Heading, Text } from '@chakra-ui/layout'

const AboutPage: FC<Props> = ({ title, description }) => 
  <>
    <Layout pageTitle={`${title} | About`} description={description}>
      <Heading>Welcome to this demo blog!</Heading>

      <Text>
          This is a simple blog built with Next, easily deployable on{' '}
        <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.
      </Text>

      <Text>
          You can check out the{' '}
        <a href="https://github.com/cassidoo/next-netlify-blog-starter">
            repo here.
        </a>{' '}
          Build it yourself,{' '}
        <a href="https://url.netlify.com/ByVW0bCF8">
            here is a tutorial on how to do so
        </a>
          !
      </Text>

      <Text>
          This project includes a basic layout and header, base styles, dynamic
          routing with getStaticPaths, and posts saved as Markdown.
      </Text>
    </Layout>
  </>

type Props = {
  title: string
  description: string
}

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json')
  
  return {
    props: {
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

export default AboutPage