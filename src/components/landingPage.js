import React from 'react';
import CoffeeLandingImg from '../images/coffeeBackground.jpg'


export default function LandingPage() {
  return (
    <div className='landing-page'>
      <h1>Home Barista</h1>
      <img src={CoffeeLandingImg} alt="latte" height='1280px' width='100%'/>
      <div>Log In</div>
      <div>Sign In</div>
    </div>
  )
}