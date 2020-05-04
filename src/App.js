import React from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import Home from './components/home';
// import NewBrewForm from './components/newForm';
// import CoffeeType from './components/coffee';
import Settings from './components/settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        {/* <Route path='/newbrew'>
          {/* <NewBrewForm /> */}
        {/* </Route> */}
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
        {/* <Route path='/coffee'>
          <CoffeeType />
        </Route> */}
      </div>
    </Router>
  );
}

export default App;
