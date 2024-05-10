import React from 'react'
import './App.css'
import Navbar from './components/Header-page/Navbar'
import Heading from './components/Main-page/Heading-page/Heading'
import Footer from './components/Footer-page/Footer'
import Titlecard from './components/Main-page/Title-page/Titlecard'
import Pricing from './components/Main-page/Pricing-page/Pricing'


function App() {

  return (
    <>
      <div >
        <Navbar />
        <Heading />
        <Titlecard />
        <Pricing />
        <Footer />
      </div>
    </>
  )
}

export default App
