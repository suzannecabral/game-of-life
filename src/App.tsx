import React, { useState, useEffect } from 'react';
import './App.scss';

import GridContainer from './grid/GridContainer';
import type gridRowData from './grid/GridContainer'

interface AppProps {
  // displayRow?: typeof gridRowData,
}

function App({}: AppProps) {

  let gridSize = 15;

  // states go here
  // useEffects go here
  // Return the App component.
  return (
    <div className="App">
      <h1>Conway's Game of Life</h1>
      <GridContainer 
        gridSize = {gridSize}
      ></GridContainer>
      <button>Play</button>
      <button>Clear</button>
    </div>
  );
}

export default App;
