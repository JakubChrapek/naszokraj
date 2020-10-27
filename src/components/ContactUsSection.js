import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import {BsEnvelopeFill} from 'react-icons/bs'
import {FaPhone} from 'react-icons/fa'
import {Link} from 'gatsby'
import { AnimatePresence, motion } from 'framer-motion'
import axios from "axios"
import * as qs from "query-string"
import useCurrentWidth from '../hooks/useCurrentWidth'

const Wrapper = styled.section`
  margin: 0 auto;
  padding-top: 7rem;
  position: relative;
  @media only screen and (max-width: 767px) {
    padding-top: 0;
  }
`

const SectionStyles = styled.div`
  margin: 3rem auto 14rem;
  max-width: 1140px;

  @media only screen and (max-width: 1308px) {
    margin: 3rem 6rem 10rem;
  }
  @media only screen and (max-width: 767px) {
    margin: 0 3rem 6rem;
  }
  

  span.line {
    width: 3.9rem;
    height: 0.3rem;
    background-color: var(--accent);
    margin: 2rem 0 1.4rem;
    @media only screen and (max-width: 1366px) {
      width: 2.7rem;
    }
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
    @media only screen and (max-width: 767px) {
      align-items: flex-start;
    }

    p {
      font-size: 2rem;
      font-weight: 300;
      line-height: 3rem;
      letter-spacing: 0.2;
      color: var(--lightGrey);
      @media only screen and (max-width: 1366px) {
        font-size: 1.4rem;
        line-height: 2.1rem;
      }
      @media only screen and (max-width: 1014px) {
        font-size: 1.8rem;
        line-height: 2.7rem;
      }
    }
  }

  h3 {
    font-size: 3.6rem;
    line-height: 4.5rem;
    font-weight: 900;
    color: var(--black);

    @media only screen and (max-width: 1366px) {
      font-size: 2.4rem;
      line-height: 3.1rem;
    }
    @media only screen and (max-width: 1014px) {
      font-size: 2.6rem;
      line-height: 3.2rem;
    }
    @media only screen and (max-width: 767px) {
      font-size: 1.8rem;
      line-height: 2.3rem;
      font-size: clamp(2rem, 1.5136rem + 0.8949vw, 2.2rem);
      line-height: clamp(2.6rem, 1.8705rem + 1.3423vw, 2.9rem);
    }
  }

  .grid {
    margin: 7rem 5rem 0 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.6rem;
    align-items: center;
    @media only screen and (max-width: 1308px) {
      margin: 7rem 0 0;
    }
    @media only screen and (max-width: 914px) {
      grid-template-columns: 3fr 4fr;
      grid-gap: 4rem;
    }
    @media only screen and (max-width: 767px) {
      margin: 3rem 0 4rem;
      grid-template-columns: 1fr;
      grid-gap: 3rem;
    }
  }

  .contactDetails {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 8rem;
    @media only screen and (max-width: 1308px) {
      margin-left: 6rem;
    }
    @media only screen and (max-width: 914px) {
      margin-left: 0rem;
    }
    @media only screen and (max-width: 914px) {
      margin-left: 0rem;
      padding-bottom: 2rem;
    }

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
      @media only screen and (max-width: 1366px) {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
      @media only screen and (max-width: 1014px) {
        margin-bottom: 0.5rem;
        padding: 0.4rem 0.7rem 0.4rem 0;
        font-size: 1.8rem;
        line-height: 2.3rem;
      }
      @media only screen and (max-width: 1014px) {
        font-size: 1.6rem;
        line-height: 2rem;
      }
      @media only screen and (max-width: 767px) {
        margin-bottom: 0.7rem;
      }

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

        @media only screen and (max-width: 1366px) {
          width: 22px;
        }
        @media only screen and (max-width: 1014px) {
          margin-right: 1rem;
          width: 20px;
        }
        @media only screen and (max-width: 767px) {
          margin-right: 1.4rem;
          width: 20px;
        }
      }
    }
  }

  p {
    color: var(--blackText);
  }

  .address {
    font-size: 2rem;
    font-weight: 300;
    line-height: 3rem;
    margin: 2.4rem 0 0.6rem;
    @media only screen and (max-width: 1366px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    @media only screen and (max-width: 1014px) {
      font-size: 1.8rem;
      line-height: 2.7rem;
      margin: 2.2rem 0 0.5rem;
    }
    @media only screen and (max-width: 767px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
      margin: 1.2rem 0 0.5rem;
    }
  }

  .name {
    margin: 2rem 0 1rem;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 600;
    @media only screen and (max-width: 1366px) {
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
    @media only screen and (max-width: 1014px) {
      margin: 1.8rem 0 0.9rem;
      font-size: 1.8rem;
      line-height: 1.8rem;
    }
    @media only screen and (max-width: 767px) {
      margin: 2rem 0 1.5rem;
    }
  }

  .title {
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 2.8rem;
    color: var(--black);
    margin-bottom: 0.4rem;
    @media only screen and (max-width: 1366px) {
      font-size: 1.9rem;
      line-height: 2.4rem;
    }
    @media only screen and (max-width: 767px) {
      font-size: 2rem;
      line-height: 2rem;
    }
  }

  .formWrapper {
    form {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      button {
        margin-top: 3rem;
        align-self:center;
        width: 130px;
        padding: 1.2rem 0.8rem;
        @media only screen and (max-width: 1308px) {
          margin-top: 2.7rem;
        }
        @media only screen and (max-width: 767px) {
          margin-top: 2rem;
        }
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
      @media only screen and (max-width: 767px) {
        align-items: flex-start;
      }
      label {
        font-size: 1.2rem;
        line-height: 2rem;
        @media only screen and (max-width: 1366px) {
          font-size: 0.9rem;
          line-height: 1.7rem;
        }
        color: var(--lightGrey);
      }
      #accept {
        outline: none;
        :focus {
          border: 2px solid var(--blackText);
        }
      }
      &:hover {
        #accept {
          border: 2px solid var(--blackText);
          &:focus {
            border: 2px solid var(--blackText);
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
      @media only screen and (max-width: 1366px) {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }
      @media only screen and (max-width: 767px) {
        font-size: 1.6rem;
        line-height: 1.6rem;
      }
      font-weight: 600;
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
        padding: 1.9rem 3.2rem;
        @media only screen and (max-width: 1366px) {
          font-size: 1.5rem;
          line-height: 2.3rem;
          margin: 2.1rem 0 2.3rem;
          padding: 1.2rem 2.6rem;
        }
        @media only screen and (max-width: 767px) {
          margin: 1.9rem 0 2.1rem;
          padding: 1.5rem 2.3rem;
        }
        border: 3px solid var(--lightGrey);
        border-radius: 1rem;
        transition: border-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
        color: var(--accent);
        &::placeholder {
          color: var(--lightGrey);
        }
        &:hover, &:focus {
          border: 3px solid var(--accent);
          border-radius: 1rem;
          outline: none;
        }
      }
      textarea {
        padding-top: 2.6rem;
        @media only screen and (max-width: 1308px) {
          padding-top: 2.3rem;
        }
      }

    }
    #accept {    
      height: 13px;
      width: 13px;
      @media only screen and (max-width: 1308px) {
        height: 12px;
        width: 12px;
      }
      @media only screen and (max-width: 767px) {
        height: 16px;
        width: 18px;
      }
      -webkit-appearance: none;
      -moz-appearance: none;
      -o-appearance: none;
      appearance: none;
      border: 2px solid var(--black);
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
        top: 0.1rem;
        @media only screen and (max-width: 1308px) {
          left: -1.85rem;
          top: 0;
        }
        @media only screen and (max-width: 767px) {
          left: -2.2rem;
          font-size: 1.6rem;
        }
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
  bottom: 4.6rem;
  right: 1.8rem;
  font-size: 1.6rem;
  line-height: 1.6rem;
  @media only screen and (max-width: 1308px) {
    bottom: 4.1rem;
    right: 1.6rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }
  @media only screen and (max-width: 767px) {
    bottom: 3.1rem;
    right: 1.2rem;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
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

const ContactUsSection = ({path}) => {
  const [counter, setCounter] = useState('0');
  const [refs, setRefs] = useState([]);
  const [message, setMessage] = useState('');
  const formRef = useRef();
  const botFieldRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  let width = useCurrentWidth();

  useEffect(() => {
    setRefs([botFieldRef, nameRef, emailRef, messageRef]);
  }, [])

  const handleChange = (e) => {
    setCounter(e.target.textLength);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {"form-name": "contact"}
    refs.map((key, i) => (formData[key.current.name] = refs[i].current.value))
    const axiosOptions = {
      url: path,
      method: "POST",
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
          <h3 id="kontakt">Skontaktuj się z nami</h3>
          <span className="line"></span>
          <p>Wypełnij krótki formularz, wyślij e-mail lub zadzwoń do nas!</p>
        </div>
        <div className="grid">
          <div className="contactDetails">
            <p className="title">Nasze biuro</p>
            {width > 767 && <span className="line"></span>}
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
              <button className="border" type="submit">Wyślij</button>
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
