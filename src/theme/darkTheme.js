import { createTheme } from "@mui/material";
import { textTheme } from "./textTheme";

export const darkTheme = createTheme({
    ...textTheme,
    palette: {
        background: {
            default: "#000000"
        },
        text: {
            primary: "#ffffff"
        }
    },
});