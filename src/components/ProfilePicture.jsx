import { Box, useMediaQuery, useTheme } from "@mui/material";
import ThemeContext from "../theme/ThemeContext";
import { useContext } from "react";
import ProfilePic from '../../static/profile-picture.png';



function ProfilePicture() {

    const { theme } = useContext(ThemeContext);

    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    const INNER_SIZE = isMobile ? '16em' : '20em';

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 2,
                    background: 'linear-gradient(#45AAB8, #4565B8)'
                }}
            >
                <img
                    src={ProfilePic}
                    alt="Profile Picture"
                    style={{ width: INNER_SIZE, height: INNER_SIZE }}
                />
            </Box>
        </Box >
    );
};

export default ProfilePicture;