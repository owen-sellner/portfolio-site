import { useContext } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '../icons/LinkedInIcon';
import GitHubIcon from '../icons/GitHubIcon';
import ThemeContext from '../theme/ThemeContext';


function Title() {

    const { theme } = useContext(ThemeContext);

    return (
        <Box sx={{ height: '75%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
            <Typography variant="title" sx={{ m: 1 }}>Owen Sellner</Typography>
            <Typography variant="subtitle" sx={{ color: '#45AAB8', m: 1 }}>Engineering Student @ UWaterloo</Typography>
            <Box>
                <IconButton href='https://github.com/owen-sellner' target='_blank' sx={{ m: 3 }} style={{ backgroundColor: 'transparent' }}>
                    <GitHubIcon width="50px" height="50px" fill={theme ? '#ffffff': '#000000'} />
                </IconButton>
                <IconButton href='https://linkedin.com/in/owen-sellner' target='_blank' sx={{ m: 3 }} style={{ backgroundColor: 'transparent' }}>
                    <LinkedInIcon width="50px" height="50px" />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Title;
