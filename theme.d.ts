import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        tertiary: {
            main: string;
            light: string;
        };
    }
    // allow configuration using `createTheme`
    interface CustomTheme extends Theme {
        tertiary?: {
            main?: string;
            light?: string;
        };
    }

    export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
