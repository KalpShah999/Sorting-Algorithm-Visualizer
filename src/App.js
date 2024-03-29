import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer.jsx';
import './App.css';
import './SortingVisualizer/SortingVisualizer.css';

function App() {
  // Load the Sorting Visualizer page 
  return (
    <div className="App">
      <div className="Content">
        <SortingVisualizer></SortingVisualizer>
      </div>
    </div>
  );
}

export default App;
