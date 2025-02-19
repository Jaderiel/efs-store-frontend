import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google";

// for Tailwind
import './input.css';
import './output.css';

// Import PrimeReact styles
import 'primereact/resources/themes/lara-light-indigo/theme.css';  // Choose your theme
import 'primereact/resources/primereact.min.css';                   // Core styles

// Import PrimeIcons
import 'primeicons/primeicons.css';  // Icon styles

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <GoogleOAuthProvider clientId="136876035427-153odpahtkkc7jg4cbbh7jf06u7vj0r4.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
);
