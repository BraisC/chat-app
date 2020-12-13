import { MyThemeProvider } from 'contexts/ThemeContext';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <MyThemeProvider>
    <App />
  </MyThemeProvider>,
  document.getElementById('root')
);
