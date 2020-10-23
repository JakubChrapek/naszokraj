import React, {useState} from 'react'
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styled from 'styled-components'
import {FaChevronDown} from 'react-icons/fa'

const items = [
  {
    id: 0,
    question: "Jak najwygodniej mogę się z Wami skontaktować?",
    answer: "Można do nas pisać przez formularz kontaktowy na stronie. Poniżej znajdują się też maile. Szybka pomoc i pytania? Jesteśmy pod telefonem: 509 411 729.",
  },
  {
    id: 1,
    question: "Czy mogę liczyć na rzetelną podpowiedź w wyborze kotła?",
    answer: "Tak! Przyjedziemy, doradzimy, przygotujemy ofertę na sprzęt i wykonanie, w której będą 2-3 urządzenia do wyboru. W razie potrzeby polecimy też fachowego kierownika budowy lub kominiarza.",
  },
  {
    id: 2,
    question: "Czy posiadacie uprawnienia do instalacji i przeglądów kotłów?",
    answer: "Oczywiście! Posiadamy zarówno uprawnienia SEP - E1,E2 i E3, jak również autoryzacje instalacyjne i serwisowe montowanych przez nas i serwisowanych kotłów.",
  },
  {
    id: 3,
    question: "Czy pracujecie wg jakiegoś konkretnego schematu?",
    answer: "Do każdego klienta podchodzimy indywidualnie, profesjonalnie i z największą starannością. Liczą się niezbędne procedury, ale w centrum stawiamy zawsze potrzeby klientów.",
  },
  {
    id: 4,
    question: "Czy macie działalność stacjonarną czy dojeżdżacie do klienta?",
    answer: "Nasze biuro mieści się Krakowie i tam możemy się spotkać. Na co dzień oczywiście dojeżdżamy do klientów, to nasze najważniejsze miejsce pracy.",
  },
]

const AccordionsStyles = styled(motion.ul)`
  list-style: none;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 0;
  margin-top: 2rem;
  border-radius: 2.5rem;
  max-width: 77rem;
  

`

const ListItemStyles = styled(motion.li)`

  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  svg {
    transition: transform .2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  &:hover svg {
    transform: scale(1.1);
  }

  &:last-child {
    margin-bottom: 0px;
  }

  .question p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    border-radius: 0.4rem;
    padding: 2.2rem 2.6rem;
    margin-bottom: 2.8rem;
    line-height: 1.3em;
    @media only screen and (max-width: 1238px) {
      font-size: 1.8rem;
      padding: 1.8rem 2.1rem;
      margin-bottom: 2.2rem;
    }
    @media only screen and (max-width: 767px) {
      font-size: 1.4rem;
      padding: 1.6rem 1.6rem;
      margin-bottom: 2.2rem;    
    }
    font-weight: 700;
    color: var(--blackText);
    transition: transform .2s cubic-bezier(0.645, 0.045, 0.355, 1), background-color .2s cubic-bezier(0.645, 0.045, 0.355, 1);
    span {
      width: unset;
      height: unset;
      background-color: unset;
      margin: 0;
    }
    .chevron {
      transition: transform .15s cubic-bezier(0.645, 0.045, 0.355, 1);
      &.open {
        transform: rotate(180deg) translateY(5px);
      }
    }
    .text {
      margin-right: 2rem;
    }
    @media only screen and (max-width: 767px) {
      .text {
        margin-right: 1.4rem;
      }  
    }
  }
  .answer {
    padding: 0 6rem 0 2.6rem;
    margin-bottom: 3rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
    color: var(--grey);
    max-width: 58rem;
    @media only screen and (max-width: 767px) {
      padding: 0 2rem 0 1.6rem;
      margin-bottom: 2
      rem;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }
  }
`

export default function Accordions() {
  return (
    <AnimateSharedLayout>
      <AccordionsStyles layout initial={{ borderRadius: 25 }}>
          {items.map(item => (
            <Item key={item.id} question={item.question} answer={item.answer}/>
          ))}
      </AccordionsStyles>
        </AnimateSharedLayout>
  );
}

function Item({question, answer}, ...props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    console.log("toggle");
  }

  return (
    <ListItemStyles
      onClick={toggleOpen}
      layout
      initial={{borderRadius: 10}}
      transition={{duration: 0.2, ease: 'easeOut'}}
    >
      <motion.div 
        className="question"
        layout
        transition={{duration: 0.2, ease: 'easeOut'}}
      >
        <p><span className="text">{question}</span><span className={isOpen ? 'open chevron' : 'chevron'}><FaChevronDown size="32px" color="#F05D05"/></span></p>
      </motion.div>
      <AnimatePresence>
        {isOpen && <Content content={answer}/>}
      </AnimatePresence>
    </ListItemStyles>
  );
}

function Content({content}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{duration: 0.2, ease: 'easeOut'}}
      className="answer"
    >
      <p>{content}</p>
    </motion.div>
  );
}
