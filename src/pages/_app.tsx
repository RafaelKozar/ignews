import { AppProps } from 'next/app'
import React from 'react'
import { Header } from '../components/Header'
import {Provider as NextAuthProvider} from 'next-auth/client'
import '../styles/global.scss'

///Este é toda vez recarregado toda vez que o usuário troca de tela
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
