import { createTheme } from "@mui/material";
import { textTheme } from "./textTheme";

export const lightTheme = createTheme({
    ...textTheme,
    palette: {
        background: {
            default: "#ffffff"
        },
        text: {
            primary: "#525252"
        }
    },
});