import { useContext } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import ThemeContext from '../theme/ThemeContext';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import PDF from '../../static/Resume - Owen Sellner.pdf';
import PDFImage from '../../static/Resume - Owen Sellner.png';

function Experience() {

    const { theme } = useContext(ThemeContext);

    return (
        <Container sx={{ pt: 20 }}>
            <Typography variant='heading'>Experience</Typography>
            <Container sx={{ width: '75%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button
                        href={PDF}
                        target='_blank'
                        style={{
                            color: 'inherit',
                            background: 'transparent',
                            textTransform: 'none',
                            alignItems: 'center'
                        }}
                    >
                        <Typography sx={{ mr: 1 }} variant='largeText'>View PDF</Typography>
                        <ExternalLinkIcon width="30px" height="30px" stroke={theme ? '#ffffff' : '#000000'} />
                    </Button>
                </Box>
                <Box sx={{ p: 2, background: 'linear-gradient(#45AAB8, #4565B8)' }}>
                    <img
                        src={PDFImage}
                        alt="Resume"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
            </Container>
        </Container>
    );
};

export default Experience;
