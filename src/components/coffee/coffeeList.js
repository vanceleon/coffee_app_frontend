import React, { useState } from 'react';
import { Divider } from 'semantic-ui-react';

const listOfCoffee = [
  {
    coffeeRoast: 'Medium',
    coffeeBrand: 'Grumpy Coffee',
    coffeeNotes: 'the coffee is by far my favorite',
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
