import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Box from "../components/shared/styled-system/Box";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Box padding="4em 8em">
      <Component {...pageProps} />
    </Box>
  )
}

export default MyApp
