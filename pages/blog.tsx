import { GetStaticProps } from 'next'
import { PostsProps, WebpackContext } from 'types/Blog'
import { Heading } from '@chakra-ui/react'
import { Layout } from '@components/Layout/Layout'
import { PostList } from '@components/PostList'
import { getPosts } from '@utils/getPosts'


export default function BlogPage({
  posts,
  pageTitle = 'Oskar Hulter\'s Blog',
  pageDescription = 'Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.',
}: PostsProps) {
  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Heading as="h2" size="4xl">
          Web Dev Blog
      </Heading>

      <main>
        <PostList posts={posts} />
      </main>
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
