import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { TypeColorFooter } from "../../../components/globals/footer";
import { ITheme } from "../../../themes/themes";

interface FooterStyledProps {
    color: TypeColorFooter;
}

export const FooterStyled = styled.footer`
    background-color: ${
        ({ color }: FooterStyledProps) => color === TypeColorFooter.Primary ? "#CBF3F0" : "#FFF"
    };
`;

export const CopyrightStyled = styled(Box)`
    .copyright_text {
        font-size: ${props => (props.theme as ITheme).typography.fontSize - 2 + 'px'};
    };
`;