import { Box, Typography, IconButton } from '@mui/material';
import moonIcon from '../icons/moon.svg';
import LinkedInIcon from '../icons/LinkedInIcon';

    function Title() {

        return (
            <Box sx={{ height: '75%', display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center' }}>
                <Typography variant="title" sx={{ m: 1 }}>Owen Sellner</Typography>
                <Typography variant="subtitle" sx={{ color: '#45AAB8', m: 1 }}>Engineering Student @ UWaterloo</Typography>
                <Box>
                    <IconButton style={{ backgroundColor: 'transparent' }}>
                        <img src={moonIcon} style={{ width: '40px', height: '40px' }} />
                    </IconButton>
                    <IconButton sx={{ m: 1, backgroundColor: 'transparent' }}>
                        <LinkedInIcon width="50px" height="50px"/>
                    </IconButton>
                </Box>
                <Typography variant="subtitle" sx={{ color: '#45AAB8' }}>Owen Sellner</Typography>
            </Box>
        );
    };

export default Title;
