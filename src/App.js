import React from 'react';
import './App.css';

import { Route, Link } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  )
}



function App(props) {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/hats' component={HatsPage} />


    </div>
  );
}

export default App;
