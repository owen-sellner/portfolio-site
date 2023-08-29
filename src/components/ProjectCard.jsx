import { Box, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import ThemeContext from "../theme/ThemeContext";
import { useContext } from "react";
import GitHubIcon from "../icons/GitHubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import ProjectCardItem from "./ProjectCardItem";


function ProjectCard({ project }) {

    const { theme } = useContext(ThemeContext);

    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    const INNER_HEIGHT = isMobile ? 'auto' : '24em';
    const INNER_WIDTH = isMobile ? '18em' : '24em';

    const BACKGROUND = theme ? '#000000' : '#ffffff';
    const THEME_COLOUR = theme ? '#ffffff' : '#000000';

    const ICON_SIZE = '27px';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                p: 2,
                background: 'linear-gradient(#45AAB8, #4565B8)'
            }}
        >
            <Box sx={{ height: INNER_HEIGHT, width: INNER_WIDTH, background: BACKGROUND }}>
                <Box sx={{ m: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography flexGrow={1} variant="largeText">
                            {project.year}
                        </Typography>
                        {project.figma &&
                            <IconButton href={project.figma} target="_blank" style={{ background: 'transparent' }}>
                                <GitHubIcon width={ICON_SIZE} height={ICON_SIZE} fill={THEME_COLOUR} />
                            </IconButton>
                        }
                        {project.github &&
                            <IconButton href={project.github} target="_blank" style={{ background: 'transparent' }}>
                                <GitHubIcon width={ICON_SIZE} height={ICON_SIZE} fill={THEME_COLOUR} />
                            </IconButton>
                        }
                        {project.demo &&
                            <IconButton href={project.demo} target="_blank" style={{ background: 'transparent' }}>
                                <ExternalLinkIcon width={ICON_SIZE} height={ICON_SIZE} stroke={THEME_COLOUR} />
                            </IconButton>
                        }
                    </Box>
                    <Typography variant="projectCardTitle" sx={{ my: 1 }}>
                        {project.title}
                    </Typography>
                    <Typography variant="projectCardDescription" sx={{ my: 1 }}>
                        {project.description}
                    </Typography>
                    {project.languages.length > 0 &&
                        <>
                            <Typography variant="projectCardSubtitle" sx={{ my: 1 }}>
                                Languages:
                            </Typography>
                            {project.languages.map((language) =>
                                <ProjectCardItem color={'#45AAB8'} text={language} />
                            )}
                        </>
                    }
                    {project.frameworks.length > 0 &&
                        <>
                            <Typography variant="projectCardSubtitle" sx={{ my: 1 }}>
                                Frameworks:
                            </Typography>
                            {project.frameworks.map((framework) =>
                                <ProjectCardItem color={'#4565B8'} text={framework} />
                            )}
                        </>
                    }
                </Box>
            </Box>
        </Box >
    );
};

export default ProjectCard;