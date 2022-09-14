import { createTheme } from "@mui/material";

export interface ITheme {
    palette: {
        primary: {
            main: string;
        },
        secondary: {
            main: string;
        }
    }
}

export const Theme = createTheme({
    palette: {
        primary: {
            main: "#FFA941"
        },
        secondary: {
            main: "#2EC4B6",
            light: "#CBF3F0"
        }
    },
});