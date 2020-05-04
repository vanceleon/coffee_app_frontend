// aws image uploader 


import React, {useState} from 'react';


export default function ImageUploader() {
  const [coffee, setcoffee] = useState(0)
  return(
    <div>
      <div>Drop File Here</div>
      <div className="submit">Submit</div>
    </div>
  )
}