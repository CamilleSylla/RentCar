import '../styles/globals.css'
import NavBar from '../Theme/NavBar/NavBar'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <NavBar/>
    <Component {...pageProps} />
    </>
     )
}

export default MyApp
