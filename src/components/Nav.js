import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { useState } from 'react'
import useCurrentWidth from '../hooks/useCurrentWidth'
import { AnimatePresence, motion } from 'framer-motion'
import ScrollToTop from "react-scroll-to-top";

const variants = {
  list: {
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      scaleY: 0,
      transition: {
        when: "afterChildren",
      },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transition: {
        when: "afterChildren",
        delay: 0.2
      }
    }
  },
  item: {
    visible: {
      opacity: 1,
      x: 0
    },
    hidden: {
      opacity: 0,
      x: -20,
    },
    exit: {
      opacity: 0,
      x: -20,
    }
} }

const NavStyles = styled(motion.nav)`
  padding: 0 6rem 0 12rem;
  position: relative;
  &.open {
    position: sticky;
    top: 0;
  }
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
  background-color: var(--white);
  @media only screen and (max-width: 767px) {
    align-items: center;
    background-color: white;
  } 
  z-index: 3;
  max-width: 1920px;

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
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
      visibility: visible;
      position: fixed;
      left: 0;
      top: 10rem;
      right: 0;
      bottom: 0;
      background-color: white;
      z-index: 10;
      padding: 4rem 2rem 6rem 4rem;
      margin: 0;
      width: 100%;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      transform-origin: left top;
      li {
        margin-right: 0;
        margin-bottom: 2rem;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
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
    @media only screen and (max-width: 1366px) {
      padding: 0.8rem;
      font-size: 1.4rem;
      line-height: 2.3rem;
    } 
    @media only screen and (max-width: 1109px) {
      padding: 0.8rem;
      font-size: 1.4rem;
      line-height: 2.3rem;
    } 
    @media only screen and (max-width: 875px) {
      padding: 0.8rem 0.6rem;
      font-size: 1.4rem;
      line-height: 2rem;
    } 
    @media only screen and (max-width: 767px) {
      padding: 0.8rem 0.6rem;
      font-size: 1.6rem;
      line-height: 2rem;
    } 
    font-weight: 600;
    transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .title {
    font-size: 2.4rem;
  }
`

const MenuButton = styled.button`
  display: none;
  border: none;
  padding: 0.4rem;
  width: 26px;
  height: 20px;
  background-color: transparent;
  position: relative;
  z-index: 6 !important;
  grid-column: 2 / -1;
  justify-self: flex-end;
  span {
    position: absolute;
    top: 0;
    right: 0;
    width: 23px;
    border: 1px solid black;
    border-radius: 2px;
    background-color: var(--blackText);
    &:nth-child(2) {
      top: 6px;
      width: 16px;
    }
    &:last-child {
      top: 12px;
    }
  }
  @media only screen and (max-width: 767px) {
    visibility: visible;
    display: block;
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
        fixed(width: 250) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      smaller: logo {
        fixed(width: 160) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
      smallest: logo {
        fixed(width: 140) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
    }
  }
  `)
  const [open, setOpen] = useState(false);
  let width = useCurrentWidth();

  return (
    <>
      <NavStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={open ? "open" : ""}
      >
        <h1>
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
        <AnimatePresence>
          {(width > 767 || open) && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants.list}
              
              className={open ? "open" : ""}
            >
              {width <= 767 ? data.datoCmsHero.navLinks.map(navLink => (
                <motion.li variants={variants.item} onClick={() => setOpen(false)} key={navLink.title}>
                  <a 
                    href={navLink.title === 'Strona główna' ? '/#' : navLink.link}
                  >
                    {navLink.title}
                  </a>
                </motion.li>
              ))
              :
              data.datoCmsHero.navLinks.slice(0,3).map(navLink => (
                <motion.li onClick={() => setOpen(false)} key={navLink.title}>
                  <a 
                    href={navLink.title === 'Strona główna' ? '/#' : navLink.link}
                  >
                    {navLink.title}
                  </a>
                </motion.li>
              ))
              }
            </motion.ul>
          )}
        </AnimatePresence>
        <MenuButton
          title="menu button for toggling mobile menu"
          aria-label="menu button for toggling mobile menu"
          className={open ? "open" : ""}
          onClick={() => setOpen(!open)}
        >
          <motion.span
            initial={{opacity: 1}}
            animate={open ? {scale: 0.8, rotate: -45, y: 6} : {scale: 1, rotate: 0, y: 0}}
            transition={open ? {delay: 0.2, duration: 0.2} : {delay: 0, duration: .2}}  
          ></motion.span>
          <motion.span
            initial={{opacity: 1}}
            animate={open ? {x: 20, opacity: 0} : {x: 0, opacity: 1}}
            transition={open ? {duration: 0.2} : {delay: 0.2, duration: .2}}
          ></motion.span>
          <motion.span
            initial={{opacity: 1}}
            animate={open ? {scale: 0.8, rotate: 45, y: -6} : {scale: 1, rotate: 0, y: 0}}
            transition={open ? {delay: 0.2, duration: 0.2} : {delay: 0, duration: .2}}
          ></motion.span>
        </MenuButton>
      </NavStyles>
      <AnimatePresence>
        <ScrollToTop 
          initial={{opacity: 0}} 
          animate={{opacity: 1}} 
          exit={{opacity: 0}}
          className="scroll" 
          top={600} 
          smooth 
        />
      </AnimatePresence>
    </>
  )
}

export default Nav
