import { GetStaticProps } from 'next'
import { Heading, Text } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/react'
import { Layout } from '@components/Layout/Layout'
import { PageProps } from '@types'


export default function PortfolioPage({ pageTitle = 'Portfolio', pageDescription }: PageProps) {

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Heading>Portfolio</Heading>

      <Text>
        check out my work:
      </Text>
      <Link href='https://github.com/OskarHulter/portfolio'>Portfolio Site</Link>
      <Link href='http://utbweb.its.ltu.se/~oskhul-5/cms/index.php'>CMS</Link>

      <Link href='https://github.com/OskarHulter/CMS-school-project-PHP'>CMS</Link>
      <Link href='http://utbweb.its.ltu.se/~oskhul-5/Fyrisbiografensvanner/'>FBV Website</Link>
      <Link href='https://github.com/OskarHulter/ltuRegisterGradeAssignment'>Rest-API example</Link>
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
