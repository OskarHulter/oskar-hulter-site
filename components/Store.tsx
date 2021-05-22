import { FC } from 'react'
import ThemeProvider from './ThemeProvider'

const Store: FC = ({ children }) =>
  <ThemeProvider>
    {children}
  </ThemeProvider>

export default Store