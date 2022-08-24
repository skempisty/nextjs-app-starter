import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import NextNProgress from "nextjs-progressbar";
import Box from "../components/shared/styled-system/Box";
import NavBar from "../components/NavBar";
import { Provider } from "react-redux";
import { store } from '../store'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextNProgress options={{ showSpinner: false }}/>
      <NavBar/>

      <Box padding="4em 8em">
        <Component {...pageProps} />
      </Box>
    </Provider>
  )
}

export default MyApp
