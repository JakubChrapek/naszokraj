import React from 'react'
import styled from 'styled-components'
import 'normalize.css'
import Nav from './Nav'
import Footer from './Footer'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import useSticky from '../hooks/useSticky'

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
