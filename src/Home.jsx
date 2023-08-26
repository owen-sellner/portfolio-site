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
        <Box id="about" sx={{ height: '100vh' }}>
          <Box sx={{ py: 20, px: 30 }}>
            <Typography variant='heading'>About</Typography>
          </Box>
        </Box>
        <Box id="experience" sx={{ height: '100vh' }}>
          <Box sx={{ py: 20, px: 30 }}>
            <Typography variant='heading'>Experience</Typography>
          </Box>
        </Box>
        <Box id="projects" sx={{ height: '100vh' }}>
          <Box sx={{ py: 20, px: 30 }}>
            <Typography variant='heading'>Projects</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
