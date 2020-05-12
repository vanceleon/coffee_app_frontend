import React, { useState } from 'react';
import NewBrewForm from './brewForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
    <React.Fragment>
      {listOfBrews.map(brewItem => {
        return (
          // <div className='brewContainer'>
          <div className='brewCardContainer'>
            <h1>Brew Item</h1>
            <div>{brewItem.timing}</div>
            <div>{brewItem.milkTemp}</div>
            <div>{brewItem.waterTemp}</div>
          </div>
          // </div>
        );
      })}
    </React.Fragment>
  );
}
