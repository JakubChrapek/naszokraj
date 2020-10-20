import React from 'react'
import styled from 'styled-components'

const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  margin: 16rem 12rem 0 22rem;
  
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
  }

`


const AboutUsSection = () => {
  return (
    <SectionStyles id="#about">
      <div className="titleWrapper">
        <span></span>
        <h2 className="line">O nas</h2>
      </div>
      <p>O piecach wiemy wszystko - od kotłów, poprzez paliwo, po instalacje hydrauliczne i grzewcze. Jesteśmy pierwszą pomocą w przypadku awarii. Pomagamy dobrać idealny sprzęt.</p>
    </SectionStyles>
  )
}

export default AboutUsSection
