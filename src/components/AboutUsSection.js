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
    font-weight: 600;
    letter-spacing: 0.96px;
  }
  p {
    font-size: 4.8rem;
    line-height: 6rem;
    font-weight: 600;
    margin-top: 8.2rem;
    max-width: 1600px;
    margin-right: 6rem;
  }

`


const AboutUsSection = () => {
  return (
    <Wrapper id="#onas">
      <SectionStyles>
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
