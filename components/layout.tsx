import { NextPage } from "next";
import { AppProps } from "next/app";
import { FC } from "react";
import NavBar from "./globals/navBar";

interface LayoutProps {
    children: JSX.Element;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;