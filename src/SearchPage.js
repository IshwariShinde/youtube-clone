import React from 'react'
import './css/searchPage.css';
import { MdOutlineTune } from "react-icons/md";
import channelLogo from './Assets/ishayt.jpeg'
import ChannelRow from './ChannelRow';
import SearchVideoRow from './SearchVideoRow';
import yt1 from './Assets/yt1.jpeg';
import yt2 from './Assets/yt2.jpeg';
import yt3 from './Assets/yt3.jpeg';


const SearchPage = () => {
  return (
    <div className='searchPage'>
        <div className='searchPage_filter'>
            <MdOutlineTune />
            <h2>FILTERS</h2>
        </div>
        <hr />
        <ChannelRow
        image ={channelLogo}
        channel="Ishwari Shinde"
        verified 
        subs ='60'
        noOfvideos={3}
        description='Student' />
        <hr />
        <SearchVideoRow views='459'
         subs='60'
           timestamp='2 months ago' channel='Ishwari Shinde' title='Every First Year Engineering Student Should Know This' image={yt1}/>
        <SearchVideoRow views='172'
         subs='60'
           timestamp='1 month ago' channel='Ishwari Shinde' title='5 Best Stacks For Web Development' image={yt2}/>
        <SearchVideoRow views='115'
         subs='60'
           timestamp='1 months ago' channel='Ishwari Shinde' title='Book Review | Do Epic Shit by Ankur Warikoo' image={yt3}/>
    </div>
  )
}

export default SearchPage