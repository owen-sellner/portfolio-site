import { Box } from '@mui/material';
import NavBar from './components/NavBar';
import Title from './sections/Title';
import Experience from './sections/Experience';
import About from './sections/About';
import Footer from './sections/Footer';
import Projects from './sections/Projects';

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
      <Box id="projects">
        <Projects />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
