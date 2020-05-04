import React, {useState} from 'react';
import CoffeeMeasurements from './measurements';
import ImageUploader from './imageUploader';
import Rating from './ratings';


export default function NewBrewForm() {
  const [coffee, setcoffee] = useState(0)
  return(
    <form className='newBrew' width='500px'>
      <input type="text" placeholder='input coffee here'/>
      <CoffeeMeasurements/>
      <Rating/>
      <ImageUploader/>
      <input type='text' placeholder='notes' />
      <div className="submit">Submit</div>
    </form>
  )
}