import { FC } from "react";
import Footer, { TypeColorFooter } from "./globals/footer";
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Theme } from "../themes/themes";
import { Stack } from "@mui/system";

interface LayoutProps {
    footerColor?: TypeColorFooter;
    children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children, footerColor }) => {
    return (
        <ThemeProvider theme={Theme}>
            <CssBaseline enableColorScheme />
            
            <Stack justifyContent="space-between" height="100vh">
                <main style={{ marginTop: "56px" }}>{children}</main>
                <Footer colorStyle={footerColor} />
            </Stack>
        </ThemeProvider>
    );
}

export default Layout;