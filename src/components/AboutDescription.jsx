import { Typography, List, ListItem, Box } from "@mui/material";

function AboutDescription() {
    return (
        <>
            <Typography variant='largeText'>Hi there! I'm Owen. I am a third year management engineering student at the University of Waterloo.</Typography>
            <Typography variant='largeText' sx={{ mt: 3 }}>Some things about me:</Typography>
            <Box sx={{ mx: 5 }}>
                <List sx={{ listStyleType: 'disc' }}>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant='largeText'>I enjoy playing soccer and hockey</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant='largeText'>I like reading 📚</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant='largeText'>I'm super into tv dramas (I just finished the first season of How to Get Away with Murder)</Typography>
                    </ListItem>
                    <ListItem sx={{ display: 'list-item' }}>
                        <Typography variant='largeText'>I recently learned how to ride a bike with no hands 😎</Typography>
                    </ListItem>
                </List>
            </Box>
        </>
    );
};

export default AboutDescription;