import React from 'react';
import './App.css';
import LandingPage from './components/landingPage';
import NewBrewForm from './components/newForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/'>
          <LandingPage />
        </Route>
        <Route path='/newbrew'>
          <NewBrewForm />
        </Route>
      </div>
    </Router>
  );
}

export default App;
