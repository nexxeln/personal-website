import '../styles/globals.css'
import '../styles/nprogress.css'
import Router from 'next/router'
import NProgress from 'nprogress'

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false })
  Router.events.on('routeChangeStart', () => NProgress.start())
  Router.events.on('routeChangeComplete', () => NProgress.done())
  Router.events.on('routeChangeError', () => NProgress.done())

  return <Component {...pageProps} />
}

export default MyApp
