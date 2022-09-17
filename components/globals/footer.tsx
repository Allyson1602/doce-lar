import { FC } from "react";
import { CopyrightStyled, FooterStyled } from "../../styles/components/globals/footer";
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

    return (
        <FooterStyled color={color}>
            <Container>
                <Stack direction="row" justifyContent="center">
                    <Link href="" as="a">voltar para o topo</Link>
                </Stack>

                <Divider />

                <Stack direction="row" justifyContent="space-evenly">
                    <Link href="" as="a">Sobre nós</Link>
                    
                    <Link href="" as="a">Dúvidas frequentes</Link>
                </Stack>

                <Stack>
                    <Typography align="center">Redes sociais</Typography>
                    <Divider />
                    <Stack direction="row" justifyContent="center">
                        <Link href="">
                            <FacebookIcon />
                        </Link>

                        <Link href="">
                            <InstagramIcon />
                        </Link>

                        <Link href="">
                            <LinkedInIcon />
                        </Link>
                    </Stack>
                </Stack>

                <Stack>
                    <Link href="" as="a">Termo de uso</Link>
                    <Link href="" as="a">Política de tratamento de dados</Link>
                </Stack>

                <CopyrightStyled className="copyright">
                    <Typography className="copyright_text" textAlign="center">Copyright Styled© 2022 Allyson Athyrson. Todos os direitos reservados.</Typography>
                    <Typography className="copyright_text" textAlign="center">Brasília - Distrito Federal</Typography>
                </CopyrightStyled>
            </Container>
        </FooterStyled>
    );
}

export default Footer;
