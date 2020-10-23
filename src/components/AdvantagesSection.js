import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import Icon from '../assets/images/icon-check.svg'
import {FaCoins, FaFire, FaLeaf} from 'react-icons/fa'
import {MdHome} from 'react-icons/md'

import {graphql, useStaticQuery} from 'gatsby'
import useCurrentWidth from '../hooks/useCurrentWidth'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background-color: var(--white);
`
const SectionStyles = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 6rem;
  padding: 14rem 0;
  margin: 0 16rem 0 25rem;
  @media only screen and (max-width: 1842px) {
    margin: 0 10rem 0 15rem;
  }
  @media only screen and (max-width: 1560px) {
    margin: 0 8rem 0 14rem;
    padding: 12rem 0;
  }
  @media only screen and (max-width: 1287px) {
    margin: 0 6rem 0 10rem;
    padding: 10rem 0;
  }
  @media only screen and (max-width: 1109px) {
    margin: 0 2rem 0 6rem;
    grid-gap: 4rem;
    padding: 8rem 0;
  }
  @media only screen and (max-width: 870px) {
    margin: 0 2rem 0 4rem;
  }
  @media only screen and (max-width: 804px) {
    grid-gap: 1rem;
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
      font-size: 2.8rem;
      line-height: 4rem;
      color: var(--lightGrey);
      font-weight: 300;
      margin-bottom: 4rem;
      max-width: 38rem;
      @media only screen and (max-width: 1560px) {
        font-size: 2.4rem;
        line-height: 3.4rem;
      }
      @media only screen and (max-width: 1287px) {
        font-size: 1.7rem;
        line-height: 2.5rem;
      }
    }

    .title {
      font-size: 3.6rem;
      line-height: 4.5rem;
      font-weight: 900;
      color: var(--black);
      margin-bottom: 2.4rem;
      padding: 0;
      max-width: 48rem;
      @media only screen and (max-width: 1692px) {
        font-size: 3rem;
        line-height: 3.7rem;
      }
      @media only screen and (max-width: 1570px) {
        font-size: 2.4rem;
        line-height: 3rem;
      }
      @media only screen and (max-width: 1294px) {
        font-size: 2rem;
        line-height: 2.6rem;
      }
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
  @media only screen and (max-width: 1560px) {
    grid-gap: 5rem;
  }
  @media only screen and (max-width: 1287px) {
    grid-gap: 3rem;
  }
  @media only screen and (max-width: 804px) {
    grid-gap: 2rem;
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
    @media only screen and (max-width: 1560px) {
      padding: 2.4rem;
    }
    @media only screen and (max-width: 1287px) {
      padding: 1.2rem;
    }
    @media only screen and (max-width: 914px) {
      padding: 0.8rem;
    }
  }

  .card {
    display: grid;
    background: white;
    border-radius: 4px;
    box-shadow: 0px 4px 28px -4px rgba(0,0,0,0.12);
    position: relative;
    max-width: 360px;
    padding: 5.2rem 6.6rem 7.4rem 3.6rem;
    @media only screen and (max-width: 1560px) {
      padding: 4rem 6rem 6rem 3.2rem;
    }
    @media only screen and (max-width: 1464px) {
      padding: 3rem 4.5rem 4.5rem 2.4rem;
    }
    @media only screen and (max-width: 1287px) {
      padding: 2.7rem 4rem 4rem 2.15rem;
    }
    @media only screen and (max-width: 1148px) {
      padding: 2.7rem 1.6rem 3rem;
    }
    @media only screen and (max-width: 914px) {
      padding: 2.2rem 1.3rem 2.4rem;
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
        margin-top: 8rem;
      }
      @media only screen and (max-width: 1560px) {
        margin-top: 5rem;
      }
      @media only screen and (max-width: 1287px) {
        margin-top: 3rem;
      }
      @media only screen and (max-width: 804px) {
        margin-top: 2rem;
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
    @media only screen and (max-width: 1464px) {
      margin-top: 0.8rem;
      font-size: 1.8rem;
      line-height: 2.7rem;
    }
    @media only screen and (max-width: 1148px) {
      margin-top: 0.4rem;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    @media only screen and (max-width: 914px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }

  .title {
    font-size: 2.8rem;
    line-height: 4rem;
    font-weight: 700;
    color: var(--blackText);
    margin-top: 3rem;
    @media only screen and (max-width: 1464px) {
      font-size: 2.5rem;
      line-height: 3.6rem;
      margin-top: 2.4rem;
    }
    @media only screen and (max-width: 1148px) {
      font-size: 2rem;
      line-height: 3rem;
      margin-top: 1.2rem;
    }
    @media only screen and (max-width: 914px) {
      font-size: 1.8rem;
      line-height: 2.7rem;
      margin-top: 1rem;
    }
  }
`

const Card = ({icon, title, paragraph, accent}) => {
  let width = useCurrentWidth();

  return (
    <div className={accent ? "accent card" : "card"}>
      <div className="content">
        { icon === "coins" ? <FaCoins size={width <= 1287 ? "26px" : "38px"} color="#F05D05"/> :
          icon === "ecology" ? <FaLeaf size={width <= 1287 ? "26px" : "38px"} color="#F05D05"/> :
          icon === "home" ? <MdHome size={width <= 1287 ? "34px" : "48px"} color="#F05D05"/> :
          <FaFire size={width <= 1287 ? "26px" : "38px"} color="#F05D05"/> }
        
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
