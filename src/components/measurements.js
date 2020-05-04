// spin wheel for grind setting
// water temp 
// timing 
// weight
// milk temp
// liquid weight
// rating on results

import React, {useState} from 'react';
import Rating from './ratings';


export default function CoffeeMeasurements() {
  const [coffee, setcoffee] = useState(initialState)
  return(
    <form>
      <input type="text" placeholder='coffee type'/>
      <input type="text" placeholder='timing'/>
      <input type="text" placeholder='weight'/>
      <input type="text" placeholder='water temperature'/>
      <input type="text" placeholder='milk temperature'/>
      <Rating/>

      <div className="submit">Submit</div>
    </form>
  )
}