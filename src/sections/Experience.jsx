import { useContext } from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import ThemeContext from '../theme/ThemeContext';
import ExternalLinkIcon from '../icons/ExternalLinkIcon';
import PDF from '../../static/Resume - Owen Sellner.pdf';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Experience() {

    const { theme } = useContext(ThemeContext);

    return (
        <Container sx={{ py: 20 }}>
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
                <Document file={PDF} >
                    <Page pageNumber={1} />
                </Document>
            </Container>
        </Container>
    );
};

export default Experience;
