import { Box, Typography } from '@mui/material';
import NavBar from './components/NavBar';
import Title from './sections/Title';

function Home() {

  return (
    <>
      <Box>
        <Box sx={{ height: '100vh' }}>
          <NavBar />
          <Title />
        </Box>
        <Box sx={{ bgcolor: '#aaaaaa', height: '100vh' }} />
        <Box sx={{ bgcolor: '#000000', height: '100vh' }} />
      </Box>
    </>
  );
};

export default Home;
