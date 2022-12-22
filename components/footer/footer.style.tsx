import styled from "@emotion/styled";
import { Container, Button, Divider, Stack } from "@mui/material";
import { CustomTheme } from "theme";

export const ContainerFooterStyled = styled('footer')`
    background-color: #29746E;

    a {
        text-decoration: none;
    }
`;

export const SpacingFooterStyled = styled(Container)`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: ${(props) => (props.theme as CustomTheme).spacing(4)};
`;

export const BackTopButtonStyled = styled(Button)`
    align-self: center;
    font-weight: ${(props) => (props.theme as CustomTheme).typography.fontWeightMedium};
    color: ${(props) => (props.theme as CustomTheme).palette.tertiary.main};
    padding: ${(props) => (props.theme as CustomTheme).spacing(0, 1)};
`;

export const BackTopDividerStyled = styled(Divider)`
    height: 2px;
    background-color: ${(props) => (props.theme as CustomTheme).palette.tertiary.main}
`;

export const PagesHelpStackStyled = styled(Stack)`
    justify-content: space-around;
    text-decoration: none;
    margin-Top: ${(props) => (props.theme as CustomTheme).spacing(2)};
`;