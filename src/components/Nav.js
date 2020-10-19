import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import styled from 'styled-components'

const NavStyles = styled.nav`
  padding: 2rem 6rem 2rem 8rem;
  margin: 0;
  display: grid;
  grid-template-columns: auto 3fr 4fr;

  ul {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 6rem;
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
  }
  .buttons-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  button {
    margin-right: 4rem;
    &:first-child {
      background-color: var(--white);
      color: var(--accent);
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

const Nav = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHeroSection {
      buttonColourText
      buttonLightText
      navLinks {
        link
        title
      }
      logo {
        fixed {
          src
        }
      }
    }
  }


  `)

  return (
    <NavStyles>
      {console.log(data)}
      <h1>Nasz Okraj Sp. z o.o.</h1>
      <ul>
        <li>
        <Link to="#stronaglowna">
          Strona Główna
        </Link>
        </li>
        <li>
        <Link to="#onas">
          O Nas
        </Link>
        </li>
        <li>
        <Link to="#uslugi">
          Usługi
        </Link>
        </li>
      </ul>
      <div className="buttons-wrapper">
        <button type="button">
          {data.datoCmsHeroSection.buttonColourText}
        </button>
        <button type="button">
          {data.datoCmsHeroSection.buttonLightText}
        </button>
      </div>
    </NavStyles>
  )
}

export default Nav
