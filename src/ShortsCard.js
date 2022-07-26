import React from 'react'
import './css/shortCard.css'
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";

const ShortsCard = () => {
  return (
    <div className='shorts-content'>
<div className='shorts-card'>
  <button className='subs_button'>SUBSCRIBE</button>
</div>
<div className='shorts-reaction'>
    <AiFillLike className='sreactionicon'/>
    <AiFillDislike className='sreactionicon'/>
    <MdInsertComment className='sreactionicon'/>
    <IoIosShareAlt className='sreactionicon'/>
</div>
    </div>
    
  )
}

export default ShortsCard