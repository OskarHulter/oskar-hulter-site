import matter from 'gray-matter'
import { DocumentFrontMatter, WebpackContext, Post, BlogContext } from 'types/Blog'


const getPosts = (context: WebpackContext): Post[] => {
  const keys = context.keys()
  const values = keys.map<BlogContext>(context)

  const data = keys.map((key, index) => {
    const slug: string = key.replace(/^.*[\\/]/, '').slice(0, -3)
    const value = values[index]
    const document: DocumentFrontMatter = matter(value.default) as DocumentFrontMatter
    return {
      frontmatter: document.data,
      markdownBody: document.content,
      slug,
    }
  })
  return data
}

export default getPosts
