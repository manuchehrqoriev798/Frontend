import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/variables.css';

// Add this error handling
window.addEventListener('error', function(e) {
  if (e.message.includes('message channel closed')) {
    e.stopImmediatePropagation();
  }
}, true);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you have any service worker registration, change it to unregister
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready
    .then(registration => {
      registration.unregister();
    })
    .catch(error => {
      console.error('Error unregistering service worker:', error);
    });
} 