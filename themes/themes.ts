import { createTheme } from "@mui/material";
import { Theme as ThemeMui } from "@mui/system/createTheme/createTheme";

export interface ITheme extends ThemeMui {
    typography: {
        fontSize: number;
        button: {
            textTransform: string;
        };
        fontFamily: string;
    };
    palette: {
        mode: 'light' | 'dark';
        common: {
            black: string;
            white: string;
        };
        primary: {
            main: string;
            contrastText: string;
        };
        secondary: {
            main: string;
            light: string;
        };
    }
}

export const Theme = createTheme({
    palette: {
        primary: {
            main: "#FFA941",
            contrastText: "#FFFFFF"
        },
        secondary: {
            main: "#2EC4B6",
            light: "#CBF3F0"
        }
    },
    typography: {
        button: {
            textTransform: "none"
        },
        fontFamily: "Poppins, Roboto, Helvetica, Arial, sans-serif",
    }
});