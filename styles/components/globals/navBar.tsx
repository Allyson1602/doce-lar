import styled from "@emotion/styled";
import { AppBar, Button } from "@mui/material";
import { ITheme } from "../../../themes/themes";

export const NavBarStyled = styled(AppBar)`

`;

export const ButtonRentStyled = styled(Button)`
    background: ${props => (props.theme as ITheme).palette}
`;
