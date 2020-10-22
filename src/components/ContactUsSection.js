import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {BsEnvelopeFill} from 'react-icons/bs'
import {FaPhone} from 'react-icons/fa'
import GatsbyImage from 'gatsby-image'
import {graphql, Link, useStaticQuery} from 'gatsby'
import { AnimatePresence, motion } from 'framer-motion'
import axios from "axios"
import * as qs from "query-string"

const Wrapper = styled.section`
  margin: 0 auto;
  position: relative;
`

const SectionStyles = styled.div`
  margin: 10rem auto;
  max-width: 1140px;
  
  .line {
    height: 3px;
    width: 39px;
    background-color: var(--accent);
    margin: 2rem 0;
  }

  .message {
    margin-top: 3rem;
    text-align: center;
    font-size: 1.4rem;
    line-height: 2rem;
    color: var(--grey);
  }

  .textCenter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2rem;
      font-weight: 300;
      line-height: 3rem;
      letter-spacing: 0.2;
      color: var(--lightGrey);
    }
  }

  h3 {
    font-size: 3.6rem;
    line-height: 4.5rem;
    font-weight: bold;
    color: var(--black);
  }

  .grid {
    margin: 6rem 5rem 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }

  .contactDetails {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 8rem;

    a {
      display: flex;
      align-items: center;
      margin-bottom: 0.6rem;
      padding: 0.4rem 0.8rem 0.4rem 0;
      font-size: 2rem;
      font-weight: 300;
      line-height: 2.6rem;
      color: var(--blackText);
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 4rem;
        bottom: 0;
        width: calc(100% - 4.8rem);
        height: 2px;
        background-color: var(--accent);
        transform: scaleX(0);
        transform-origin: left center;
        transition: transform .2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      :hover svg {
        transform: scale(1.1);
      }

      :hover::after, :focus::after {
        transform: scaleX(1);
        outline: none;
      }
      :focus {
        outline: none;
      }

      svg {
        margin-right: 1.1rem;
        transition: transform .2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }

  p {
    color: var(--blackText);
  }

  .address {
    font-size: 2rem;
    font-weight: 300;
    line-height: 2.6rem;
    margin: 2.4rem 0 0.6rem;
  }

  .name {
    margin: 2rem 0 1rem;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 400;
  }

  .title {
    font-size: 2.8rem;
    font-weight: 500;
    line-height: 2.8rem;
    color: var(--black);
    margin-bottom: 0.4rem;
  }

  .formWrapper {
    form {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      button {
        margin-top: 3rem;
        align-self:center;
      }
    }

    #syrup {
      display: none;
    }

    .checkboxWrapper {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      label {
        font-size: 1.4rem;
        line-height: 2rem;
        color: var(--lightGrey);
      }
      #accept {
        outline: none;
      }
      &:hover {
        #accept {
          border: 1px solid var(--blackText);
          &:focus {
            border: 1px solid var(--blackText);
          }
        }
      }
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      font-size: 2rem;
      line-height: 2rem;
      font-weight: 400;
      color: var(--blackText);
      input {
        font-weight: 300;
      }
      &[for="message"] {
        position: relative;
      }
      &[for="accept"] {
        display: inline;
        position: relative;
        margin-left: 0.8rem;

        input {
          display: inline;
        }

        a {
          padding: 0.6rem 0;
        }
      }

      input, textarea {
        margin: 2.3rem 0 2.6rem;
        padding: 1.9rem 2.8rem;
        border: 3px solid var(--lightGrey);
        border-radius: 1rem;
        transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: var(--accent);
        &:hover, &:focus {
          border: 3px solid var(--accent);
          border-radius: 1rem;
          outline: none;
        }
      }

    }
    #accept {    
      height: 13px;
      width: 13px;
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      border: 1px solid var(--black);
      border-radius: 2px;
      background-color: var(--white);
      cursor: pointer;
      transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover, &:focus {
        border: 1px solid var(--blackText);
      }

      + label:before {
        opacity: 0;
        content: '✓';
        display: block;
        text-align: center;
        color: white;
        position: absolute;
        left: -1.95rem;
        top: 0.025rem;
        transition: opacity .2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }

      &:checked {
        background-color: var(--black);
        + label:before {
          opacity: 1;
        }
      }
    }
  }
`

const CounterStyles = styled.span`
  position: absolute;
  bottom: 3.8rem;
  right: 1.4rem;
  font-size: 1.4rem;
  line-height: 1.4rem;
  font-weight: 400;
  color: var(--lightGrey);
`
const ContactDetails = ({name, mail, tel}) =>
(
  <>
    <p className="name">{name}</p>
    <a href={`mailto:${mail}`}><BsEnvelopeFill size="24px" color="#F05D05"/>{mail}</a>
    <a href={`tel:${tel.replace(/ /g, '')}`}><FaPhone size="24px" color="#F05D05"/>{tel}</a>
  </>
)

const Counter = ({currentTextLength, maxLength}) => (
  <CounterStyles>{currentTextLength} / {maxLength}</CounterStyles>
)

const ContactUsSection = () => {
  const [counter, setCounter] = useState('0');
  const [refs, setRefs] = useState([]);
  const [message, setMessage] = useState('');
  const formRef = useRef();
  const botFieldRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    setRefs([botFieldRef, nameRef, emailRef, messageRef]);
  }, [])

  const handleChange = (e) => {
    setCounter(e.target.textLength);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {}
    refs.map((key, i) => (formData[key.current.name] = refs[i].current.value))
    console.log(formData);
    const axiosOptions = {
      url: "/",
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data: qs.stringify(formData),
    }
    await axios(axiosOptions)
    .then(response => {
      setMessage("Dziękujemy za kontakt! Wkrótce odpowiemy.")
      formRef.current.reset()
    })
    .catch(err => {
      setMessage("Coś poszło nie tak. Spróbuj jeszcze raz.")
    })
    // setTimeout(() =>
    // {
    //   setMessage("");
    // }, 5000);
  }

  return (
    <Wrapper>
      <SectionStyles>
        <div className="textCenter">
          <h3>Skontaktuj się z nami</h3>
          <span className="line"></span>
          <p>Wypełnij krótki formularz, wyślij e-mail lub zadzwoń do nas!</p>
        </div>
        <div className="grid">
          <div className="contactDetails">
            <p className="title">Nasze biuro</p>
            <span className="line"></span>
            <p className="address">Krakowska 15, Kraków<br/>15-000</p>
            <ContactDetails 
              name="Radek"
              mail="serwis@naszokraj.eu"
              tel="+48 509 411 729"
            />
            <ContactDetails 
              name="Lidka"
              mail="prezes@naszokraj.eu"
              tel="+48 508 563 321"
            />
          </div>
          <div className="formWrapper">
            <form ref={formRef} onSubmit={(e) => handleSubmit(e)} name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
              <p className="hidden">
                <label id="syrup" htmlFor="bot-field">Nie wypełniaj, jeśli jesteś człowiekiem<input ref={botFieldRef} name="bot-field" /></label>
              </p>
              <p>
                <label htmlFor="name">Imię i nazwisko<input type="text" id="name" ref={nameRef} name="name" placeholder="Jan Kowalski"/></label>   
              </p>
              <p>
                <label htmlFor="email">Adres email<input type="email" id="email" ref={emailRef} name="email" placeholder="nazwa@email.com"/></label>
              </p>
              <p>
                <label htmlFor="message">Wiadomość
                  <textarea onChange={(e) => handleChange(e)} maxLength="500" ref={messageRef} name="message" rows="6" id="message" placeholder="Dzień dobry, piszę do Was, ponieważ..."/>
                  <Counter currentTextLength={counter} maxLength="500"/>
                </label>
              </p>
              <p className="checkboxWrapper">
                <input id="accept" name="accept" type="checkbox" required />
                <label htmlFor="accept">Przeczytałem/łam i zgadzam się z&nbsp;<Link className="underline" to="/polityka">polityką prywatności</Link></label>
              </p>
              <button type="submit">Wyślij</button>
              <AnimatePresence>
                {message && 
                  <motion.p 
                    className="message"
                    initial={{opacity: 0, y: 10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0}}
                  >
                    {message}
                  </motion.p>
                }
              </AnimatePresence>
            </form>
          </div>
        </div>
      </SectionStyles>
    </Wrapper>
  )
}

export default ContactUsSection
