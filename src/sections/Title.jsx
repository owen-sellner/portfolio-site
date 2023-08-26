import { useContext } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '../icons/LinkedInIcon';
import GitHubIcon from '../icons/GitHubIcon';
import DownArrowIcon from '../icons/DownArrowIcon';
import ThemeContext from '../theme/ThemeContext';
import { Link } from 'react-scroll';


function Title() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Box sx={{ height: '70%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="title" sx={{ m: 1 }}>Owen Sellner</Typography>
                <Typography variant="subtitle" sx={{ color: '#45AAB8', m: 1 }}>Engineering Student @ UWaterloo</Typography>
                <Box>
                    <IconButton href='https://github.com/owen-sellner' target='_blank' sx={{ m: 3 }} style={{ backgroundColor: 'transparent' }}>
                        <GitHubIcon width="50px" height="50px" fill={theme ? '#ffffff' : '#000000'} />
                    </IconButton>
                    <IconButton href='https://linkedin.com/in/owen-sellner' target='_blank' sx={{ m: 3 }} style={{ backgroundColor: 'transparent' }}>
                        <LinkedInIcon width="50px" height="50px" />
                    </IconButton>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                <Link style={{ cursor: 'pointer' }} smooth spy to="about">
                    <DownArrowIcon width="80px" height="60px" fill={theme ? '#ffffff' : '#525252'} />
                </Link>
            </Box >
        </>

    );
};

export default Title;
