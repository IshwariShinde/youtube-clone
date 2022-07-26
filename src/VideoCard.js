import React from 'react'
import './css/videocard.css'
import { CgProfile } from "react-icons/cg";

function VideoCard({image,channelimage,title,channel,views,timestamp}) {
  return (
    <div className='Video_card'>
       <img className='videocard_thumbnail' src={image} alt="" />
       <div className='videocard_info'>
           <CgProfile className='videocard_profile' alt={channel} src={channelimage} />
           <div className='videocard_text'>
               <h4 className='videocard_title'>{title}</h4>
               <p>{channel}</p>
               <p>
                   {views} . {timestamp}
               </p>
           </div>

       </div>

    </div>
  )
}

export default VideoCard