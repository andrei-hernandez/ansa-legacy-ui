import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { ConfigProvider, theme } from 'antd'

function MyApp ({ Component, pageProps: { session, ...pageProps } }:
  AppProps<{ session: Session }>): JSX.Element {
  const { darkAlgorithm } = theme ?? {}
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <title>AnySales</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/favicon.ico"
          rel="icon" />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />
      </Head>
      <SessionProvider session={session}>
        <ConfigProvider theme={{ algorithm: darkAlgorithm }}>
          <Component {...pageProps} />
        </ConfigProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
