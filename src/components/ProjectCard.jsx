import { Box, IconButton, Typography } from "@mui/material";
import ThemeContext from "../theme/ThemeContext";
import { useContext } from "react";
import GitHubIcon from "../icons/GitHubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";


function ProjectCard() {

    const { theme } = useContext(ThemeContext);

    const BACKGROUND = theme ? '#000000' : '#ffffff';

    const THEME_COLOUR = theme ? '#ffffff' : '#000000';

    const ICON_SIZE = '27px';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '22em',
                width: '22em',
                background: 'linear-gradient(#45AAB8, #4565B8)'
            }}
        >
            <Box sx={{ height: '20em', width: '20em', background: BACKGROUND }}>
                <Box sx={{ m: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography flexGrow={1} variant="largeText">
                            2023
                        </Typography>
                        <IconButton style={{ background: 'transparent' }}>
                            <GitHubIcon width={ICON_SIZE} height={ICON_SIZE} fill={THEME_COLOUR} />
                        </IconButton>
                        <IconButton style={{ background: 'transparent' }}>
                            <GitHubIcon width={ICON_SIZE} height={ICON_SIZE} fill={THEME_COLOUR} />
                        </IconButton>
                        <IconButton style={{ background: 'transparent' }}>
                            <ExternalLinkIcon width={ICON_SIZE} height={ICON_SIZE} stroke={THEME_COLOUR} />
                        </IconButton>
                    </Box>
                    <Typography variant="projectCardTitle">
                        Portfolio Site
                    </Typography>
                    <Typography variant="projectCardDescription">
                        Description of the project and what it does. Description of the project and what it does.
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        <Typography variant="projectCardSubtitle">
                            Languages:
                        </Typography>
                        <Typography variant="projectCardSubtitle">
                            Frameworks:
                        </Typography>
                    </Box>

                </Box>
            </Box>
        </Box>
    );
};

export default ProjectCard;