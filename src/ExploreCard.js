import React from 'react'
import './css/exploreCard.css'

const ExploreCard = ({ExploreIcon,explore_title}) => {
  return (
    <div className='exploreCard'>
    <ExploreIcon className='explore-icon' />
      <span className='exploreTitle'>{explore_title}</span>
      

    </div>
  )
}

export default ExploreCard