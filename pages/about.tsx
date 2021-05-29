import { GetStaticProps } from 'next'
import { PageProps } from 'types/Blog'
import { Heading, Text } from '@chakra-ui/layout'
import { Layout } from '@components/Layout/Layout'


export default function AboutPage({ pageTitle = 'About', pageDescription }: PageProps) {

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
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
  )
}
 
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const configData = await import('../siteconfig.json')
  
  return {
    props: {
      pageTitle: configData.default.title,
      pageDescription: configData.default.description,
    },
  }
}
