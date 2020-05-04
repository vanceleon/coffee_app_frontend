// type of coffee
// rating
// reviews
// get request on proper setting for brew 

import React, {useState} from 'react';
import ImageUploader from './imageUploader';
import CoffeeRatings from './coffeeRatings';


export default function CoffeeType() {
  const [coffee, setcoffee] = useState(0)
  return(
    <div>
      <ImageUploader/>
      <input type="text" placeholder='Coffee Brand'/>
      <input type="text" placeholder='Coffee Roast'/>
      <CoffeeRatings/>
      <input type="text" placeholder='notes'/>
      <div className="submit">Submit</div>
    </div>
  )
}