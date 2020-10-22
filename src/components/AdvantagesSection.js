import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import Icon from '../assets/images/icon-check.svg'
import {FaCoins, FaFire, FaLeaf} from 'react-icons/fa'
import {MdHome} from 'react-icons/md'

import {graphql, useStaticQuery} from 'gatsby'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: var(--white);
`
const SectionStyles = styled.div`
  display: grid;
  grid-template-columns: minmax(320px, 520px) 2fr;
  grid-gap: 3rem;
  padding: 14rem 0;
  margin: 0 16rem 0 25rem;
  @media only screen and (max-width: 1842px) {
    margin: 0 10rem 0 15rem;
  }
  max-width: 1920px;
  width: 100%;

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span {
      width: 39px;
      height: 3px;
      background-color: var(--accent);
      margin-right: 18px;
      margin-bottom: 2.4rem;
    }

    p {
      font-size: 28px;
      line-height: 40px;
      color: var(--lightGrey);
      font-weight: 300;
      margin-bottom: 4rem;
      max-width: 380px;
    }

    .title {
      font-size: 3.6rem;
      line-height: 4.5rem;
      font-weight: 700;
      color: var(--black);
      margin-bottom: 2.4rem;
      padding: 0;
      max-width: unset;
    }
  }
`

const CardStyles = styled.div`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem;
  @media only screen and (max-width: 1750px) {
    grid-gap: 6rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    &:last-child {
      margin-top: 50%;
    }
  }

  svg {
    padding: 3rem;
    background: var(--white);
    border-radius: 4px;
    margin-left: 0.4rem;
  }

  .card {
    display: grid;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 4px 28px -4px rgba(0,0,0,0.12);
    position: relative;
    max-width: 360px;
    padding: 5.2rem 6.6rem 7.4rem 3.6rem;
    @media only screen and (max-width: 1750px) {
      //
    }

    &.accent {
      background: var(--accent);
      p {
        color: var(--white);
      }

      .title {
        color: white;
      }
    }
    &:last-child {
      margin-top: 8rem;
      @media only screen and (max-width: 1750px) {
        margin-top: 6rem;
      }
    }
    
  }



  p {
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
    letter-spacing: 0;
    color: var(--lightGrey);
  }

  .title {
    font-size: 2.8rem;
    line-height: 4rem;
    font-weight: 700;
    color: var(--blackText);
    margin-top: 3rem;
  }
`

const Card = ({icon, title, paragraph, accent}) => {
  return (
    <div className={accent ? "accent card" : "card"}>
      <div className="content">
        { icon === "coins" ? <FaCoins size="38px" color="#F05D05"/> :
          icon === "ecology" ? <FaLeaf size="38px" color="#F05D05"/> :
          icon === "home" ? <MdHome size="48px" color="#F05D05"/> :
          <FaFire size="38px" color="#F05D05"/> }
        
        <p className="title">{title}</p>
        <p>{paragraph}</p>
      </div>
  </div>
)}

const AdvantagesSection = () => {
  return (
    <Wrapper id="#advantages">
      <SectionStyles>
        <div className="text">
          <p className="title">Zalety regularnych przeglądów i konserwacji kotła</p>
          <span></span>
          <p>Przeglądów dokonujemy u klientów przynajmniej raz w roku. Ściśle trzymamy się wytycznych producenta urządzenia oraz przepisów prawa budowlanego. Regularność i terminowość naprawdę się opłaca.</p>
          <a href="#kontakt"><button className="border" type="kontakt">Kontakt</button></a>
        </div>
        <CardStyles>
          <div>
            <Card 
              icon="coins" 
              title="Oszczędności" 
              paragraph="Paliwo gazowe to lwia część budżetów domowych. Inwestycje w sprzęt szybko się zwracają."  
            />
            <Card   
              icon="home" 
              title="Przyjazny dom" 
              paragraph="Ogrzewanie to fundament domowej atmosfery. Aby tak było, ciepło musi być właściwie rozprowadzone."  
            />
          </div>
          <div>
            <Card 
              icon="ecology" 
              title="Ekologia" 
              paragraph="Idealnie dobrany piec pozwala optymalnie wykorzystać energię, bez strat dla klimatu."    
            />
            <Card 
              accent
              icon="security" 
              title="Bezpieczeństwo" 
              paragraph="Sprawny piec w domu to nie tylko ciepło. To obowiązek, dla bezpieczeństwa domoników."  
            
            />
          </div>
        </CardStyles>
      </SectionStyles>
    </Wrapper>
  )
}

export default AdvantagesSection
