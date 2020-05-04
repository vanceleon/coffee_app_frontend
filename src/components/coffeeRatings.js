import React, {useState} from 'react';


export default function CoffeeRatings() {
  const [coffee, setcoffee] = useState(0)
  return(
    <div>
      <input type="text" placeholder='input coffee here'/>
      {/* <div className="submit">Submit</div> */}
    </div>
  )
}
