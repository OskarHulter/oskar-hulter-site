import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Heading, Image } from '@chakra-ui/react'
import { Layout } from '@components/Layout/Layout'
import { MDX } from '@components/MDX'
import { BlogProps, WebpackContext } from '@types'
import { getSlugs } from '@utils/getSlugs'


export default function BlogPost({
  pageTitle,
  frontmatter,
  markdownBody,
}: BlogProps) {
  return <>
    {!frontmatter ?
      null :
      <Layout pageTitle={`${frontmatter.title} | ${pageTitle} `}>
        <article>

          <header>
            {frontmatter.hero_image && 
              <Image
                objectFit='cover'
                src={frontmatter.hero_image}
                alt={frontmatter.title}
              />}
            <Heading as='h2'>{frontmatter.title}</Heading>
          </header>

          <MDX markdownBody={markdownBody} />

        </article>
      </Layout>}
  </>
}

export const getStaticProps: GetStaticProps<BlogProps> = async ({ ...ctx }) => {
  const { postname } = ctx.params

  const content = await import(`../../posts/${postname}.md`)
  const config = await import('../../siteconfig.json')
  const data = matter(content.default)

  return {
    props: {
      pageTitle: config.title,
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
