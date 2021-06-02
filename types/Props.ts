import { FrontMatter, Post } from 'types'


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

export type ButtonProps = {
  text: string
  label: string
  href: string
  icon: JSX.Element
}