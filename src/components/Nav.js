import React, { useRef } from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled, { keyframes } from 'styled-components'
import { useState } from 'react'
import { FaWindows } from 'react-icons/fa'
import { useEffect } from 'react'
import useSticky from '../hooks/useSticky'
import useCurrentWidth from '../hooks/useCurrentWidth'

// const moveDown = keyframes`
//   from {
//     transform: translateY(-170px);
//   }
//   to {
//     transform: translateY(0);
//   }
// `;

const NavStyles = styled.nav`
  padding: 0 6rem 0 12rem;
  @media only screen and (max-width: 1602px) {
    padding: 0 6rem 0 6rem;
  } 
  @media only screen and (max-width: 1109px) {
    padding: 0 4rem 0 2rem;
  } 
  margin: 0 auto;
  display: grid;
  align-content: center;
  height: 170px;

  @media only screen and (max-width: 1560px) {
    height: 120px;
  }
  @media only screen and (max-width: 1109px) {
    height: 100px;
  } 
  transform: scaleY(1);
  grid-template-columns: auto auto 43%;
  @media only screen and (max-width: 1602px) {
    grid-template-columns: 180px auto 43%;
  } 
  @media only screen and (max-width: 1109px) {
    grid-template-columns: 160px auto 40%;
  } 
  z-index: 3;
  max-width: 1920px;
  background-color: var(--white);
  /* transition: height .35s cubic-bezier(0.645, 0.045, 0.355, 1);
  &.scrolled {
    padding: 0 2rem 0 12rem;
    height: 80px;
    position: sticky;
    top: 0;
    box-shadow: 0 2px 5px -2px rgba(255, 102, 0, 0.15);
    animation: moveDown 0.5s ease-in-out;
  } */

  ul {
    padding: 0;
    margin: 0 6.8rem 0 0;
    @media only screen and (max-width: 1602px) {
      margin: 0 2rem 0 0;
    } 
    @media only screen and (max-width: 1109px) {
      margin: 0 0 0 2rem;
    } 
    @media only screen and (max-width: 875px) {
      margin: 0 0 0 1rem;
    } 
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  li {
    list-style-type: none;
    margin-right: 2.5rem;
    @media only screen and (max-width: 1602px) {
      margin-right: 1.5rem;
    } 
    @media only screen and (max-width: 875px) {
      margin-right: 0.6rem;
    } 

    &:last-child {
      margin-right: 1.5rem;
      @media only screen and (max-width: 1602px) {
        margin-right: 1rem;
      } 
      @media only screen and (max-width: 875px) {
        margin-right: 0;
      } 
    }
    &.active, &:hover a {
      color: var(--orange);
    }
  }
  a {
    padding: 1rem;
    font-size: 1.8rem;
    line-height: 2.6rem;
    @media only screen and (max-width: 1109px) {
      padding: 0.8rem;
      font-size: 1.6rem;
      line-height: 2.3rem;
    } 
    @media only screen and (max-width: 875px) {
      padding: 0.8rem 0.6rem;
      font-size: 1.4rem;
      line-height: 2rem;
    } 
    font-weight: 600;
    transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .title {
    font-size: 2.4rem;
  }

`

const Nav = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    datoCmsHero {
      navLinks {
        link
        title
      }
      logo {
        fixed(width: 270) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      smaller: logo {
        fixed(width: 180) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      smallest: logo {
        fixed(width: 160) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
    }
  }
  `)

  let width = useCurrentWidth()
  
  const {isSticky, element} = useSticky();


  return (
    <NavStyles className={isSticky && "scrolled"}>
      <h1 ref={element}>
        <Link to="/" className="title">
          <Img fixed={width >= 1400 
            ? data.datoCmsHero.logo.fixed 
            : width >= 1110 
            ? data.datoCmsHero.smaller.fixed 
            : width <= 767
            ? data.datoCmsHero.smaller.fixed
            : data.datoCmsHero.smallest.fixed} 
          />
        </Link>
      </h1>
      <ul>
        {data.datoCmsHero.navLinks.map(navLink => (
          <li key={navLink.title}>
            <a 
              href={navLink.title === 'Strona główna' ? '/#' : navLink.link}
            >
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
    </NavStyles>
  )
}

export default Nav
