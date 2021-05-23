import { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import matter from 'gray-matter'
import getSlugs from '@utils/getSlugs'
import Layout from '@components/Layout'
import MDX from '@components/MDX'
import Button from '@components/Button'
import { FrontMatter, WebpackContext } from 'types/Blog'


const BlogPost: FC<Props> = ({
  siteTitle = 'Oskar Hulter\'s Web Dev Blog',
  frontmatter,
  markdownBody,
}) => {
  if (!frontmatter) return <></>

  return (
    <>
      <Layout pageTitle={`${frontmatter.title} | ${siteTitle} `}>
        <Button backArrow={true}/>
        <article>

          <h1>{frontmatter.title}</h1>
          {frontmatter.hero_image && (
            <img
              src={frontmatter.hero_image}
              className="hero"
              alt={frontmatter.title}
            />
          )}

          <MDX markdownBody={markdownBody} />

        </article>
      </Layout>

      <style jsx>{`
        article {
          width: 100%;
          max-width: 1200px;
        }
        .hero {
          width: 100%;
        }
      `}</style>
    </>
  )
}

type Props = {
  siteTitle: string
  frontmatter: FrontMatter
  markdownBody: string
}


export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import('../../siteconfig.json')
  const data = matter(content.default)

  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      markdownBody: data.content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogSlugs = ((context: WebpackContext) => {
    return getSlugs(context)
  })(require.context('../../posts', true, /\.md$/))

  const paths = blogSlugs.map(slug => `/post/${slug}`)

  return {
    paths, // An array of path names, and any params
    fallback: false, // so that 404s properly appear if something's not matching
  }
}

export default BlogPost