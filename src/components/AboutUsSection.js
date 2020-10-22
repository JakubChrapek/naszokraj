import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
`

const SectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16rem 12rem 0 22rem;
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
  p {
    font-size: 4.8rem;
    line-height: 6rem;
    font-weight: 400;
    margin-top: 8.2rem;
    max-width: 1600px;
  }

`


const AboutUsSection = () => {
  return (
    <Wrapper>
      <SectionStyles id="#about">
        <div className="titleWrapper">
          <span></span>
          <h2 className="line">O nas</h2>
        </div>
        <p>O piecach wiemy wszystko - od kotłów, poprzez paliwo, po instalacje hydrauliczne i grzewcze. Jesteśmy pierwszą pomocą w przypadku awarii. Pomagamy dobrać idealny sprzęt.</p>
      </SectionStyles>
    </Wrapper>
  )
}

export default AboutUsSection
