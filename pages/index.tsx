import { FC } from 'react'
import { GetStaticProps } from 'next'
import getPosts from '@utils/getPosts'
import Layout from '@components/Layout'
import PostList from '@components/PostList'
import { Post, WebpackContext } from 'types/Blog'


const Index: FC<Props> = ({
  posts,
  title = 'Oskar Hulter\'s Website',
  description = 'Fullstack Web dev blog covering topics like JS, react, architecture, api-design and awesome packages.',
}) => {
  return (
    <>
      <Layout pageTitle={title} description={description}>
        <h1 className="title">Welcome to this demo blog!</h1>

        <p className="description">
          This is a simple blog built with Next, easily deployable on{' '}
          <a href="https://url.netlify.com/r1j6ybSYU">Netlify</a>.
        </p>
        <main>
          <PostList posts={posts} />
        </main>
        <p>
          You can look at the repository for this project{' '}
          <a href="https://github.com/cassidoo/next-netlify-blog-starter">
            here
          </a>
          , and a tutorial on how to build it {' '}
          <a href="https://url.netlify.com/ByVW0bCF8">here</a>.
        </p>
      </Layout>
      <style jsx>{`
        .title {
          margin: 1rem auto;
          font-size: 3rem;
        }
      `}</style>
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

export default Index