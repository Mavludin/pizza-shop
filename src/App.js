import { createRef, useState } from 'react'
import './App.css'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import { LoginPopUp } from './components/LoginPopUp/LoginPopUp'
import { Routes } from './components/Routes/Routes'

export const App = () => {
  const mainHeading = createRef()
  const [isLoginPopUpVisible, setIsLoginPopUpVisible] = useState(false)

  return (
    <div className='App'>
        <Header mainHeading={mainHeading} setIsLoginPopUpVisible={setIsLoginPopUpVisible} />
      <main>
        <Routes mainHeading={mainHeading} />
      </main>
      <Footer />
      {isLoginPopUpVisible ? (
        <LoginPopUp
          setIsLoginPopUpVisible={setIsLoginPopUpVisible}
          isLoginPopUpVisible={isLoginPopUpVisible}
        />
      ) : null}
    </div>
  )
}
