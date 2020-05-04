// type of coffee
// rating
// reviews
// get request on proper setting for brew 

import React, {useState} from 'react';
import ImageUploader from '../imageUploader';
import CoffeeRatings from './coffeeRatings';


export default function CoffeeTypeForm() {
  const [coffee, setcoffee] = useState(0)
  return(
    <form>
      <ImageUploader/>
      <input type="text" placeholder='Coffee Brand'/>
      <input type="text" placeholder='Coffee Roast'/>
      <CoffeeRatings/>
      <input type="text" placeholder='notes'/>
      <div className="submit">Submit</div>
    </form>
  )
}