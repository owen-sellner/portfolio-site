import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darkTheme.js';
import { lightTheme } from './theme/lightTheme.js';
import ThemeContext from './theme/ThemeContext.js';

function App() {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme");
  })

  const toggleTheme = () => {
    if (localStorage.getItem("theme")) {
      localStorage.removeItem("theme");
    } else {
      localStorage.setItem("theme", "true");
    }
    setTheme(localStorage.getItem("theme"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
