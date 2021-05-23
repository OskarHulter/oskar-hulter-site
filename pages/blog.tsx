import React, { FC } from 'react'
import { GetStaticProps } from 'next'
import getPosts from '@utils/getPosts'
import Layout from '@components/Layout/Layout'
import PostList from '@components/PostList'
import { Post, WebpackContext } from 'types/Blog'
import { Heading } from '@chakra-ui/react'


const BlogPage: FC<Props> = ({
  posts,
  title = 'Oskar Hulter\'s Blog',
  description = 'Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.',
}) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <Heading as="h2" size="4xl">
          Web Dev Blog
        </Heading>

        <main>
          <PostList posts={posts} />
        </main>
      </Layout>
    </>
  )
}

type Props = {
  posts: Post[]
  title: string
  description: string
}

export const getStaticProps: GetStaticProps = async () => {
  const configData = await import('../siteconfig.json')

  const posts = ((context: WebpackContext) => {
    return getPosts(context)
  })(require.context('../posts', true, /\.md$/))

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  }
}

export default BlogPage 