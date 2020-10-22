import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'

import PhoneIcon from '../assets/images/icon-phone.svg'
import HeroBg from '../assets/images/hero-bg.svg'
import GatsbyImage from 'gatsby-image'

const HeroSectionStyles = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;
  height: calc(100vh - 120px);
  max-width: 1920px;

  .cta {
    display: flex;
    flex-direction: column;
    justify-self: stretch;
    justify-content: center;
    padding: 0 10% 15% 22rem;
    @media only screen and (max-width: 1600px) {
      padding: 0 8% 10% 15%;
    }

    span {
      color: var(--accent);
    }
    p {
      font-size: 2.2rem;
      color: var(--black);
      line-height: 1.3em;
    }

    button {
      margin-top: 2rem;
    }
  }

  h1 {
    font-size: 6rem;
    line-height: 1.3em;
    font-weight: 600;
  }

  .contactWrapper {
    position: relative;
    z-index: 2;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-gap: 1rem;
    background-color: white;
    padding: 2rem 6rem;
    p {
      margin: 0;
      color: var(--accent);
      font-size: 1.3rem;
    }

    a {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 2rem;
      color: var(--accent);
      text-decoration: none;
      font-weight: 600;
      font-size: 3.2rem;
      line-height: 3.2rem;
      &:hover {
        svg, img {
          transform: rotate(4deg) scale(1.04);
        }
      }
    }

    svg, img {
      height: 42px;
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

const HeroWrapper = styled.section`
  background-image: url(${({bg}) => bg});
  background-color: ${({bgColor}) => bgColor};
  background-repeat: no-repeat;
  background-size: 160vw;
  background-position: 65% 82%;
  display: flex;
  flex-direction: column;
  align-items: center;

`

const OurBrandsStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -10rem 12rem 0;
  p {
    align-self: flex-start;
    margin-left: 10rem;
  }

  > div {
    display: grid;
    width: 100%;
    margin-top: 8rem;
    grid-template-columns: repeat(5, minmax(100px, 1fr));
    grid-template-rows: 40px 40px;
    gap: 6rem 10rem;
  }
  .gatsby-image-wrapper {
    img, picture img {
      object-fit: contain !important;
    }
  }
`

const HeroSection = () => {
  const {datoCmsHero, allDatoCmsBrandImage} = useStaticQuery(graphql`
    query HeroQuery {
      datoCmsHero {
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
      allDatoCmsBrandImage {
        nodes {
          image {
            title
            alt
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  `)
  return (    
    <HeroWrapper bg={HeroBg} bgColor="#fff">
      <HeroSectionStyles>
        <div className="cta">
          <h1>{datoCmsHero.titleDark}<br/><span>{datoCmsHero.titleColour}</span></h1>
          <p>{datoCmsHero.paragraph}</p>
          <button>{datoCmsHero.contactButtonText}</button>
        </div>
        <div className="contact">
          <div className="contactWrapper">
            <p>Problem z piecem?</p>
            <a className="underline" href={`tel:+48${datoCmsHero.phoneNumber.replace(/ /g, '')}`}>
              <img src={PhoneIcon} alt="ikona telefonu" />
              <span>{datoCmsHero.phoneNumber}</span>
            </a>
          </div>
          <GatsbyImage fluid={datoCmsHero.heroImage.fluid} />
        </div>
      </HeroSectionStyles>
      <OurBrandsStyles>
        <p>Nasze marki</p>
        <div>
          {allDatoCmsBrandImage.nodes.reverse().map((node) => (
            <GatsbyImage fluid={node.image.fluid} alt={node.alt} />
          ))}
        </div>
      </OurBrandsStyles>
    </HeroWrapper>
  )
}

export default HeroSection
