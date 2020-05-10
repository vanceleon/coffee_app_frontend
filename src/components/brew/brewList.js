import React, { useState } from 'react';

const listOfBrews = [
  {
    timing: 19, // in seconds
    weight: 10, // in grams
    waterTemp: 130, // F
    milkTemp: 100, // F
  },
  {
    timing: 19, // in seconds
    weight: 10, // in grams
    waterTemp: 115, // F
    milkTemp: 90, // F
  },
];

export default function BrewList() {
  return (
    <div>
      {listOfBrews.map(brewItem => {
        return (
          <div className='brewCard'>
            <div>{brewItem.timing}</div>
            <div>{brewItem.milkTemp}</div>
            <div>{brewItem.waterTemp}</div>
          </div>
        );
      })}
    </div>
  );
}
