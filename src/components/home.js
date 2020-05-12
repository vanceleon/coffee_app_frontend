//button that will take to list of coffee
//button that will take to list of brews

import React, {useState} from 'react';
import CoffeeList from '../components/coffee/coffeeList';
import BrewList from './brew/brewList';

export default function Home() {
  return (
    <div className='homeContainer'>
      <span>Coffee List</span>
      <CoffeeList/>
      <span>Brew List</span>
      <BrewList/>
    </div>
  )
}