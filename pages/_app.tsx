import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import type { AppProps } from 'next/app'
import Box from "../components/shared/styled-system/Box";
import NavBar from "../components/NavBar";
import { store } from '../store'
import {Provider} from "react-redux";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NavBar/>

      <Box padding="4em 8em">
        <Component {...pageProps} />
      </Box>
    </Provider>
  )
}

export default MyApp
