export type BlogContext = {
  default: string
  index: number
}

export type FrontMatter = {
  title?: string
  hero_image?: string
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
}

export type RestProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [_: string]: any
}

export type BaseProps = {
  children?: React.ReactNode
} & Partial<RestProps>

export type PageProps = {
  pageTitle?: string
  pageDescription?: string
} & Partial<BaseProps>

export type PostsProps = {
  posts: Post[]
} & Partial<PageProps>

export type BlogProps = {
  frontmatter?: FrontMatter
  markdownBody: string
} & Partial<PageProps>

export type WebpackContext = __WebpackModuleApi.RequireContext