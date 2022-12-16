import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import './index.css';
import { AppProvider } from './components/AppProvider';


const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
    <AppProvider>
        <App />
    </AppProvider>
);