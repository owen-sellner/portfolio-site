import { Box, Container, Typography, Grid } from '@mui/material';
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
      <Box id="projects">
        <Container sx={{ pt: 20 }}>
          <Typography variant='heading'>Projects</Typography>
          <Container maxWidth="md">
            <Grid container spacing={1}>
              {/* First Row */}
              <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ProjectCard project={projects[0]} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ProjectCard project={projects[0]} />
              </Grid>

              {/* Second Row */}
              <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ProjectCard project={projects[0]} />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ProjectCard project={projects[0]} />
              </Grid>
            </Grid>
          </Container>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
