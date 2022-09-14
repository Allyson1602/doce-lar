import styled from "@emotion/styled";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { ITheme } from "../../../themes/themes";

export const NavBarStyled = styled(AppBar)`

`;

export const ToolbarStyled = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

export const ButtonRentStyled = styled(Button)`
    background: ${props => (props.theme as ITheme).palette.primary.main};
    color: ${props => (props.theme as ITheme).palette.primary.contrastText};
    padding: ${props => (props.theme as ITheme).spacing(0.2, 3)};
`;

export const TitleStyled = styled(Typography)`

`;
