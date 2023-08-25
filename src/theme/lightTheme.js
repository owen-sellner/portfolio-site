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
    },
});