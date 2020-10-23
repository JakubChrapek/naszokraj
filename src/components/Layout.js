import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import Nav from './Nav'
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import useSticky from '../hooks/useSticky'
if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  // eslint-disable-next-line global-require
  require('smooth-scroll')('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutCubic',
    clip: true,
    updateURL: true,
    offset: 70
  });
}

const ContentStyles = styled.div`
  background: #fff;
  
`;

const Layout = ({children}) => {

  return (
    <>
      <GlobalStyles />
      <Typography />
      <ContentStyles>
        <Nav/>
          {children}
        <Footer />
      </ContentStyles>
    </>
  )
}

export default Layout
