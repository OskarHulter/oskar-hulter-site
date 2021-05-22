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
  data: any
  content: string
}

export type Post = {
  slug: string
  frontmatter?: FrontMatter
  markdownBody?: string
}

export type WebpackContext = __WebpackModuleApi.RequireContext