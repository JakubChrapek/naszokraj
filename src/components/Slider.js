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
 
// const CardStyles = styled.div`


//   p {
//     margin-top: 1rem;
//     font-size: 2rem;
//     font-weight: 300;
//     line-height: 3rem;
//     letter-spacing: 0;
//     color: var(--lightGrey);
//   }

//   .title {
//     font-size: 2.8rem;
//     line-height: 4rem;
//     font-weight: 700;
//     color: var(--blackText);
//     margin-top: 3rem;
//   }
// `

const CardStyles = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  box-shadow: 0px 4px 28px -4px rgba(0,0,0,0.12);
  position: relative;
  max-width: 280px;
  height: 310px;
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

  padding: 4rem 2rem;
  background-color: ${({accent}) => accent ? `var(--orange)` : `white`};

  svg {
    background-color: ${({accent}) => accent && 'white'};
    padding: 1.2rem;
    border-radius: 4px;
    margin-left: 0.4rem;
  }

  .title {

  }

  .paragraph {

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

  return (
    <>
    <AnimatePresence exitBeforeEnter>
      <CardStyles
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        accent={Cards[activeCardNumber].accent}
        key={Cards[activeCardNumber].title}
      >
        <motion.div className="content">
          { Cards[activeCardNumber].icon === "coins" ? <FaCoins size="38px" color="#F05D05"/> :
          Cards[activeCardNumber].icon === "ecology" ? <FaLeaf size="38px" color="#F05D05"/> :
          Cards[activeCardNumber].icon === "home" ? <MdHome size="38px" color="#F05D05"/> :
          <FaFire size="38px" color="#F05D05"/> }
          <p className="title">{Cards[activeCardNumber].title}</p>
          <p className="paragraph">{Cards[activeCardNumber].paragraph}</p>
        </motion.div>
      </CardStyles>
    </AnimatePresence>
      <button type="button" onClick={handlePrev}>
        Prev
      </button>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </>
  )
}

export default Slider
