import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import {FaQuestion} from 'react-icons/fa'
import {graphql, useStaticQuery} from 'gatsby'
import Accordions from "./Accordions"
import Blob from "../assets/images/blob.svg"
import useCurrentWidth from '../hooks/useCurrentWidth'

const Wrapper = styled.section`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`

const SectionStyles = styled.div`
    margin: 0 12rem 0 25rem;
    padding: 14rem 0 7rem;
    @media only screen and (max-width: 1842px) {
      margin: 0 6rem 0 15rem;
    }
    @media only screen and (max-width: 1560px) {
      margin: 0 6rem 0 14rem;
    }
    @media only screen and (max-width: 1287px) {
      margin: 0 6rem 0 10rem;
      padding: 10rem 0;
    }
    @media only screen and (max-width: 1109px) {
      margin: 0 6rem 0 4rem;
      padding: 8rem 0;
    }
    max-width: 1920px;
    display: grid;
    grid-template-columns: minmax(320px, 5fr) 4fr;
    @media only screen and (max-width: 1448px) {
      grid-template-columns: minmax(320px, 10fr) 4fr;
    }
    @media only screen and (max-width: 767px) {
      margin: 0 3rem;
      padding: 6rem 0 4rem;
      grid-template-columns: 1fr;
    }

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      font-size: 3.6rem;
      line-height: 4.5rem;
      font-weight: 900;
      color: var(--black);
      margin-bottom: 2.4rem;
      @media only screen and (max-width: 1238px) {
        font-size: 3rem;
        line-height: 3.8rem;
      }
      @media only screen and (max-width: 1014px) {
        font-size: 2.6rem;
        line-height: 3.2rem;
      }
      @media only screen and (max-width: 767px) {
        font-size: 1.8rem;
        line-height: 2.3rem;
        font-size: clamp(2rem, 1.5136rem + 0.8949vw, 2.2rem);
        line-height: clamp(2.6rem, 1.8705rem + 1.3423vw, 2.9rem);    
      }

    span {
      width: 39px;
      height: 3px;
      background-color: var(--accent);
      margin-right: 18px;
      margin-bottom: 2.4rem;
    }

    .questionMark {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      img {
        position: absolute;
        z-index: 0;
        top: 50%;
        transform: translateY(-50%);
        right: -10vw;
        @media only screen and (max-width: 1448px) {
          width: 35%;
        }
      }
      svg {
        z-index: 1;
      }
    }
  }
`

const FAQSection = () => {
  let width = useCurrentWidth();
  return (
    <Wrapper>
      <SectionStyles>
        <div className="text">
          <p className="title">Najczęściej zadawane pytania</p>
          <span></span>
          <Accordions />
        </div>
        { width > 767 && 
          <div className="questionMark">
            <img src={Blob} />
            <FaQuestion size="16vw" color="#F05D05" />
          </div>
        }
      </SectionStyles>
    </Wrapper>
  )
}

export default FAQSection
