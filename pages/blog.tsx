import { GetStaticProps } from 'next'
import { PostsProps, WebpackContext } from 'types'
import { Heading, Text } from '@chakra-ui/react'
import { Layout } from '@components/Layout/Layout'
import { PostList } from '@components/PostList'
import { getPosts } from '@utils/getPosts'


export default function BlogPage({
  posts,
  pageTitle = 'Oskar Hulter\'s Blog',
  pageDescription,
}: PostsProps) {
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Heading as="h2">
          Welcome to my blog
      </Heading>
      <Text>
        Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.
      </Text>

      <PostList posts={posts} />
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
