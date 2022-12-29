import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import NavModal from '../components/NavModal'
import Modal from 'react-modal'
import { useState } from 'react'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { ContactBnt } from '../components/ContactBtn'
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'next-themes'

Modal.setAppElement('#__next')




function MyApp({ Component, pageProps }: AppProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const {asPath} = useRouter()

  function handleOpenModal() {
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
  }

  return (
    <>
      <ThemeProvider enableSystem={false}>
        <Header onOpenModal={handleOpenModal}/>
        <NavModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
        <Component {...pageProps} />
        <NextNProgress color='#a972cb' />
        <Footer/>
        <ContactBnt />
      </ThemeProvider>
    </>
  )
}

export default MyApp
