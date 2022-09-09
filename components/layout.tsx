import { NextPage } from "next";
import { AppProps } from "next/app";
import { FC } from "react";

interface LayoutProps {
    children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        // <Navbar />
        <main>{children}</main>
        // <Footer />
    );
}

export default Layout;