import type { AppProps as NextAppProps } from 'next/app'
import Store from '../components/Store'


const MyApp = ({ Component, pageProps }: AppProps<CustomPageProps>): JSX.Element =>
  <Store>
    <Component {...pageProps} />
  </Store>

// modified version - allows for custom pageProps type, falling back to 'any'
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

type CustomPageProps = {

}

export default MyApp