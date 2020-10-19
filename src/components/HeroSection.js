import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {graphql, useStaticQuery} from 'gatsby'

import Section from './Section'
import PhoneIcon from '../assets/images/icon-phone.svg'
import GatsbyImage from 'gatsby-image'

const HeroSectionStyles = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;
  height: calc(100vh - 120px);

  .contactWrapper {
    position: relative;
    z-index: 2;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-gap: 1rem;
    background-color: white;
    padding: 2rem 4rem;
    p {
      margin: 0;
      color: var(--accent);
    }

    a {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 1rem;
      color: var(--accent);
      text-decoration: none;
      &:hover {
        svg {
          transform: rotate(4deg) scale(1.04);
        }
      }
    }

    svg {
      height: 32px;
      fill: var(--accent);
      transition: transform .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  .contact {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    right: 0;
    height: 100vh;
    width: 40%;
    z-index: 0;
  }
`

const HeroSection = () => {
  const {datoCmsHeroSection} = useStaticQuery(graphql`
    query HeroQuery {
      datoCmsHeroSection {
        heroImage {
          fluid(maxWidth: 1000) {
          ...GatsbyDatoCmsFluid_tracedSVG
          }
          title
        }
        titleDark
        titleColour
        phoneNumber
        paragraph
        contactButtonText
      }
    }
  `)
  return (    
    <Section>
      <HeroSectionStyles>
        <div>
          <h1>{datoCmsHeroSection.titleDark}<br/>{datoCmsHeroSection.titleColour}</h1>
          <p>{datoCmsHeroSection.paragraph}</p>
          <button>{datoCmsHeroSection.contactButtonText}</button>
        </div>
        <div className="contact">
          <div className="contactWrapper">
            <p>Problem z piecem?</p>
            <a href={`tel:+48${datoCmsHeroSection.phoneNumber.replace(/ /g, '')}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-949 951 100 125"><switch><g><path d="M-860.6 1044.1c-1.9 2.9-5.2 4.6-8.7 4.4-3.5-.2-8-.7-11.1-1.5-13.8-3.6-28.1-12.2-40.2-24.3-12.1-12.1-20.7-26.4-24.3-40.2-.8-3.1-1.2-7.5-1.5-11-.2-3.4 1.4-6.7 4.3-8.6l12.3-8.2c3.2-2.1 7.5-1 9.2 2.4l10 19.3c1.4 2.7.7 6.1-1.7 8l-9 7c3.6 6.7 7 12.1 13.6 18.6 6.1 6.1 11.4 9.7 18.3 13.4l7.1-9.1c1.9-2.4 5.3-3.2 8-1.7l19.4 10c3.4 1.7 4.5 6 2.4 9.2l-8.1 12.3z"/></g></switch></svg>
              <span>{datoCmsHeroSection.phoneNumber}</span>
            </a>
          </div>
          <GatsbyImage fluid={datoCmsHeroSection.heroImage.fluid} />
        </div>
      </HeroSectionStyles>
    </Section>
  )
}

export default HeroSection
