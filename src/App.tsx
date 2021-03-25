import React, { useState, useEffect } from 'react';
import './App.scss';

import GridContainer from './grid/GridContainer';

interface AppProps {}

function App({}: AppProps) {

  // states go here
  // useEffects go here
  // Return the App component.
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <GridContainer></GridContainer>
    </div>
  );
}

export default App;
