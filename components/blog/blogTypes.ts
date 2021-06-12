import { PageProps } from '@types'


export type BlogContext = {
  default: string
  index: number
}

export type BlogAuthorProps = {
  date: Date
  name: string
}

export type FrontMatter = {
  title?: string
  hero_image?: string
  imageAlt?: string
  date?: string
  key?: string
}

export type DocumentFrontMatter = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  content: string
}

export type Post = {
  slug: string
  frontmatter?: FrontMatter
  markdownBody?: string
  author?: string
}
export type PostsProps = {
  posts: Post[]
} & Partial<PageProps>

export type PostProps = {
  post: Post
} & Partial<PageProps>

export type BlogProps = {
  frontmatter?: FrontMatter
  markdownBody: string
} & Partial<PageProps>

export type WebpackContext = __WebpackModuleApi.RequireContext