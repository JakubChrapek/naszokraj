import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`

const SectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20rem 16rem 0 25rem;
  @media only screen and (max-width: 1842px) {
    margin: 20rem 10rem 0 15rem;
  }
  @media only screen and (max-width: 1560px) {
    margin: 16rem 8rem 0 14rem;
  }
  @media only screen and (max-width: 1287px) {
    margin: 14rem 6rem 0 10rem;
  }
  @media only screen and (max-width: 1109px) {
    margin: 14rem 6rem 0 4rem;
  }
  @media only screen and (max-width: 767px) {
    margin: 6rem 3rem;
  }

  max-width: 1920px;
  
  .titleWrapper {
    display: flex;
    align-items: center;
  }

  span {
    width: 3.9rem;
    height: 0.3rem;
    background-color: var(--accent);
    margin-right: 1.8rem;
    @media only screen and (max-width: 1366px) {
      width: 2.7rem;
      height: 0.3rem;
      margin-right: 1.3rem;
    }
    @media only screen and (max-width: 767px) {
      margin-right: 1.4rem;
    }
  }
  h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: 0.96px;
    @media only screen and (max-width: 1366px) {
      font-size: 1.4rem;
      line-height: 1.8rem;
      letter-spacing: 0.84px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
  p {
    font-size: 4.8rem;
    line-height: 6rem;
    font-weight: 600;
    margin-top: 8.2rem;
    max-width: 1600px;
    margin-right: 6rem;
    @media only screen and (max-width: 1410px) {
      font-size: 3.6rem;
      line-height: 4.5rem;
      margin-top: 6rem;
    }
    @media only screen and (max-width: 1204px) {
      font-size: 3rem;
      line-height: 1.3em;
      margin-top: 4rem;
    }
    @media only screen and (max-width: 767px) {
      font-size: 2rem;
      font-size: clamp(2rem, 1.7852rem + 0.6711vw, 2.3rem);
      margin-top: 5rem;
      padding-left: 1rem;
      margin-right: 0rem;
    }
  }

`


const AboutUsSection = () => {
  return (
    <Wrapper>
      <SectionStyles>
        <div className="titleWrapper">
          <span></span>
          <h2 className="line" id="onas">O nas</h2>
        </div>
        <p>O kotłach wiemy wszystko - od podajników, poprzez paliwo, po instalacje hydrauliczne i grzewcze. Jesteśmy pierwszą pomocą w przypadku awarii. Pomagamy dobrać idealny sprzęt.</p>
      </SectionStyles>
    </Wrapper>
  )
}

export default AboutUsSection
