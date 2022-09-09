import { FC } from "react";
import { FooterStyled } from "../../styles/components/globals/footer";

export enum TypeColorFooter {
    Primary = "primary",
    Secondary = "secondary"
}

interface FooterProps {
    colorStyle?: TypeColorFooter;
}

const Footer: FC<FooterProps> = ({ colorStyle }) => {
    const color = colorStyle || TypeColorFooter.Primary;

    return (
        <FooterStyled color={color}>
        
        </FooterStyled>
    );
}

export default Footer;
