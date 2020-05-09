import React, { useState } from 'react';

const listOfBrews = [
  {
    
    rating: 5,
  },
  {
    coffeeRoast: 'Dark',
    coffeeBrand: 'Grumpy Coffee',
    coffeeNotes: 'Prefer the medium roast',
    rating: 3,
  },
];

export default function CoffeeList() {
  return (
      <div>
        {listOfCoffee.map(coffeeItem => {
          return <div>{coffeeItem.coffeeRoast}</div>
        })}
      </div>
    )
}
