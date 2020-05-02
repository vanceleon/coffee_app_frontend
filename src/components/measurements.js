// spin wheel for grind setting
// water temp 
// timing 
// weight
// milk temp
// liquid weight
// rating on results

import React, {useState} from 'react';


export default function CoffeeType() {
  const [coffee, setcoffee] = useState(initialState)
  return(
    <div>
      <input type="text" placeholder='input coffee here'/>
      <div className="submit">Submit</div>
    </div>
  )
}