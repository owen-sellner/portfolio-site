import { Container, Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import ProfilePicture from '../components/ProfilePicture';
import AboutDescription from '../components/AboutDescription';

function About() {

    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    const PADDING = isMobile ? 10 : 20;

    return (
        <Container sx={{ pt: PADDING }}>
            <Typography variant='heading'>About</Typography>
            <Container sx={{ mt: 4 }}>
                <Grid container sx={{ display: 'flex', flexDirection: 'row-reverse' }} spacing={4}>
                    <Grid item xs={12} sm={12} md={12} lg={5}>
                        <ProfilePicture />
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={7}>
                        <AboutDescription />
                    </Grid>
                </Grid>
            </Container>


        </Container >
    );
};

export default About;
