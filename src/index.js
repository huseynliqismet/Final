import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import "animate.css/animate.min.css";
import { ThemeProvider } from '@mui/material';
import "animate.css/animate.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
    <Router>
    <App />
  </Router>
    </ThemeProvider>
 
</React.StrictMode>
);

