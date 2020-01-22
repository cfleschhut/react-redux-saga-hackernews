import React from 'react';
import Stories from './Stories';
import './App.css';

function App({ stories, onArchive }) {
  return (
    <div className="App">
      <Stories stories={stories} onArchive={onArchive} />
    </div>
  );
}

export default App;
