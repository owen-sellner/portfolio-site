import { Box, Container, Typography } from '@mui/material';
import NavBar from './components/NavBar';
import Title from './sections/Title';
import Experience from './sections/Experience';
import About from './sections/About';
import Footer from './sections/Footer';

import ProjectCard from './components/ProjectCard';
import { projects } from '../static/projects';

function Home() {

  return (
    <>
      <Box id="home" sx={{ height: '100vh' }}>
        <NavBar />
        <Title />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="experience">
        <Experience />
      </Box>
      <Box id="projects" sx={{ height: '93vh' }}>
        <Container sx={{ pt: 20 }}>
          <Typography variant='heading'>Projects</Typography>
        </Container>
      </Box>
      <Footer />
      <ProjectCard project={projects[0]} />
    </>
  );
};

export default Home;
