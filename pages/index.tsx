import { GetStaticProps } from 'next'
import { PostsProps, WebpackContext } from 'types/Blog'
import { Heading, Link, StackDivider, Text, VStack } from '@chakra-ui/react'
import { Layout } from '@components/Layout/Layout'
import { PostList } from '@components/PostList'
import { getPosts } from '@utils/getPosts'


export default function LandingPage({
  posts,
  pageTitle = 'Oskar Hulter\'s Website',
  pageDescription = 'Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.',
}: PostsProps) {

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <section>
        <VStack
          divider={<StackDivider borderColor='brand.700' />}
          spacing={2}
          align='stretch'
          scrollSnapType='y mandatory'
          scrollSnapStop='always'
        >

          <Heading as='h2' size='2xl'>Portfolio Blog Template</Heading>

          <PostList posts={posts} />

          <Text>
            This is a simple blog built with Next, easily deployable on{' '}
            <Link href='https://url.netlify.com/r1j6ybSYU'>Netlify</Link>.
          </Text>
          <Text>
            You can look at the repository for this project{' '}
            <Link href='https://github.com/cassidoo/next-netlify-blog-starter'>
              here
            </Link>
          </Text>

        </VStack>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const configData = await import('../siteconfig.json')

  const posts = ((context: WebpackContext) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      pageTitle: configData.default.title,
      pageDescription: configData.default.description,
    },
  }
}
