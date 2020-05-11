import React, { useState } from 'react';
import NewCoffeeForm from './coffeeForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
    <Router>
      <Route path='/coffee'>
        <NewCoffeeForm />
      </Route>
      {listOfCoffee.map(coffeeItem => {
        return (
          <div className='coffeeListContainer'>
            <div className='coffeeCard'>{coffeeItem.coffeeRoast}</div>
            <div className='coffeeCard'>{coffeeItem.coffeeBrand}</div>
            <div className='coffeeCard'>{coffeeItem.coffeeNotes}</div>
          </div>
        );
      })}
    </Router>
  );
}
