// type of machine 
// basic profile info
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