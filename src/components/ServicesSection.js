import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import Icon from '../assets/images/icon-check.svg'
import {graphql, useStaticQuery} from 'gatsby'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`

const SectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 13rem 16rem 0 25rem;
  padding-bottom: 14rem;
  @media only screen and (max-width: 1842px) {
    margin: 13rem 10rem 0 15rem;
  }
  @media only screen and (max-width: 1560px) {
    margin: 13rem 8rem 0 14rem;
  }
  @media only screen and (max-width: 1287px) {
    margin: 13rem 6rem 0 10rem;
    padding-bottom: 10rem;
  }
  @media only screen and (max-width: 1109px) {
    margin: 13rem 6rem 0 6rem;
  }
  @media only screen and (max-width: 870px) {
    margin: 10rem 2rem 0 4rem;
    padding-bottom: 8rem;
  }
  @media only screen and (max-width: 767px) {
    margin: 0 3rem;
    padding-bottom: 4rem;
  }

  max-width: 1920px;
  width: 100%;
  
  .titleWrapper {
    display: flex;
    align-items: center;
  }

  span {
    width: 39px;
    height: 3px;
    background-color: var(--accent);
    margin-right: 18px;
  }

  h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: 0.96px;
  }

  .grid {
    display: grid;
    margin-top: 7rem;
    grid-template-columns: 3fr 2fr;
    grid-gap: 12rem;
    @media only screen and (max-width: 1682px) {
      grid-gap: 8rem;
    }
    @media only screen and (max-width: 1238px) {
      grid-gap: 6rem;
      margin-top: 5rem;
    }
    @media only screen and (max-width: 1238px) {
      grid-gap: 3rem;
    }
    @media only screen and (max-width: 870px) {
      grid-gap: 2rem;
    }
    @media only screen and (max-width: 767px) {
      margin-top: 6rem;
      grid-template-columns: 1fr;
      grid-gap: 4rem;
    }
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-weight: 400;
    font-size: 2.6rem;
    line-height: 4rem;
    color: var(--lightGrey);
    margin-bottom: 1rem;
    margin-top: 0.5rem;
    @media only screen and (max-width: 1238px) {
      font-size: 2.2rem;
      line-height: 3.3rem;
      margin-bottom: 0.5rem;
    }
    @media only screen and (max-width: 1014px) {
      font-size: 1.8rem;
      line-height: 2.6rem;
      margin-bottom: 0.5rem;
    }
    @media only screen and (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 2.3rem;
      margin-bottom: 0.5rem;
    }
  }

  .accent {
    font-weight: 900;
    font-size: 3.6rem;
    line-height: 4.5rem;
    color: var(--black);
    margin-bottom: 1.6rem;
    @media only screen and (max-width: 1238px) {
      font-size: 3rem;
      line-height: 3.8rem;
      margin-bottom: 1.2rem;
    }
    @media only screen and (max-width: 1014px) {
      font-size: 2.6rem;
      line-height: 3.2rem;
      margin-bottom: 1rem;
    }
    @media only screen and (max-width: 767px) {
      font-size: 1.8rem;
      line-height: 2.3rem;
      font-size: clamp(2rem, 1.5136rem + 0.8949vw, 2.2rem);
      line-height: clamp(2.6rem, 1.8705rem + 1.3423vw, 2.9rem);
    }
  }

  ul {
    padding: 0;
    margin: 0;
    list-style-position: inside;
    list-style-type: none;
  }

  li {
    display: flex;
    align-items: center;
    list-style: none;
    font-size: 2rem;
    line-height: 2.6rem;
    letter-spacing: 0;
    font-weight: 700;
    color: var(--blackText);
    margin-top: 3.4rem;
    img {
      margin-right: 6rem;
    }

    @media only screen and (max-width: 1438px) {
      margin-top: 3rem;
      img {
        margin-right: 4rem;
      }
    }
    @media only screen and (max-width: 1238px) {
      font-size: 1.8rem;
      line-height: 2.4rem;
      margin-top: 2.4rem;
      img {
        margin-right: 3rem;
      }
    }
    @media only screen and (max-width: 1014px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin-top: 2rem;
      img {
        margin-right: 2rem;
        width: 24px;
      }
    }
    @media only screen and (max-width: 870px) {
      font-size: 1.4rem;
      line-height: 2rem;
      margin-top: 1.8rem;
      img {
        margin-right: 1.6rem;
        width: 20px;
      }
    }
    @media only screen and (max-width: 767px) {
      align-items: flex-start;
      img {
        margin-right: 3.6rem;
        margin-top: 0.3rem;
        width: 28px;
      }
    }
  }

  .gatsby-image-wrapper {
    img {
      object-fit: contain !important;
    }
  }

`

const ServicesSection = () => {
const {datoCmsOffer} = useStaticQuery(graphql`
    query OfferQuery {
    datoCmsOffer {
    paragraph
    paragraphBold
    title
    offerImage {
      title
      alt
      fluid {
        ...GatsbyDatoCmsFluid_tracedSVG
      }
    }
  }
}`)
  return (
    <Wrapper>
      <SectionStyles >
        <div className="titleWrapper">
          <span></span>
          <h2 className="line" id="uslugi">Usługi</h2>
        </div>
        <div className="grid">
          <div className="textWrapper">
            <p className="accent">
              W czym możemy Ci pomóc?
            </p>
            <p>To my - Lidka i Radek.<br/> Możesz nam zlecić takie działania:</p>
            <ul>
              <li><img src={Icon} alt="checkmark icon" />Instalacja / wymiana gazowych i elektrycznych kotłów 1- i 2-funkcyjnych</li>
              <li><img src={Icon} alt="checkmark icon" />Instalacja / wymiana podgrzewaczy elektrycznych</li>
              <li><img src={Icon} alt="checkmark icon" />Wykonanie / modernizacja kompletnych instalacji CO</li>
              <li><img src={Icon} alt="checkmark icon" />Wykonanie / modernizacja instalacji gazowych</li>
              <li><img src={Icon} alt="checkmark icon" />Wykonanie / modernizacja instalacji wodnych i kanalizacyjnych</li>
              <li><img src={Icon} alt="checkmark icon" />Wykonanie / modernizacja instalacji elektrycznych</li>
              <li><img src={Icon} alt="checkmark icon" />Instalacja klimatyzacji</li>
            </ul>
          </div>
          <GatsbyImage fluid={datoCmsOffer.offerImage.fluid} alt={datoCmsOffer.offerImage.alt} />
        </div>
      </SectionStyles>
    </Wrapper>
  )
}

export default ServicesSection
