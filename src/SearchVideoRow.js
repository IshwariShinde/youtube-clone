import React from 'react'
import './css/searchVideoRow.css'

const SearchVideoRow = ({views,subs,description,timestamp,channel,title,image}) => {
  return (
    <div className='SearchVideoRow'>
        <img src={image} alt='' className='searchVideo_img'/>
        <div className='searchVideoRow_text'>
            <h3>{title}</h3>
            <p className='searchVideoRow_headline'>{channel}. <span className='search_subs'><span className='subsno'>{subs}</span> Subscribers</span> {views} views . {timestamp}</p>
            {/* <p className='searchVideoRow_description'>{description}</p> */}
        </div>

    </div>
  )
}

export default SearchVideoRow