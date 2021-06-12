
import { Hero } from '@components/Hero'
import { Layout } from '@components/Layout/Layout'
import { PageProps } from '@types'


export default function LandingPage({
  pageTitle = 'Oskar Hulter\'s Website',
  pageDescription = 'Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.',
}: PageProps) {

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Hero />
    </Layout>
  )
}