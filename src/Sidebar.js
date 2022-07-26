import React from 'react';
import './css/sidebar.css';
import SidebarRow from './SidebarRow';
import { HiHome } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { VscHistory } from "react-icons/vsc";
import { RiVideoLine } from "react-icons/ri";
import { BiLike } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className='sidebar'>
     <NavLink to='/' className='navlink'>  <SidebarRow selected Icon={HiHome} title="Home"/></NavLink>
     <NavLink to='/explore' className='navlink'> <SidebarRow  Icon={MdOutlineExplore} title="Explore"/> </NavLink>
     <NavLink to='/shorts' className='navlink'> <SidebarRow Icon={BsCameraReels} title="Shorts"/> </NavLink>
      
      <SidebarRow Icon={MdOutlineSubscriptions} title="Subscriptions"/>
      <hr />
      <SidebarRow Icon={MdOutlineVideoLibrary} title="Library"/>
      <SidebarRow Icon={VscHistory} title="History"/>
      <SidebarRow Icon={RiVideoLine} title="Your videos"/>
      <SidebarRow Icon={MdOutlineWatchLater} title="Watch later"/>
      <SidebarRow Icon={BiLike} title="Liked videos"/>
      <SidebarRow Icon={FaAngleDown} title="Show more"/>
      <hr />
    </div>
  );
}

export default Sidebar