import { FC } from "react";
import { Toolbar } from "@mui/material";
import Logo from "../../public/logo.png";

import { ButtonRentStyled, NavBarStyled, TitleStyled, ToolbarStyled } from "../../styles/components/globals/navBar";
import Image from "next/image";

interface NavBarProps {
    rent?: boolean;
    title?: string;
    // menu: boolean;
}

const NavBar: FC<NavBarProps> = ({ rent, title }) => {
    const rentButton = rent !== undefined ? rent : true;

    return (
        <NavBarStyled color="default">
            <ToolbarStyled>
                <Image src={Logo} alt="logo do sistema" />

                {rentButton && <ButtonRentStyled>alugar</ButtonRentStyled>}

                {title && <TitleStyled>{title}</TitleStyled>}
            </ToolbarStyled>
        </NavBarStyled>
    );
}

export default NavBar;
