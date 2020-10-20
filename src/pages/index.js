import React from 'react'
import SEO from '../components/SEO'
import Hero from "../components/HeroSection"
import About from "../components/AboutUsSection"
import Services from "../components/ServicesSection"
import Advantages from "../components/AdvantagesSection"

const HomePage = () => {
  return (
    <>
      <SEO title="Piece Gazowe"/>
      <Hero />
      <About />
      <Services />
      <Advantages />
    </>
  )
}

export default HomePage
