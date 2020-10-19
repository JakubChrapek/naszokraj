import React from 'react'
import styled from 'styled-components'

const SectionStyles = styled.section`
  max-width: ${({maxWidth}) => maxWidth};
  margin: ${({margin}) => margin};
  height: ${({height}) => height};
  background-image: url(${({bg}) => bg});
  background-color: ${({bgColor}) => bgColor};
  background-repeat: no-repeat;
  background-size: 150vw;
  background-position: 60% 70%;
`

const Section = ({maxWidth, margin, height, bg, bgColor, children}) => {
  return (
    <SectionStyles 
      maxWidth={maxWidth} 
      margin={margin}
      height={height}
      bg={bg}
      bgColor={bgColor}
    >
      {children}
    </SectionStyles>
  )
}

export default Section
