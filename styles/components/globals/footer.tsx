import styled from "@emotion/styled";
import { Box, Divider, Stack, Typography, Button } from "@mui/material";
import { TypeColorFooter } from "../../../components/globals/footer";
import { ITheme } from "../../../themes/themes";

interface FooterStyledProps {
    color: TypeColorFooter;
}

export const FooterStyled = styled.footer`
    font-size: ${props => (props.theme as ITheme).typography.fontSize + 'px'};
    background-color: ${
        ({ color }: FooterStyledProps) => color === TypeColorFooter.Primary ? "#CBF3F0" : "#FFF"
    };

    a:hover {
        text-decoration: underline;
    }
`;

export const LinkBackTopStyled = styled(Button)`
    height: 30px;
    margin-top: ${(props) => (props.theme as ITheme).spacing(1)};
    color: ${(props) => (props.theme as ITheme).palette.secondary.main};
    padding: ${(props) => (props.theme as ITheme).spacing(0, 1)};
`;

export const DividerBackTopStyled = styled(Divider)`
    height: 2px;
    background-color: ${(props) => (props.theme as ITheme).palette.secondary.main}
`;

export const MoreLinksStyled = styled(Stack)`
    margin: ${(props) => (props.theme as ITheme).spacing(0, 4)}
`;

export const LinksStyled = styled(Stack)`
    margin: ${(props) => (props.theme as ITheme).spacing(6, 0)};
`;

export const TitleSocial = styled(Typography)`
    font-size: ${props => (props.theme as ITheme).typography.fontSize - 2 +'px'};
`;

export const GroupSocialsStyled = styled(Box)`
    font-size: ${props => (props.theme as ITheme).typography.fontSize - 2 +'px'};

    svg {
        font-size: 3rem;
    };
    svg:hover {
        color: ${props => (props.theme as ITheme).palette.secondary.main};
    };

    hr {
        width: 170px;
        margin: 0 auto .5em;
    }
`;

export const DocsStyled = styled(Stack)`
    margin: ${(props) => (props.theme as ITheme).spacing(6, 4, 4)};
`;

export const CopyrightStyled = styled(Box)`
    .copyright_text {
        font-size: ${props => (props.theme as ITheme).typography.fontSize - 2 + 'px'};
    };
`;
