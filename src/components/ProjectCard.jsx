import { Box, IconButton, Typography } from "@mui/material";
import ThemeContext from "../theme/ThemeContext";
import { useContext } from "react";
import GitHubIcon from "../icons/GitHubIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import ProjectCardItem from "./ProjectCardItem";


function ProjectCard({ project }) {

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
                <Box sx={{ mx: 2, mt: 1 }}>
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
                    <Typography variant="projectCardTitle">
                        {project.title}
                    </Typography>
                    <Typography variant="projectCardDescription">
                        Description of the project and what it does. Description of the project and what it does.
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