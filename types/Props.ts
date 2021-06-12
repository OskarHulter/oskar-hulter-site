import { IconType } from 'react-icons'


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


export type ButtonProps = {
  text: string
  label: string
  href: string
  icon?: IconType | JSX.Element
}