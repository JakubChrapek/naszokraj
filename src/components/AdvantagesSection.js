import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import Icon from '../assets/images/icon-check.svg'
import {FaCoins, FaFire, FaLeaf} from 'react-icons/fa'
import {MdHome} from 'react-icons/md'

import {graphql, useStaticQuery} from 'gatsby'

const Wrapper = styled.section`
  background-color: var(--white);
`
const SectionStyles = styled.div`
  margin: 10rem 12rem 0 22rem;
  padding: 10rem 0;
  display: grid;
  grid-template-columns: minmax(340px, 1fr) 2fr;
  grid-gap: 10rem;
`

const CardStyles = styled.ul`
  --width: 340px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, var(--width));
  grid-template-rows: repeat(2, var(--width));
  justify-content: flex-end;
  grid-gap: 8rem;
  
  svg {
    padding: 1.8rem;
    background: var(--white);
    border-radius: 4px;
  }

  > li {
    display: grid;
    background: white;
    padding: 3.4rem 2.4rem 6.4rem;
    border-radius: 4px;
    box-shadow: 2px 2px 12px -4px rgba(0,0,0,0.2);
    &:last-child {
      background: var(--accent);
      p {
        color: var(--white);
      }

      .title {
        color: white;
      }
    }
  }

  p {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 3rem;
    letter-spacing: 0;
    color: var(--lightGrey);
  }

  .title {
    font-size: 20px;
    font-weight: 500;
    color: var(--blackText);
    margin-top: 3rem;
  }
`

const Card = ({icon, title, paragraph}) => {
  return (
    <li>
    { icon === "coins" ? <FaCoins size="24px" color="#F05D05"/> :
      icon === "ecology" ? <FaLeaf size="24px" color="#F05D05"/> :
      icon === "home" ? <MdHome size="28px" color="#F05D05"/> :
      <FaFire size="24px" color="#F05D05"/> }
    
    <p className="title">{title}</p>
    <p>{paragraph}</p>
  </li>
)}

const AdvantagesSection = () => {
  return (
    <Wrapper id="#advantages">
      <SectionStyles>
        <div className="text">
          <p className="title">Zalety regularnych przeglądów i konserwacji kotła.</p>
          <span className="line"/>
          <p>Przeglądów dokonujemy u klientów przynajmniej raz w roku. Ściśle trzymamy się wytycznych producenta urządzenia oraz przepisów prawa budowlanego. Regularność i terminowość naprawdę się opłaca.</p>
          <a href="#kontakt"><button type="kontakt">Kontakt</button></a>
        </div>
        <CardStyles className="cardsWrapper">
          <Card 
            icon="coins" 
            title="Oszczędności" 
            paragraph="Paliwo gazowe to lwia część budżetów domowych. Inwestycje w sprzęt szybko się zwracają."  
          />
          <Card 
            icon="ecology" 
            title="Oszczędności" 
            paragraph="Paliwo gazowe to lwia część budżetów domowych. Inwestycje w sprzęt szybko się zwracają."    
          />
          <Card   
            icon="home" 
            title="Oszczędności" 
            paragraph="Paliwo gazowe to lwia część budżetów domowych. Inwestycje w sprzęt szybko się zwracają."  
          />
          <Card 
            icon="security" 
            title="Oszczędności" 
            paragraph="Paliwo gazowe to lwia część budżetów domowych. Inwestycje w sprzęt szybko się zwracają."  
          
          />
        </CardStyles>
      </SectionStyles>
    </Wrapper>
  )
}

export default AdvantagesSection
