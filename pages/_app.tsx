import "antd/dist/antd.dark.css"
import "../styles/globals.sass"
import type { AppProps } from "next/app"

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
