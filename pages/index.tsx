import { GetStaticProps } from 'next'
import { PostsProps, WebpackContext } from 'types'
import { Hero } from '@components/Hero'
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

      <Hero />
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
