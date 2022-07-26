import React from 'react';
import './css/recommendedvideo.css';
import VideoCard from './VideoCard';
import Thumb from './Assets/food1.jpg'
import yt1 from './Assets/yt1.jpeg';
import yt2 from './Assets/yt2.jpeg';
import yt3 from './Assets/yt3.jpeg';
import Logo from './Assets/logo.png'


function RecommendedVideos() {
  return (
    <div className='video-recommendation'>
      <h2>Recommended</h2>
      <div className='videos'>
        <VideoCard 
        image={Thumb}
        title="Food Recipe"
        channel="Isha's Kitchen" 
        views=" 150"
        timestamp="2hours"
        channelimage={Logo}
        />
        <VideoCard 
        image={yt1}
        title="Every First Year Engineering Student Should Know This"
        channel="Ishwari Shinde" 
        views=" 459"
        timestamp="2 months ago"
        />
        <VideoCard 
        image={yt2}
        title="5 Best Stacks For Web Development"
        channel="Ishwari Shinde" 
        views=" 172"
        timestamp="2 months ago"
        />
        <VideoCard 
        image={yt3}
        title="Book Review | Do Epic Shit by Ankur Warikoo"
        channel="Ishwari Shinde" 
        views=" 115"
        timestamp="1 month ago"
        />
        <VideoCard 
        image={yt2}
        title="5 Best Stacks For Web Development"
        channel="Ishwari Shinde" 
        views=" 172"
        timestamp="2 months ago"
        />
        <VideoCard 
        image={Thumb}
        title="Food Recipe"
        channel="Isha's Kitchen" 
        views=" 150"
        timestamp="2hours"
        />
        <VideoCard 
        image={yt3}
        title="Book Review | Do Epic Shit by Ankur Warikoo"
        channel="Ishwari Shinde" 
        views=" 115"
        timestamp="1 month ago"
        />
        <VideoCard 
        image={Thumb}
        title="Food Recipe"
        channel="Isha's Kitchen" 
        views=" 150"
        timestamp="2hours"
        />
        <VideoCard 
        image={yt1}
        title="Every First Year Engineering Student Should Know This"
        channel="Ishwari Shinde" 
        views=" 459"
        timestamp="2 months ago"
        />
        <VideoCard 
        image={Thumb}
        title="Food Recipe"
        channel="Isha's Kitchen" 
        views=" 150"
        timestamp="2hours"
        />
 
      </div>
    </div>
  )
}

export default RecommendedVideos


