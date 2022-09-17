import { FC } from "react";
import Footer from "./globals/footer";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Theme } from "../themes/themes";

interface LayoutProps {
    children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />
            
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    );
}

export default Layout;