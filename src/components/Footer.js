import React from 'react'
import {Link, graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  background-color: var(--lightestGrey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    padding: 6rem 4rem 5rem;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 767px) {
      padding: 6rem 3rem 4rem;
      align-items: flex-start;
    }
  }

  ul, li {
    list-style-type: none;
  }

  ul {
    padding: 0;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    @media only screen and (max-width: 767px) {
      flex-direction: column;
      margin: 4rem 0 1rem -0.6rem;
    }
  }

  li {
    padding: 1rem 0;
    margin-right: 2.6rem;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 2.2rem;
    @media only screen and (max-width: 767px) {
      padding: 0;
      margin: 0 0 2rem;
    }
    a {
      color: var(--brown);
      padding: 1.6rem;
      @media only screen and (max-width: 767px) {
        padding: 0.8rem 0.6rem;
        font-size: 1.6rem;
        line-height: 2rem;
      }
    }
    .underline:after {
      background-color: var(--brown);
    }
    &:last-child {
      margin-right: 0;
    }
  }

  --color: #686EEB;
  p {
    margin-top: 2rem;
    font-weight: 600;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--lightGrey);
    transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    @media only screen and (max-width: 767px) {
      margin-top: 1rem;
      font-size: 1.2rem;
      line-height: 1.7rem;
    }

    span {
      transition: color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
      .underline::after {
        background-color: var(--color);
      }
      .underline:hover {
        color: var(--color);
        &::after {
          background-color: var(--color);
        }
      }
    }

    span:nth-child(2) {
      --color: #00EF8B;
    }

    span:nth-child(3){
      --color: #51A8DD;
    }

    a {
      color: var(--lightGrey);
      padding: 0.4rem 0;
      
    }
  }
`
const Footer = () => {
  const data = useStaticQuery(graphql`
  query FooterQuery {
    datoCmsHero {
      logo {
        fixed(width: 200) {
          ...GatsbyDatoCmsFixed_tracedSVG
        }
      }
    }
  }
  `);
  return (
    <FooterStyles>
      <div>
        <Link to="/" className="logo">
          <Img fixed={data.datoCmsHero.logo.fixed} />
        </Link>
        <ul>
          <li>
            <Link className="underline short" to="/#top">Strona Główna</Link>
          </li>
          <li>
            <Link className="underline short" to="/#onas">O nas</Link>
          </li>
          <li>
            <Link className="underline short" to="/#uslugi">Usługi</Link>
          </li>
          <li>
            <Link className="underline short" to="/#bazaklienta">Baza Klienta</Link>
          </li>
          <li>
            <Link className="underline short" to="/#kontakt">Kontakt</Link>
          </li>
        </ul>
        <p>Stronę stworzyli: <span><a rel="noopener noreferrer" target="_blank" className="underline" href="https://agathadesign.co.uk/">Agatha Design</a></span> & <span><a rel="noopener noreferrer" target="_blank" className="underline" href="https://kryptonumstudio.com">Kryptonum Studio</a></span> & <span><a rel="noopener noreferrer" target="_blank" className="underline" href="https://dobratresc.com">Dobra Treść</a></span></p>
      </div>
    </FooterStyles>
  )
}

export default Footer