import { AppProps } from 'next/app'
import React from 'react'
import { Header } from '../components/Header'
import '../styles/global.scss'

///Este é toda vez recarregado toda vez que o usuário troca de tela
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
