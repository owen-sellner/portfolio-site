import { useContext, useState } from 'react';
import ThemeContext from '../theme/ThemeContext';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import compassIcon from '../icons/compass.svg';
import MenuIcon from '../icons/MenuIcon';
import NavLinks from './NavLinks';
import NavDrawer from './NavDrawer';

function NavBar() {

    const { theme } = useContext(ThemeContext);

    const BACKGROUND = theme ? '#000000E6' : '#ffffffE6';

    const isMobile = useMediaQuery(useTheme().breakpoints.down("sm"));

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Box sx={{ height: '6em', display: 'flex' }}>
                {isMobile ?
                    <Box
                        style={{ zIndex: 99999 }}
                        sx={{
                            position: 'fixed',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: BACKGROUND,
                            py: 1,
                            px: 3
                        }}
                    >
                        <img src={compassIcon} style={{ width: '50px', height: '50px' }} />
                        <IconButton onClick={toggleOpen}>
                            <MenuIcon stroke={theme ? '#ffffff' : '#525252'} />
                        </IconButton>
                        <NavDrawer isOpen={isOpen} toggleOpen={toggleOpen} />
                    </Box>
                    :
                    <Box
                        style={{ zIndex: 99999 }}
                        sx={{
                            position: 'fixed',
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            backgroundColor: BACKGROUND,
                            py: 2
                        }}
                    >
                        <img src={compassIcon} style={{ width: '70px', height: '70px' }} />
                        <NavLinks />
                    </Box>
                }
            </Box>
        </>
    );
};

export default NavBar;
