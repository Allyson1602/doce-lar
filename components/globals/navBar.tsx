import { FC } from "react";
import { Toolbar } from "@mui/material";
import Logo from "../../public/logo.png";

import { ButtonRentStyled, NavBarStyled } from "../../styles/components/globals/navBar";
import Image from "next/image";

interface NavBarProps {
    rent?: boolean;
    title?: string;
    // menu: boolean;
}

const NavBar: FC<NavBarProps> = ({ rent, title }) => {
    const rentButton = rent || true;

    return (
        <NavBarStyled color="default">
            <Toolbar>
                <Image src={Logo} alt="logo do sistema" />

                <ButtonRentStyled>alugar</ButtonRentStyled>
            </Toolbar>
        </NavBarStyled>
    );
}

export default NavBar;
