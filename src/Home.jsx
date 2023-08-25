import { Box } from '@mui/material';
import NavBar from './components/NavBar';

function Home() {

  return (
    <>
      <Box>
        <Box sx={{ height: '100vh' }} >
          <NavBar />
        </Box>
        <Box sx={{ bgcolor: '#aaaaaa', height: '100vh' }} />
        <Box sx={{ bgcolor: '#000000', height: '100vh' }} />
      </Box>
    </>
  );
};

export default Home;
