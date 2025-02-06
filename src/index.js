import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//for tailwind
import './input.css';
import './output.css';

// Import PrimeReact styles
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Choose your theme
import 'primereact/resources/primereact.min.css';                   // Core styles

// Import PrimeIcons
import 'primeicons/primeicons.css';  // Icon styles


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
