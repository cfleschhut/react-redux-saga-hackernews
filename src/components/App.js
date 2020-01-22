import React from 'react';
import Stories from './Stories';
import './App.css';

function App({ stories }) {
  return (
    <div className="App">
      <Stories stories={stories} />
    </div>
  );
}

export default App;
