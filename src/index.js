import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Define the entry point of the application 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Load the main app 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);