import matter from 'gray-matter'
import { BlogContext, DocumentFrontMatter, Post, WebpackContext } from 'types'


export function getPosts(context: WebpackContext): Post[] {
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
