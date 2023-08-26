import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        background: {
            default: "#ffffff"
        },
        text: {
            primary: "#525252"
        }
    },
    typography: {
        fontFamily: 'Verdana, Helvetica',
        navText: {
            fontSize: 25,
            fontWeight: 600,
        },
        title : {
            fontSize: 75,
            fontWeight: 600,
        },
        subtitle : {
            fontSize: 30,
            fontWeight: 600,
        },
        heading : {
            fontSize: 60,
            fontWeight: 600,
        },
    },
});