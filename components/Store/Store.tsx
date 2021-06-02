import { BaseProps } from 'types'
import { ThemeProvider } from '@components/Store/ThemeProvider'


export function Store({ children }:BaseProps) {
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}
