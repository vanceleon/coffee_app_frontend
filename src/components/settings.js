// type of machine 
// basic profile info
import React, {useState} from 'react';


export default function Settings() {
  const [coffee, setcoffee] = useState(0)
  return(
    <div>
      <span>Email</span>
      <span>password</span>
      <span>password</span>
      <span>Payment</span>
      <div className="submit">Submit</div>
    </div>
  )
}