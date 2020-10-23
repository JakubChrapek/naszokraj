import React from 'react'
import useCurrentWidth from '../hooks/useCurrentWidth';
import {FaCoins, FaFire, FaLeaf} from 'react-icons/fa'
import {MdHome} from 'react-icons/md'

const Card = ({icon, title, paragraph, accent}) => {
  let width = useCurrentWidth();

  return (
    <div className={accent ? "accent card" : "card"}>
      <div className="content">
        { icon === "coins" ? <FaCoins size={width <= 1287 ? "26px" : "38px"} color="#F05D05"/> :
          icon === "ecology" ? <FaLeaf size={width <= 1287 ? "26px" : "38px"} color="#F05D05"/> :
          icon === "home" ? <MdHome size={width <= 1287 ? "34px" : "48px"} color="#F05D05"/> :
          <FaFire size={width <= 1287 ? "26px" : "38px"} color="#F05D05"/> }
        
        <p className="title">{title}</p>
        <p>{paragraph}</p>
      </div>
  </div>
)}

export default Card
