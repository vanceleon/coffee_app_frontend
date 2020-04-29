// type of coffee
// rating
// reviews
// get request on proper setting for brew 

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
console.log("testing")