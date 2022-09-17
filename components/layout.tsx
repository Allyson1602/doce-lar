import { FC } from "react";
import Footer from "./globals/footer";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Theme } from "../themes/themes";
import { Stack } from "@mui/system";

interface LayoutProps {
    children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />
            
            <Stack justifyContent="space-between" height="100vh">
                <main>{children}</main>
                <Footer />
            </Stack>
        </ThemeProvider>
    );
}

export default Layout;