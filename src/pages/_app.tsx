import {AppProps} from 'next/app'
import '../styles/global.scss'

///Este é toda vez recarregado toda vez que o usuário troca de tela
function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
