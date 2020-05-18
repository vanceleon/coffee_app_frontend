import React from 'react';
import './css/App.css';
import LandingPage from './components/landingPage';
import Home from './components/home';
import NewBrewForm from './components/brew/brewForm';
import Navigation from './components/navigation';
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
        <Route path='/'>
          <Navigation />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
        <Route path='/newbrew'>
          <NewBrewForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
