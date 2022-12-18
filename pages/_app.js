//every importing style which comes here will be globally applicable else use .module.css
//we can only use normal css using node modules only nothing else
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
