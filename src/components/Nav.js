import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const NavStyles = styled.nav`
  padding: 2rem 6rem 2rem 8rem;
  position: relative;
  margin: 0 auto;
  display: grid;
  align-content: center;
  height: 80px;
  grid-template-columns: auto 1fr 1fr;
  z-index: 1;
  max-width: 1920px;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  li {
    list-style-type: none;
    margin-right: 3rem;

    &:last-child {
      margin-right: 0;
    }
  }
  a {
    padding: 1rem;
    font-size: 1.6rem;
  }

  .title {
    font-size: 2.4rem;
  }
  .buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 4rem;
  }

  button {
    margin-right: 4rem;
    &:last-child {
      margin-right: 0;
    }
  }
`

const Nav = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHero {
      buttonColourText
      buttonLightText
      navLinks {
        link
        title
      }
      logo {
        fixed(width: 80) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
    }
  }


  `)

  return (
    <NavStyles>
      <h1>
        <Link to="/" className="title">
          <Img fixed={data.datoCmsHero.logo.fixed} />
        </Link>
      </h1>
      <ul>
        {data.datoCmsHero.navLinks.map(navLink => (
          <li>
            <Link className="underline" to={navLink.link}>
              {navLink.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="buttons-wrapper">
        <button type="button" className="white">
          {data.datoCmsHero.buttonColourText}
        </button>
        <button type="button">
          {data.datoCmsHero.buttonLightText}
        </button>
      </div>
    </NavStyles>
  )
}

export default Nav
