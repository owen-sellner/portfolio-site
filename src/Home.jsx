import { Box, Typography } from '@mui/material';
import NavBar from './components/NavBar';
import Title from './sections/Title';

function Home() {

  return (
    <>
      <Box>
        <Box id="home" sx={{ height: '100vh' }}>
          <NavBar />
          <Title />
        </Box>
        <Box id="about" sx={{ bgcolor: '#aaaaaa', height: '100vh' }} />
        <Box id="experience" sx={{ height: '100vh' }} />
        <Box id="projects" sx={{ bgcolor: '#aaaaaa', height: '100vh' }} />
      </Box>
    </>
  );
};

export default Home;
