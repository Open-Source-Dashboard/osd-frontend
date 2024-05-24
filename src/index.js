import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './global.css';

import { AuthProvider } from './auth/AuthContext';
import { UserProvider } from './api_calls/UserContext'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
);
