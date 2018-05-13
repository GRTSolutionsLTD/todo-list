import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'

export const HomeView = () => (
  <div className="home1">
    <h4>Welcome EPG | GRTH!</h4>
    <img alt='This is a duck, because Redux!' className='duck' src={DuckImage} />
  </div>
)
export default HomeView
