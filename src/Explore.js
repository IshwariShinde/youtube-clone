import React from 'react'
import './css/explore.css';
import ExploreCard from './ExploreCard';
import { MdWhatshot } from "react-icons/md";
import { FcMusic } from "react-icons/fc";
import { MdLocalMovies } from "react-icons/md";
import { TbLivePhoto } from "react-icons/tb";
import { SiYoutubegaming } from "react-icons/si";
import { FcNews } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { ImTrophy } from "react-icons/im";
import { GiHanger } from "react-icons/gi";

const Explore = () => {
  return (
    <div className='explorePage'>
      <ExploreCard ExploreIcon={MdWhatshot} explore_title='Trending' />
      <ExploreCard ExploreIcon={FcMusic} explore_title='Music' />
      <ExploreCard ExploreIcon={MdLocalMovies} explore_title='Movies' />
      <ExploreCard ExploreIcon={TbLivePhoto} explore_title='Live' />
      <ExploreCard ExploreIcon={SiYoutubegaming} explore_title='Gaming' />
      <ExploreCard ExploreIcon={FcNews} explore_title='News' />
      <ExploreCard ExploreIcon={ImTrophy} explore_title='Sports' />
      <ExploreCard ExploreIcon={FcIdea} explore_title='Learning' />
      <ExploreCard ExploreIcon={GiHanger} explore_title='Fashion & Beauty' />

    </div>
  )
}

export default Explore