import React from 'react';
import CoffeeLandingImg from '../images/coffeeLanding.jpg'

export default function LandingPage() {
  return (
    <div className='landing-page'>
      <h1>Welcome to Home Barista App</h1>
      <img src={CoffeeLandingImg} alt="latte" height='500px' width='400px'/>
      <div>Log In</div>
      <div>Sign In</div>
    </div>
  )
}