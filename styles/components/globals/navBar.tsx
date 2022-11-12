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
    padding: ${props => (props.theme as ITheme).spacing(0.2, 3)};
`;

export const TitleStyled = styled(Typography)`

`;
