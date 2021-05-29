import { AppProps } from 'next/dist/next-server/lib/router/router'
import { Store } from '@components/Store/Store'


export default function MyApp({ Component, pageProps }: AppProps){

  return <Store><Component {...pageProps} /></Store>
}
  
// modified version - allows for custom pageProps type, falling back to 'any'
// eslint-disable-next-line @typescript-eslint/no-explicit-any

/*
AppProps<CustomPageProps>
type CustomPageProps = {

}

type AppProps<P = any> = {
  pageProps: P
} & Omit<NextAppProps<P>, 'pageProps'>

*/