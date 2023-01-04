import { AppBar, Link } from "@mui/material";
import { FC } from "react";
import Image from "next/image";

import { ContainerNavbarBoxStyled, RentButtonStyled, TitleTypographyStyled, ToolbarStyled } from "./navbar.style";
import { INavbarProps } from "interfaces/components";
import Logo from "../../public/favicon.ico";

export const Navbar: FC<INavbarProps> = ({ hasTitle }) => {

    return (
        <ContainerNavbarBoxStyled>
          <AppBar position="static" color="inherit">
            <ToolbarStyled>
              <Image src={Logo} alt="logo do sistema" width={29} height={29} />

              {
                hasTitle
                ? <TitleTypographyStyled
                    data-testid="title"
                    variant="phoneTextLarge"
                  >{hasTitle}</TitleTypographyStyled>
                : <RentButtonStyled
                    data-testid="button"
                    variant="contained"
                    LinkComponent={Link}
                    href="/rent/new"
                  >alugar</RentButtonStyled>
              }
              
            </ToolbarStyled>
          </AppBar>
        </ContainerNavbarBoxStyled>
    );
};
