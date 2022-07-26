import React from 'react';
// import { NavLink } from 'react-router-dom';
import './css/sidebarrow.css'


function SidebarRow({Icon,title}) {
  return (
    <div className='sidebarrow' >
       <Icon className="siderow_icon"  />
        <h2 className='siderow_title'>{title}</h2>
         
    </div>
  )
}

export default SidebarRow