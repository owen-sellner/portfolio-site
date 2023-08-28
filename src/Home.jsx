import { Box, Container, Typography } from '@mui/material';
import NavBar from './components/NavBar';
import Title from './sections/Title';
import Experience from './sections/Experience';
import About from './sections/About';

function Home() {

  return (
    <>
      <Box>
        <Box id="home" sx={{ height: '100vh' }}>
          <NavBar />
          <Title />
        </Box>
        <Box id="about">
          <About />
        </Box>
        <Box id="experience" >
          <Experience />
        </Box>
        <Box id="projects" sx={{ height: '100vh' }}>
          <Container sx={{ pt: 20 }}>
            <Typography variant='heading'>Projects</Typography>
          </Container>
        </Box>
      </Box >
    </>
  );
};

export default Home;
