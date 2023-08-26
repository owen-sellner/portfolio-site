import { useContext } from 'react';
import { Container, Box, Typography, IconButton, Button } from '@mui/material';
import ThemeContext from '../theme/ThemeContext';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';



function Experience() {

    const { theme } = useContext(ThemeContext);

    return (
        <Container sx={{ py: 20 }}>
            <Typography variant='heading'>Experience</Typography>
            <Container sx={{ width: '75%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button style={{ color: 'inherit', background: 'transparent', textTransform: 'none', alignItems: 'center' }}>
                        <Typography sx={{ mr: 1 }} variant='largeText'>View PDF</Typography>
                        <ExternalLinkIcon width="30px" height="30px" stroke={theme ? '#ffffff' : '#000000'} />
                    </Button>
                </Box>
            </Container>
        </Container>
    );
};

export default Experience;
