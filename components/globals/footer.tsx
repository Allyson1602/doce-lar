import { FC } from "react";
import { FooterStyled } from "../../styles/components/globals/footer";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
            <Box>
                <Link href="">
                    <a>voltar para o topo</a>
                </Link>
                <Divider />
            </Box>

            <Stack>
                <Link href="">
                    <a>Sobre nós</a>
                </Link>
                
                <Link href="">
                    <a>Dúvidas frequentes</a>
                </Link>
            </Stack>

            <Stack>
                <Typography>Redes sociais</Typography>
                <Divider />
                <Stack>
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

            <Box>
                <Link href="">
                    <a>Termo de uso</a>
                </Link>
                <Link href="">
                    <a>Política de tratamento de dados</a>
                </Link>
            </Box>

            <Box>
                <Typography>Copyright © 2022 Allyson Athyrson. Todos os direitos reservados.</Typography>
                <Typography>Brasília - Distrito Federal</Typography>
            </Box>
        </FooterStyled>
    );
}

export default Footer;
