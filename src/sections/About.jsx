import { Container, Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import ProfilePicture from '../components/ProfilePicture';
import AboutDescription from '../components/AboutDescription';

function About() {

    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    const PADDING = isMobile ? 10 : 20;

    return (
        <Container sx={{ pt: PADDING }}>
            <Typography variant='heading'>About</Typography>
            {isMobile ?
                <Box sx={{ mt: 1, display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center' }}>
                    <ProfilePicture />
                    <AboutDescription />
                </Box>
                :
                <Grid container sx={{ mt: 1 }} spacing={5}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                        <AboutDescription />
                    </Grid>
                    <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <ProfilePicture />
                    </Grid>
                </Grid>
            }

        </Container >
    );
};

export default About;
