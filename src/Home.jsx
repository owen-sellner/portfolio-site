import { useContext, useState } from 'react'
import ThemeContext from './theme/ThemeContext';
import { Box } from '@mui/material';
import NavBar from './components/NavBar';

function Home() {
  const [count, setCount] = useState(0);

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Box>
        <Box className="#navbar" sx={{ height: '10vh' }}>
          <NavBar />
        </Box>
        <Box sx={{ bgcolor: '#aaaaaa', height: '100vh' }} />
        <Box sx={{ bgcolor: '#000000', height: '100vh' }} />
      </Box>
    </>
  );
};

export default Home;
