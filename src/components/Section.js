import React from 'react'
import styled from 'styled-components'

const SectionStyles = styled.section`
  max-width: ${({maxWidth}) => maxWidth};
  margin: ${({margin}) => margin};
  height: ${({height}) => height};
  background-color: ${({bg}) => bg};
`

const Section = ({maxWidth, margin, height, bg, children}) => {
  return (
    <SectionStyles 
      maxWidth={maxWidth} 
      margin={margin}
      height={height}
      bg={bg}
    >
      {children}
    </SectionStyles>
  )
}

export default Section
