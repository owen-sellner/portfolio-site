import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/darkTheme.js';
import { lightTheme } from './theme/lightTheme.js';
import ThemeContext from './theme/ThemeContext.js';

function App() {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(prevTheme => !prevTheme);
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
