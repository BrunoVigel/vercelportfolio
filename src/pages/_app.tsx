import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import NavModal from '../components/NavModal'
import Modal from 'react-modal'
import { useState } from 'react'
import Footer from '../components/Footer'
import { useRouter } from 'next/router'
import { ContactBnt } from '../components/ContactBtn'

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
      <Header onOpenModal={handleOpenModal}/>
      <NavModal isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
      <Component {...pageProps} />
      <Footer/>
      <ContactBnt />
    </>
  )
}

export default MyApp
