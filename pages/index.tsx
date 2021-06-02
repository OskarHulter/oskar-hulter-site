import { GetStaticProps } from 'next'
import { PostsProps, WebpackContext } from 'types'
import { Heading, Image, Img, Link, StackDivider, Text, VStack } from '@chakra-ui/react'
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
      <VStack
        divider={<StackDivider borderColor='brand.700' />}
        spacing={2}
        align='stretch'
        as='section'
      >
        <Img />
        <Image
          boxSize="150px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
          alt="Dan Abramov"
        />

        <Heading as='h2' size='2xl'>Personal Site Template using next & Chakra Ui</Heading>

        <PostList posts={posts} />

        <Text>
            This is a simple blog built with Next, easily deployable on{' '}
          <Link href='https://url.netlify.com/r1j6ybSYU'>Netlify</Link>.
        </Text>
        <Text>
            You can look at the repository for this project{' '}
          <Link href='https://github.com/OskarHulter/next-netlify-blog-starter'>
              here
          </Link>
        </Text>

        <Text>
            This template is a fork of Cassidoo&apos;s next-netlify-blog-starter, big thanks to Cassidoo! Check out the repo {' '}
          <Link href='https://github.com/cassidoo/next-netlify-blog-starter'>
              here
          </Link>
        </Text>

      </VStack>
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
