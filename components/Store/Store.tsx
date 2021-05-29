import { BaseProps } from 'types/Blog'
import { ThemeProvider } from '@components/Store/ThemeProvider'


export function Store({ children }:BaseProps) {
  return <ThemeProvider>{children}</ThemeProvider>
}
