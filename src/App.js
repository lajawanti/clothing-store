import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx'

function App() {
  return (
    <div className="App">

      <h1>Clothing Store....</h1>
      
      <HomePage />
    </div>
  );
}

export default App;
