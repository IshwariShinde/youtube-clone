
import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import ytlogo from './Assets/logo.png';
import { MdOutlineApps } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import "./css/header.css"
import {Link} from "react-router-dom";


function Header() {
  const [inputSearch,setInputSearch] = useState('')
  return (
    <div className='header'>
      <div className='header-left'>
      <AiOutlineMenu className='menu_icon'/>
      <img className='header-logo' src={ytlogo} alt="ytlogo"></img>
      </div>
      <div className='header-mid'>
      <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} type="search" placeholder='search'></input>
      <Link to={`/search/${inputSearch}`}><IoIosSearch className='search_btn' /></Link>
      </div>
      <div className='header-right'>
      <BiVideoPlus className='header_icon'/>
      <MdOutlineApps className='header_icon' />
      <BsBell className='header_icon' />
      <CgProfile className='header_icon' />
      </div>
   
    </div>
  )
}

export default Header
