import React, { FC } from 'react'
import { GetStaticProps } from 'next'
import { Heading, StackDivider, VStack, Text, Link } from '@chakra-ui/react'
import getPosts from '@utils/getPosts'
import Layout from '@components/Layout/Layout'
import PostList from '@components/PostList'
import { Post, WebpackContext } from 'types/Blog'


const Index: FC<Props> = ({
  posts,
  title = 'Oskar Hulter\'s Website',
  description = 'Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.',
}) => 
  <Layout pageTitle={title} description={description}>
    <section>
      <VStack
        divider={<StackDivider borderColor='gray.200' />}
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

export default Index