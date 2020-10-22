import React from 'react'
import SEO from '../components/SEO'
import Hero from "../components/HeroSection"
import About from "../components/AboutUsSection"
import Services from "../components/ServicesSection"
import Advantages from "../components/AdvantagesSection"
import FAQ from "../components/FAQSection"
import Contact from '../components/ContactUsSection'

const HomePage = (props) => {
  return (
    <>
      <SEO title="Piece Gazowe"/>
      <Hero />
      <About />
      <Services />
      <Advantages />
      <FAQ />
      <Contact path={props.location.pathname}/>
    </>
  )
}

export default HomePage
