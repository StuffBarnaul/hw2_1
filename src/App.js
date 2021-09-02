import React from 'react';
import './App.css';

const App = () => {
  return (
      <>
        <h1 className="App-header">Current time: {new Date().toLocaleString()}</h1>
      </>
  );
}

export default App;
