import { FC } from "react";
import { CopyrightStyled, DividerBackTopStyled, FooterStyled, GroupSocialsStyled, LinkBackTopStyled, LinksStyled, MoreLinksStyled, TitleSocial, DocsStyled } from "../../styles/components/globals/footer";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";

export enum TypeColorFooter {
    Primary = "primary",
    Secondary = "secondary"
}

interface FooterProps {
    colorStyle?: TypeColorFooter;
}

const Footer: FC<FooterProps> = ({ colorStyle }) => {
    const color = colorStyle || TypeColorFooter.Primary;

    const goToTop = () => {
       window.scrollTo(0,0);
    };

    return (
        <FooterStyled color={color}>
            <Container>
                <Stack direction="row" justifyContent="center">
                    <LinkBackTopStyled onClick={goToTop}>voltar para o topo</LinkBackTopStyled>
                </Stack>

                <MoreLinksStyled>
                    <DividerBackTopStyled />

                    <LinksStyled direction="row" justifyContent="space-between">
                        <Link href="">Dúvidas frequentes</Link>

                        <Link href="">Sobre nós</Link>
                    </LinksStyled>
                </MoreLinksStyled>

                <Stack>
                    <TitleSocial align="center">Redes sociais</TitleSocial>

                    <GroupSocialsStyled>
                        <DividerBackTopStyled />
                        
                        <Stack direction="row" justifyContent="center" gap={2}>
                            <a href="https://www.facebook.com/allyson.athyrson" target="_blank" rel="noreferrer">
                                <FacebookIcon />
                            </a>

                            <a href="https://www.instagram.com/allysonathyrson/" target="_blank" rel="noreferrer">
                                <InstagramIcon />
                            </a>

                            <a href="https://www.linkedin.com/in/allyson-athyrson-487461109/" target="_blank" rel="noreferrer">
                                <LinkedInIcon />
                            </a>
                        </Stack>
                    </GroupSocialsStyled>
                </Stack>

                <DocsStyled>
                    <Link href="">Termo de uso</Link>
                    <Link href="">Política de tratamento de dados</Link>
                </DocsStyled>

                <CopyrightStyled className="copyright">
                    <Typography className="copyright_text" textAlign="center">Copyright 2022 Allyson Athyrson. Todos os direitos reservados.</Typography>
                    <Typography className="copyright_text" textAlign="center">Brasília - Distrito Federal</Typography>
                </CopyrightStyled>
            </Container>
        </FooterStyled>
    );
}

export default Footer;
