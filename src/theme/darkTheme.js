import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        background: {
            default: "#000000"
        },
        text: {
            primary: "#ffffff"
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