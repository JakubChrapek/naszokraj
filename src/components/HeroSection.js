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

  @media only screen and (max-width: 767px) {
    height: unset;
    max-height: unset;
    grid-template-columns: 1fr;
  } 

  .cta {
    display: flex;
    flex-direction: column;
    justify-self: stretch;
    justify-content: center;
    align-items: flex-start;
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
    @media only screen and (max-width: 767px) {
      padding: 6rem 3rem;
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
      @media only screen and (max-width: 1366px) {
        font-size: 2rem;
      }
      @media only screen and (max-width: 1109px) {
        font-size: 2rem;
        margin-top: 1.4rem;
      } 
      @media only screen and (max-width: 767px) {
        font-size: 1.5rem;
        line-height: 1.3em;
        margin-top: 2rem;
      } 
    }

    a {
      margin-top: 8rem;
      @media only screen and (max-width: 1109px) {
        margin-top: 6rem;
      } 
      @media only screen and (max-width: 767px) {
        margin-top: 3.5rem;
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
    @media only screen and (max-width: 1366px) {
      font-size: 4.8rem;
    }
    @media only screen and (max-width: 1109px) {
      font-size: 4.8rem;
    } 
    @media only screen and (max-width: 910px) {
      font-size: 4rem;
    } 
    @media only screen and (max-width: 767px) {
      font-size: 2.4rem;
      font-size: clamp(2.6rem, 2.17rem, 3.2rem);
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
    @media only screen and (max-width: 767px) {
      padding: 0;
      background-color: unset;
    }  
    p {
      margin: 0 0 0.6rem;
      color: var(--accent);
      font-size: 1.6rem;
      font-weight: 700;
      @media only screen and (max-width: 1560px) {
        font-size: 1.5rem;
      } 
      @media only screen and (max-width: 1366px) {
        font-size: 1.4rem;
      } 
      @media only screen and (max-width: 767px) {
        font-size: 1.5rem;
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
      line-height: 1em;
      @media only screen and (max-width: 1560px) {
        font-size: 3rem;
      } 
      @media only screen and (max-width: 1366px) {
        font-size: 2.4rem;
      } 
      @media only screen and (max-width: 767px) {
        font-size: 3.2rem;
        grid-gap: 1.2rem;
        align-items: center;
        span {
          margin-top: -0.8rem;
        }
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
      @media only screen and (max-width: 1366px) {
        height: 34px;
      } 
      @media only screen and (max-width: 767px) {
        height: 48px;
        margin-bottom: -0.2rem;
      } 
      fill: var(--accent);
      transition: transform .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }

  .contact {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    @media only screen and (max-width: 767px) {
      align-items: center;
      justify-content: center;
      padding: 0 2rem;
    } 
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
    a {
      margin-right: 3rem; 
      @media only screen and (max-width: 890px) {
        margin-right: 1rem; 
      }
      
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        button {
          background-color: white;
          &:hover {
            background-color: var(--orange);
          }
        }
      }
    }

  }

`

const HeroWrapper = styled.section`
  background-image: url(${({bg}) => bg});
  background-color: ${({bgColor}) => bgColor};
  background-repeat: no-repeat;
  background-size: 1800px;
  background-position: -600px -975px;
  overflow: hidden;

  @media only screen and (max-width: 1390px) {
    background-position: -600px -940px;
  }
  @media only screen and (max-width: 767px) {
    background-size: 1200px;
    background-position: -300px -730px;
  }
  @media only screen and (max-width: 422px) {
    background-position: -300px -720px;
  }
  @media only screen and (max-width: 354px) {
    background-position: -300px -700px;
  }
  @media only screen and (max-width: 310px) {
    background-position: -300px -680px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

`

const OurBrandsStyles = styled.div`
  margin-top: -6rem;
  @media only screen and (max-width: 1366px) {
    margin-top: -4rem;
  }
  @media only screen and (max-width: 767px) {
    margin-top: 10rem;
  }
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    align-self: flex-start;
    font-size: 2.6rem;
    line-height: 1em;
    font-weight: 700;
    color: var(--lightGrey);
    margin-left: 27rem;
    @media only screen and (max-width: 1842px) {
      margin-left: 15rem;
    }
    @media only screen and (max-width: 1560px) {
      margin-left: 14rem;
    }
    @media only screen and (max-width: 1366px) {
      font-size: 1.7rem;
      line-height: 2.4rem;
      margin-left: 25rem;
    }
    @media only screen and (max-width: 1109px) {
      margin-left: 19rem;
    }
    @media only screen and (max-width: 767px) {
      margin-left: 9rem;
      font-size: 1.5rem;
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
    @media only screen and (max-width: 767px) {
      max-width: calc(100% - 6rem);
      gap: 2rem 1rem;
      margin-top: 3rem;
      grid-template-columns: repeat(auto-fill, minmax(90px,1fr));
      grid-template-rows: unset;
    }
    @media only screen and (max-width: 350px) {
      grid-template-columns: repeat(auto-fill, minmax(80px,1fr));
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
          <a href="/#kontakt"><button className="border">{datoCmsHero.contactButtonText}</button></a>
        </div>
        <div className="contact">
          <div className="contactWrapper">
            <p>Problem z piecem?</p>
            <a className="underline" href={`tel:+48${datoCmsHero.phoneNumber.replace(/ /g, '')}`}>
              <img src={PhoneIcon} alt="ikona telefonu" />
              <span>{datoCmsHero.phoneNumber}</span>
            </a>
            <a className="underline" href={`tel:+48508563321`}>
              <img src={PhoneIcon} alt="ikona telefonu" />
              <span>508 563 321</span>
            </a>
          </div>
          {width > 767 && 
          <>
            <GatsbyImage fluid={width >= 1024 ? datoCmsHero.heroImage[0].fluid : datoCmsHero.heroImage[1].fluid} />
            <div className="buttons-wrapper">
              <a href="/#bazaklienta">
                <button type="button" className="white">
                  {datoCmsHero.buttonLightText}
                </button>
              </a>
              <a href="/#kontakt">
                <button type="button">
                  {datoCmsHero.buttonColourText}
                </button>
              </a>
            </div>
          </>
          }
          
        </div>
      </HeroSectionStyles>
      <OurBrandsStyles>
        <p>Nasze marki</p>
        <div>
          {
            width <= 767 ? 
            
            allDatoCmsBrandImage.nodes.reverse().slice(1).map((node) => (
              <GatsbyImage key={node.image.title} fluid={node.image.fluid} alt={node.image.alt} />
            ))
          :
            allDatoCmsBrandImage.nodes.reverse().map((node) => (
              <GatsbyImage key={node.image.title} fluid={node.image.fluid} alt={node.image.alt} />
            ))
          }
        </div>
      </OurBrandsStyles>
    </HeroWrapper>
  )
}

export default HeroSection
