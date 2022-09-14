import { NextPage } from "next";
import { AppProps } from "next/app";
import { FC } from "react";
import Footer from "./globals/footer";
import NavBar from "./globals/navBar";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Theme } from "../themes/themes";

interface LayoutProps {
    children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />
            
            <NavBar />
            <main>{children}</main>
            <Footer />
        </ThemeProvider>
    );
}

export default Layout;