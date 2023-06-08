import React from 'react'
import Footer from '../components/Footer'
import ImageSlider from '../components/ImageSlider'
import Navbar from '../components/Navbar'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
        <Navbar/>
        <ImageSlider/>
        <Services/>
        <Footer/>
    </>
  )
}

export default Home