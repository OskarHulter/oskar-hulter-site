import React, { FC } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import matter from 'gray-matter'
import { Heading, Image } from '@chakra-ui/react'
import getSlugs from '@utils/getSlugs'
import Layout from '@components/Layout/Layout'
import MDX from '@components/MDX'
import { FrontMatter, WebpackContext } from 'types/Blog'


const BlogPost: FC<Props> = ({
  siteTitle = 'Oskar Hulter\'s Web Dev Blog',
  frontmatter,
  markdownBody,
}) => 
  <>
    {!frontmatter ?
      null :
      <Layout pageTitle={`${frontmatter.title} | ${siteTitle} `}>
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