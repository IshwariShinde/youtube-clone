import React from 'react'
import './css/channelRow.css'
// import { CgProfile } from "react-icons/cg";
import { MdVerified } from "react-icons/md";
import { BsDot } from "react-icons/bs";

const ChannelRow = ({image,channel,subs,noOfvideos,verified,description}) => {
  return (
    <div className='ChannelRow'>
        <img className='channelRow_logo' alt={channel} src={image} />
        <div className='channelRow_text'>
            <h4>{channel} {verified && <MdVerified />}</h4>
            <p>{subs} subscribers <BsDot /> {noOfvideos} videos</p>
            <p>{description}</p>
        </div>

    </div>
  )
}

export default ChannelRow