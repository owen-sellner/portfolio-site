import { Box, Container, Typography } from '@mui/material';
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
          <Container sx={{ py: 20 }}>
            <Typography variant='heading'>About</Typography>
          </Container>
        </Box>
        <Box id="experience" sx={{ height: '100vh' }}>
          <Container sx={{ py: 20 }}>
            <Typography variant='heading'>Experience</Typography>
          </Container>
        </Box>
        <Box id="projects" sx={{ height: '100vh' }}>
          <Container sx={{ py: 20 }}>
            <Typography variant='heading'>Projects</Typography>
          </Container>
        </Box>
      </Box >
    </>
  );
};

export default Home;
