import { Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { projects } from '../../static/projects';
import ProjectCard from '../components/ProjectCard';

function Projects() {

    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    const PADDING = isMobile ? 10 : 20;

    return (
        <Container sx={{ pt: PADDING }}>
            <Typography variant='heading'>Projects</Typography>
            <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
                <Grid container spacing={3}>
                    {projects.length > 0 &&
                        projects.map((project) => (project.title !== "" && (
                            <Grid item xs={12} sm={12} md={12} lg={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ProjectCard project={project} />
                            </Grid>
                        )))
                    }
                </Grid>
            </Container>
        </Container >
    );
};

export default Projects;
