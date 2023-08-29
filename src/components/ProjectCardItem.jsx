import { Box, Typography } from "@mui/material";

function ProjectCardItem({ color, text }) {
    return (
        <Box
            sx={{
                backgroundColor: color,
                px: 2,
                py: 1,
                mr: 1,
                mb: 1,
                borderRadius: 30, 
                display: 'inline-flex',
                alignItems: 'center', 
            }}
        >
            <Typography variant="projectCardItem" sx={{ color: '#ffffff' }}>
                {text}
            </Typography>
        </Box>
    );
};

export default ProjectCardItem;
