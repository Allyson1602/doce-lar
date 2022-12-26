import styled from "@emotion/styled";
import { Container, Button, Divider, Stack, Box, Typography } from "@mui/material";
import { CustomTheme } from "theme";

export const ContainerFooterStyled = styled('footer')`
    background-color: #29746E;
    height: 400px;
`;

export const SpacingFooterStyled = styled(Container)`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: ${(props) => (props.theme as CustomTheme).spacing(4)};
`;

export const ContentPagesHelpStackStyled = styled(Stack)`
    width: 500px;
`;

export const BackTopButtonStyled = styled(Button)`
    align-self: center;
    font-weight: ${(props) => (props.theme as CustomTheme).typography.fontWeightBold};
    color: ${(props) => (props.theme as CustomTheme).palette.tertiary.main};
    padding: ${(props) => (props.theme as CustomTheme).spacing(0, 1)};
    margin-bottom: ${(props) => (props.theme as CustomTheme).spacing(0.5)};
`;

export const BackTopDividerStyled = styled(Divider)`
    height: 2px;
    background-color: ${(props) => (props.theme as CustomTheme).palette.tertiary.main}
`;

export const PagesHelpStackStyled = styled(Stack)`
    justify-content: space-around;
    text-decoration: none;
    align-items: flex-end;
    margin-Top: ${(props) => (props.theme as CustomTheme).spacing(2)};

    a {
        text-decoration: none;
    }
`;

export const ContentSocialStackStyled = styled(Stack)`
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`;

export const TitleSocialTypographyStyled = styled(Typography)`
    text-align: center;
    color: ${(props) => (props.theme as CustomTheme).palette.commom.white};
    margin-bottom: ${(props) => (props.theme as CustomTheme).spacing(0.5)};
`;

export const GroupSocialStackStyled = styled(Stack)`
    margin-top: ${(props) => (props.theme as CustomTheme).spacing(1)};

    a {
        color: ${(props) => (props.theme as CustomTheme).palette.commom.white};
    }

    a:hover {
        color: ${(props) => (props.theme as CustomTheme).palette.tertiary.main};
    };
`;

export const DocsStackStyled = styled(Stack)`
    margin-bottom: ${(props) => (props.theme as CustomTheme).spacing(2)};

    a {
        color: ${(props) => (props.theme as CustomTheme).palette.commom.white};
    }

    a:hover {
        color: ${(props) => (props.theme as CustomTheme).palette.tertiary.main};
    };
`;
