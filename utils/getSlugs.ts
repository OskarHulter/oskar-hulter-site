import { WebpackContext } from 'types'


export function getSlugs (context: WebpackContext): string[] {
  const keys = context.keys()

  const data = keys.map(key => 
    key.replace(/^.*[\\/]/, '').slice(0, -3)
  )

  return data
}
