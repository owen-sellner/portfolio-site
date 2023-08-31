import { Box, Typography } from "@mui/material";

function AboutDescription() {
    return (
        <Box sx={{ mt: 3 }}>
            <Typography variant='largeText'>Hi there! I'm Owen. I am a third year management engineering student at the University of Waterloo.</Typography>
            <Typography variant='largeText' sx={{ mt: 3 }}>
                I am currently learning front-end development and machine learning. I believe in tech's potential to drive positive change and I am passionate about developing web applications that make a difference for society.
            </Typography>
        </Box>
    );
};

export default AboutDescription;