import React from 'react'
import styled from 'styled-components'
import {graphql, useStaticQuery} from 'gatsby'

import PhoneIcon from '../assets/images/icon-phone.svg'
import HeroBg from '../assets/images/hero-bg.svg'
import GatsbyImage from 'gatsby-image'
import useCurrentWidth from '../hooks/useCurrentWidth'

const HeroSectionStyles = styled.div`
  display: grid;
  grid-template-columns: 6fr 5fr;
  height: calc(100vh - 170px);
  max-height: calc(1024px - 170px);
  @media only screen and (max-width: 1560px) {
    height: calc(100vh - 120px);
    max-height: calc(1024px - 120px);
  } 
  @media only screen and (max-width: 1109px) {
    height: calc(100vh - 100px);
    max-height: calc(1024px - 100px);
  } 
  max-width: 1920px;

  .cta {
    display: flex;
    flex-direction: column;
    justify-self: stretch;
    justify-content: center;
    padding: 0 10% 10% 27rem;
    @media only screen and (max-width: 1842px) {
      padding: 0 8% 10% 15rem;
    }
    @media only screen and (max-width: 1600px) {
      padding: 0 8% 10% 15%;
    }

    @media only screen and (max-width: 1560px) {
      padding: 0 8% 10% 14rem;
    }
    @media only screen and (max-width: 1287px) {
      padding: 0 8% 10% 10rem;
    }
    @media only screen and (max-width: 1109px) {
      padding: 0 4rem 10% 6rem;
    } 
    @media only screen and (max-width: 965px) {
      padding: 0 1rem 8% 6rem;
    } 
    

    span {
      color: var(--accent);
    }
    p {
      font-size: 2.8rem;
      color: var(--grey);
      line-height: 1.5em;
      margin-top: 2.2rem;
      @media only screen and (max-width: 1560px) {
        font-size: 2.4rem;
      } 
      @media only screen and (max-width: 1287px) {
        font-size: 2.2rem;
      }
      @media only screen and (max-width: 1109px) {
        font-size: 2rem;
        margin-top: 1.4rem;
      } 
    }

    button {
      margin-top: 8rem;
      @media only screen and (max-width: 1109px) {
        margin-top: 6rem;
      } 
    }
  }

  h1 {
    font-size: 7.2rem;
    line-height: 1.3em;
    font-weight: 900;
    @media only screen and (max-width: 1560px) {
      font-size: 6rem;
    } 
    @media only screen and (max-width: 1287px) {
      font-size: 5.2rem;
    }
    @media only screen and (max-width: 1109px) {
      font-size: 4.8rem;
    } 
    @media only screen and (max-width: 910px) {
      font-size: 4rem;
    } 
  }

  .contactWrapper {
    position: relative;
    z-index: 5;
    display: grid;
    align-content: center;
    justify-items: center;
    grid-gap: 1rem;
    background-color: white;
    padding: 2.9rem 7.3rem;
    @media only screen and (max-width: 1560px) {
      padding: 2.2rem 5.3rem;
    } 
    @media only screen and (max-width: 1560px) {
      padding: 2rem 4.6rem;
    } 
    @media only screen and (max-width: 1109px) {
      padding: 1.6rem 3.6rem;
    }  
    p {
      margin: 0 0 0.6rem;
      color: var(--accent);
      font-size: 1.6rem;
      font-weight: 700;
      @media only screen and (max-width: 1560px) {
        font-size: 1.5rem;
      } 
      @media only screen and (max-width: 1109px) {
        font-size: 1.4rem;
      } 
    }

    a {
      display: grid;
      grid-auto-flow: column;
      grid-gap: 2rem;
      color: var(--accent);
      text-decoration: none;
      font-weight: 700;
      font-size: 3.4rem;
      line-height: 3.4rem;
      @media only screen and (max-width: 1560px) {
        font-size: 3rem;
        line-height: 3rem;
      } 
      @media only screen and (max-width: 1109px) {
        font-size: 2.6rem;
        line-height: 2.6rem;
      } 
      &:hover {
        svg, img {
          transform: rotate(4deg) scale(1.04);
        }
      }
    }

    svg, img {
      height: 46px;
      @media only screen and (max-width: 1560px) {
        height: 40px;
      } 
      @media only screen and (max-width: 1109px) {
        height: 36px;
      } 
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
    max-height: 1024px;
    width: 43%;
    @media only screen and (max-width: 1109px) {
      width: 40%;
    } 
    z-index: 4;
  }
  .buttons-wrapper {
    display: flex;
    height: 170px;
    align-items: center;
    justify-content: flex-end;
    margin: 0 9rem 0 0;
    @media only screen and (max-width: 1560px) {
      height: 120px;
      margin: 0 7rem 0 0;
    } 
    @media only screen and (max-width: 1109px) {
      height: 100px;
      margin: 0 4rem 0 0;
    } 
    @media only screen and (max-width: 890px) {
      margin: 0 1rem;
    }

    z-index: 5;
    position: absolute;
    top: 0; right: 0;
    button {
      margin-right: 3rem; 
      @media only screen and (max-width: 890px) {
        margin-right: 1rem; 
      }
      &:last-child {
        margin-right: 0;
      }
    }

  }

`

const HeroWrapper = styled.section`
  background-image: url(${({bg}) => bg});
  background-color: ${({bgColor}) => bgColor};
  background-repeat: no-repeat;
  background-size: 160vw;
  background-position: 115% 82%;

  @media only screen and (max-width: 1560px) {
    background-position: 115% 86%;
  }
  @media only screen and (max-width: 1320px) {
    background-position: 115% 90%;
  }
  @media only screen and (max-width: 1109px) {
    background-position: 115% 100%;
  }
  @media only screen and (max-width: 1109px) {
    background-position: 115% 120%;
  }
  @media only screen and (max-width: 920px) {
    background-position: 110% 100%;
    background-size: 200vw;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

`

const OurBrandsStyles = styled.div`
  margin-top: -6rem;
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    align-self: flex-start;
    font-size: 2.6rem;
    line-height: 2.6rem;
    font-weight: 700;
    color: var(--lightGrey);
    margin-left: 27rem;
    @media only screen and (max-width: 1842px) {
      margin-left: 15rem;
    }
    @media only screen and (max-width: 1560px) {
      margin-left: 14rem;
    }
    @media only screen and (max-width: 1287px) {
      margin-left: 10rem;
    }
    @media only screen and (max-width: 1109px) {
      margin-left: 6rem;
    }
  }

  > div {
    display: grid;
    width: 100%;
    max-width: 90vw;
    margin-top: 12rem;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 80px 80px;
    gap: 6rem 12rem;
    @media only screen and (max-width: 1587px) {
      margin-top: 7rem;
    }
    @media only screen and (max-width: 1287px) {
      gap: 5rem 9rem;
    }
    @media only screen and (max-width: 1147px) {
      gap: 3rem 6rem;
    }
    @media only screen and (max-width: 968px) {
      gap: 2rem 4rem;
    }
    @media only screen and (max-width: 840px) {
      gap: 1rem 3rem;
    }
  }
  .gatsby-image-wrapper {
    img, picture img {
      object-fit: contain !important;
    }
  }
`
// heroImage {
//           fluid(maxWidth: 1000) {
//           ...GatsbyDatoCmsFluid_tracedSVG
//           }
//           title
//         }
const HeroSection = () => {
  let width = useCurrentWidth()
  const {datoCmsHero, allDatoCmsBrandImage} = useStaticQuery(graphql`
    query HeroQuery {
      datoCmsHero {
        heroImage {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
          title
        }
        titleDark
        titleColour
        phoneNumber
        paragraph
        contactButtonText
        buttonColourText
        buttonLightText
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
          <button className="border">{datoCmsHero.contactButtonText}</button>
        </div>
        <div className="contact">
          <div className="contactWrapper">
            <p>Problem z piecem?</p>
            <a className="underline" href={`tel:+48${datoCmsHero.phoneNumber.replace(/ /g, '')}`}>
              <img src={PhoneIcon} alt="ikona telefonu" />
              <span>{datoCmsHero.phoneNumber}</span>
            </a>
          </div>
          {console.log(datoCmsHero)}
          <GatsbyImage fluid={width >= 1024 ? datoCmsHero.heroImage[0].fluid : datoCmsHero.heroImage[1].fluid} />
          <div className="buttons-wrapper">
            <button type="button" className="white">
              {datoCmsHero.buttonLightText}
            </button>
            <button type="button">
              {datoCmsHero.buttonColourText}
            </button>
          </div>
        </div>
      </HeroSectionStyles>
      <OurBrandsStyles>
        <p>Nasze marki</p>
        <div>
          {allDatoCmsBrandImage.nodes.reverse().map((node) => (
            <GatsbyImage key={node.image.title} fluid={node.image.fluid} alt={node.image.alt} />
          ))}
        </div>
      </OurBrandsStyles>
    </HeroWrapper>
  )
}

export default HeroSection
