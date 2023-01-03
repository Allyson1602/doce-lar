import styled from "@emotion/styled";
import { Toolbar, Button, Divider, Stack, Box, Typography } from "@mui/material";
import { CustomTheme } from "theme";

export const ContainerNavbarBoxStyled = styled(Box)`
    flex-grow: 1;
`;

export const ToolbarStyled = styled(Toolbar)`
    width: 100%;
    max-width: 600px;
    margin: 0 auto;

    justify-content: space-between;
`;

export const RentButtonStyled = styled(Button)`
    color: ${props => (props.theme as CustomTheme).palette.commom.white};
    background: linear-gradient(to right, #00A6FB, #7DDCD3);
    padding: ${props => (props.theme as CustomTheme).spacing(0.2, 3)};
`;
