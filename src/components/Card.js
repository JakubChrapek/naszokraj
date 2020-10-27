import React, { useEffect } from 'react'
import useCurrentWidth from '../hooks/useCurrentWidth';
import {FaCoins, FaFire, FaLeaf} from 'react-icons/fa'
import {MdHome} from 'react-icons/md'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Card = ({icon, title, paragraph, accent}) => {
  let width = useCurrentWidth();
  const controls = useAnimation();
  const [ref, inView] = useInView({threshold: 0.4});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div 
      className={accent ? "accent card" : "card"}
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 10 }
      }} 
      transition={{duration: 1}}
    >
      <div className="content">
        { icon === "coins" ? <FaCoins size={width <= 1366 ? "26px" : "38px"} color="#F05D05"/> :
          icon === "ecology" ? <FaLeaf size={width <= 1366 ? "26px" : "38px"} color="#F05D05"/> :
          icon === "home" ? <MdHome size={width <= 1366 ? "34px" : "48px"} color="#F05D05"/> :
          <FaFire size={width <= 1366 ? "26px" : "38px"} color="#F05D05"/> }
        
        <p className="title">{title}</p>
        <p>{paragraph}</p>
      </div>
  </motion.div>
)}

export default Card
