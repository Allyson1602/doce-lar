import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import { BackTopButtonStyled, BackTopDividerStyled, ContainerFooterStyled, GroupSocialBoxStyled, PagesHelpStackStyled, SpacingFooterStyled } from "./footer.style";

export const Footer: FC = () => {

    const backTop = () => {
       window.scrollTo(0,0);
    };

    return (
        <ContainerFooterStyled>
            <SpacingFooterStyled>
                <Stack width="100%">
                    <BackTopButtonStyled onClick={backTop}>voltar para o topo</BackTopButtonStyled>

                    <BackTopDividerStyled variant="middle" />

                    <PagesHelpStackStyled direction="row">
                        <Link href="">
                            <Typography
                                sx={{ typography: {xs: "phoneTextMedium", md: "desktopTextMedium"} }}
                                color="white"
                            >Sobre nós</Typography>
                        </Link>

                        <Link href=""><Typography variant="phoneTextMedium" color="white">Dúvidas frequentes</Typography></Link>
                    </PagesHelpStackStyled>
                </Stack>

                <Stack>
                    <Typography
                        sx={{ typography: {xs: "phoneTextMedium", md: "desktopTextMedium"} }}
                        align="center"
                    >Redes sociais</Typography>
                    
                    <BackTopDividerStyled />

                    <GroupSocialBoxStyled>
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
                    </GroupSocialBoxStyled>
                </Stack>

                {/* 

                <DocsStyled>
                    <Link href="">Termo de uso</Link>
                    <Link href="">Política de tratamento de dados</Link>
                </DocsStyled>

                <CopyrightStyled className="copyright">
                    <Typography className="copyright_text" textAlign="center">Copyright 2022 Allyson Athyrson. Todos os direitos reservados.</Typography>
                    <Typography className="copyright_text" textAlign="center">Brasília - Distrito Federal</Typography>
                </CopyrightStyled> */}
            </SpacingFooterStyled>
        </ContainerFooterStyled>
    );
};
