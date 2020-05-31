import React from 'react';
import CoffeeLandingImg from '../images/coffeeBackground.jpg'


export default function LandingPage() {
  //need to change the img tag to a div tag and set the background to the image
  const isLoggedIn = (signedIn) => {
    console.log('on click for loginz')
    // if(signedIn) {
    //   // return true;
    // }
  }
  return (
    <div className='landingPage'>
      <h1>Home Barista</h1>
      <img className='landingImg' src={CoffeeLandingImg} alt="latte"/> 
      <div>Log In</div>
      <div onClick={isLoggedIn}>Sign In</div>
      <div>Sign Up</div>
    </div>
  )
}