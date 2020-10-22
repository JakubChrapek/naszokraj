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
  margin: 10rem 12rem 0 22rem;
  padding-bottom: 10rem;
  max-width: 1920px;
  
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
    font-weight: 400;
    letter-spacing: 0.96px;
  }

  .grid {
    display: grid;
    margin-top: 4rem;
    grid-template-columns: 3fr 2fr;
    grid-gap: 12rem;
  }

  .textWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  p {
    font-weight: 400;
    font-size: 2.8rem;
    line-height: 4rem;
    color: var(--grey);
    margin-bottom: 3.2rem;
  }

  .accent {
    font-weight: 900;
    font-size: 3.6rem;
    line-height: 4.5rem;
    color: var(--black);
    margin-bottom: 1.6rem;
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
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 0;
    font-weight: 500;
    color: var(--blackText);
    margin-top: 4rem;
    img {
      margin-right: 6rem;
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

      <SectionStyles id="#services">
        <div className="titleWrapper">
          <span></span>
          <h2 className="line">Usługi</h2>
        </div>
        <div className="grid">
          <div className="textWrapper">
            <p className="accent">
              W czym możemy Ci pomóc?
            </p>
            <p>Jesteśmy zgranym zespołem do zadań specjalnych. Oto nasz serwis:</p>
            <ul>
              <li><img src={Icon} alt="checkmark icon" />Instalacja / wymiana gazowych i elektrycznych kotłów 1 i 2 funkcyjnych</li>
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
