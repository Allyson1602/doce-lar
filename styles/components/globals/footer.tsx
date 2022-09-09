import styled from "@emotion/styled";
import { TypeColorFooter } from "../../../components/globals/footer";

interface FooterStyledProps {
    color: TypeColorFooter;
}

// Criar arquivo de themes
export const FooterStyled = styled.footer`
    color: ${
        ({ color }: FooterStyledProps) => color === TypeColorFooter.Primary ? "#CBF3F0" : "#FFF"
    };
`;
