import { Container, Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import ProfilePicture from '../components/ProfilePicture';

function About() {

    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    const PADDING = isMobile ? 10 : 20;

    const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim a massa ut tempus. Aliquam erat volutpat. Curabitur vitae fringilla metus, eu condimentum ligula. Aenean sodales tincidunt porttitor. Proin nec luctus dui, a sollicitudin nunc. Phasellus sed risus vel ipsum tristique iaculis. Aliquam quis mi eu augue condimentum molestie.

    Duis eu maximus libero. Vestibulum sed nunc accumsan, rhoncus arcu sit amet, egestas urna. Nunc a congue orci, id pulvinar odio. Donec lobortis erat varius quam feugiat, eget facilisis quam cursus. Praesent posuere orci nisi. Curabitur non vulputate ex. Maecenas finibus in eros vel posuere. Nulla eget urna tempor, semper nisi ut, vestibulum nibh. Integer ac porttitor odio. Nulla quam nisi, malesuada nec fermentum sodales, facilisis id ante. Suspendisse ultricies sagittis dolor non pellentesque. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi porta nulla libero, ut aliquet lacus accumsan ac.
    
    `

    return (
        <Container sx={{ pt: PADDING }}>
            <Typography variant='heading'>About</Typography>
            {isMobile ?
                <Box sx={{ mt: 1, display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ProfilePicture />
                    <Typography>
                        {DESCRIPTION}
                    </Typography>
                </Box>
                :
                <Grid container sx={{ mt: 1 }} spacing={5}>
                    <Grid item xs={1}></Grid>
                    <Grid item xs={6}>
                        <Typography>
                            {DESCRIPTION}
                        </Typography>
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
