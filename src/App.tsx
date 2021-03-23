import React, { useState, useEffect } from 'react';
import './App.scss';

interface AppProps {}

function App({}: AppProps) {
  console.log("app is loaded");
  // states go here
  // useEffects go here
  // Return the App component.
  return (
    <div className="App">
      <h1>Snowpack Typescript App!</h1>
      <p>this is a paragraph with some text. I'm writing a lot of text so that maybe it will line wrap and look like a paragraph.</p>
    </div>
  );
}

export default App;
