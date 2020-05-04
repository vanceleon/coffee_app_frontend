// spin wheel for grind setting
// water temp
// timing
// weight
// milk temp
// liquid weight
// rating on results

import React, { useState } from 'react';
// import Rating from './ratings';

// const initialState = {
//   coffeeRoast,
//   timing,
//   weight,
//   waterTemp,
//   milkTemp,
// };

export default function CoffeeMeasurements() {
  const [measurements, setmeasurements] = useState(0);
  return (
    <div className='measurements-container'>
      {/* <Dropdown>
        <Dropdown.Toggle variant='success' id='dropdown-basic'>
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <input type='text' placeholder='coffee roast' />
      <input type='text' placeholder='timing' />
      <input type='text' placeholder='weight' />
      <input type='text' placeholder='water temperature' />
      <input type='text' placeholder='milk temperature' />

      {/* <Rating /> */}

      {/* <div className='submit'>Submit</div> */}
    </div>
  );
}
