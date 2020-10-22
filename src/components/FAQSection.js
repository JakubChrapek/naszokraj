import React from 'react'
import styled from 'styled-components'
import GatsbyImage from 'gatsby-image'
import {FaQuestion} from 'react-icons/fa'
import {graphql, useStaticQuery} from 'gatsby'
import Accordions from "./Accordions"
import Blob from "../assets/images/blob.svg"

const Wrapper = styled.section`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`

const SectionStyles = styled.div`
    margin: 0 12rem 0 22rem;
    padding: 10rem 0;
    max-width: 1920px;
    display: grid;
    grid-template-columns: minmax(320px, 5fr) 4fr;

    .text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .title {
      font-size: 3.6rem;
      line-height: 4.5rem;
      font-weight: bold;
      color: var(--black);
      margin-bottom: 2.4rem;
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
      }
      svg {
        z-index: 1;
      }
    }
`

const FAQSection = () => {
  return (
    <Wrapper>
      <SectionStyles>
        <div className="text">
          <p className="title">Najczęściej zadawane pytania</p>
          <span></span>
          <Accordions />
        </div>
        <div className="questionMark">
          <img src={Blob} />
          <FaQuestion size="260px" color="#F05D05" />
        </div>
      </SectionStyles>
    </Wrapper>
  )
}

export default FAQSection
