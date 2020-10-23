import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import {FaCoins, FaFire, FaLeaf} from 'react-icons/fa'
import {MdHome} from 'react-icons/md'


const Cards = [
  {
    icon: "coins", 
    title: "Oszczędności", 
    paragraph: "Paliwo gazowe to lwia część budżetów domowych. Inwestycje w sprzęt szybko się zwracają.",  
  },
  {
    icon: "home",
    title: "Przyjazny dom",
    paragraph: "Ogrzewanie to fundament domowej atmosfery. Aby tak było, ciepło musi być właściwie rozprowadzone.",         
  },
  {
    icon: "ecology", 
    title: "Ekologia", 
    paragraph: "Idealnie dobrany piec pozwala optymalnie wykorzystać energię, bez strat dla klimatu.",    
  },
  {
    icon: "security", 
    title: "Bezpieczeństwo", 
    paragraph: "Sprawny piec w domu to nie tylko ciepło. To obowiązek, dla bezpieczeństwa domoników.",  
    accent: true
  }
]

const CardStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 4px 28px -4px rgba(0,0,0,0.12);
  position: relative;
  max-width: 280px;
  height: 235px;
  
  padding: 3.2rem 4.6rem 4.4rem 2.6rem;
  color: var(--textBlack);
  &.accent {
    background: var(--accent);
    p {
      color: var(--white);
    }

    .title {
      color: white;
    }
  }

  padding: 4rem 3rem 6rem;
  background-color: ${({accent}) => accent ? `var(--orange)` : `white`};

  svg {
    background-color: ${({accent}) => accent ? 'white' : 'var(--white)'};
    padding: 2.4rem;
    border-radius: 4px;
    margin-left: 0.4rem;
  }

  .title {
    font-size: 2.1rem;
    line-height: 1.3em;
    font-weight: 700;
    color: var(--blackText);
    margin-top: 3rem;
  
  }

  .paragraph {
    margin-top: 1rem;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.4em;
    letter-spacing: 0;
    color: var(--lightGrey);
  }
`

const ButtonStyles = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 4rem;
  line-height: 2.4rem;
  position: absolute;
  bottom: 4rem;
  left: 1rem;
  padding-bottom: 20px;
  background-color: transparent !important;
  border: none !important;
  color: var(--accent);
  &.accent {
    color: white;
  }
  &.next {
    left: unset;
    right: 1rem;
  }

`

const WrapperStyles = styled(motion.div)`
  max-width: 320px;
  margin: 6rem auto 0;
`

const CardIndicators = styled.ol`
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin-top: 2rem;
  padding: 0;
  width: 100%;
  li {
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: transparent;
    border: 2px solid var(--accent);
    &.active {
      background-color: var(--accent);
    }
    margin-right: 1.6rem;
    &:last-child {
      margin-right: 0;
    }
  }
  
`
 
const Slider = () => {
  const cardAmount = Cards.length;
  const [activeCardNumber, setActiveCardNumber] = useState(0);

  const handleNext = () => {
    const cardNumber = activeCardNumber === cardAmount - 1 ? 0 : activeCardNumber + 1;
    setActiveCardNumber(cardNumber);
  }

  const handlePrev = () => {
    const cardNumber = activeCardNumber === 0 ? cardAmount - 1 : activeCardNumber - 1;
    setActiveCardNumber(cardNumber);
  }

  const handleClick = (id) => {
    setActiveCardNumber(id);
  }

  return (
    <>
    <WrapperStyles style={{position: 'relative'}}>
      <AnimatePresence exitBeforeEnter>
        <CardStyles
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          accent={Cards[activeCardNumber].accent}
          className={Cards[activeCardNumber].accent && 'accent'}
          key={Cards[activeCardNumber].title}
        >
          <motion.div className="content">
            { Cards[activeCardNumber].icon === "coins" ? <FaCoins size="28px" color="#F05D05"/> :
            Cards[activeCardNumber].icon === "ecology" ? <FaLeaf size="28px" color="#F05D05"/> :
            Cards[activeCardNumber].icon === "home" ? <MdHome size="28px" color="#F05D05"/> :
            <FaFire size="28px" color="#F05D05"/> }
            <p className="title">{Cards[activeCardNumber].title}</p>
            <p className="paragraph">{Cards[activeCardNumber].paragraph}</p>
          </motion.div>
        </CardStyles>
      </AnimatePresence>
      <ButtonStyles className={Cards[activeCardNumber].accent ? "accent prev" : "prev"} type="button" onClick={handlePrev}>
        ←
      </ButtonStyles>
      <ButtonStyles className={Cards[activeCardNumber].accent ? "accent next" : "next"} type="button" onClick={handleNext}>
        →
      </ButtonStyles>
      <CardIndicators>
        {Cards.map((card, i) => (
          <li onClick={() => handleClick(i)}key={card.title} className={i === activeCardNumber && 'active'} />
        ))}
      </CardIndicators>
    </WrapperStyles>
    </>
  )
}

export default Slider
