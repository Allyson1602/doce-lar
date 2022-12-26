import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

import { BackTopButtonStyled, BackTopDividerStyled, ContainerFooterStyled, ContentPagesHelpStackStyled, ContentSocialStackStyled, DocsStackStyled, GroupSocialStackStyled, PagesHelpStackStyled, SpacingFooterStyled, TitleSocialTypographyStyled } from "./footer.style";

export const Footer: FC = () => {

    const backTop = () => {
       window.scrollTo(0,0);
    };

    return (
        <ContainerFooterStyled>
            <SpacingFooterStyled>
                <ContentPagesHelpStackStyled width="100%">
                    <BackTopButtonStyled onClick={backTop}>voltar para o topo</BackTopButtonStyled>

                    <BackTopDividerStyled variant="middle" />

                    <PagesHelpStackStyled direction="row">
                        <Link href="">
                            <Typography
                                sx={{ typography: {xs: "phoneTextMedium", md: "desktopTextMedium"} }}
                                color="white"
                            >Sobre nós</Typography>
                        </Link>

                        <Link href="">
                            <Typography
                                sx={{ typography: {xs: "phoneTextMedium", md: "desktopTextMedium"} }}
                                color="white"
                            >Dúvidas frequentes</Typography>
                        </Link>
                    </PagesHelpStackStyled>
                </ContentPagesHelpStackStyled>

                <ContentSocialStackStyled>
                    <TitleSocialTypographyStyled
                        sx={{ typography: {xs: "phoneTextMedium", md: "desktopTextMedium"} }}
                    >Redes sociais</TitleSocialTypographyStyled>
                    
                    <BackTopDividerStyled
                        sx={{
                            width: "70px",
                        }}
                    />

                    <GroupSocialStackStyled direction="row" justifyContent="center" gap={2}>
                        <a href="https://www.facebook.com/allyson.athyrson" target="_blank" rel="noreferrer">
                            <FacebookLogo size={32} />
                        </a>

                        <a href="https://www.instagram.com/allysonathyrson/" target="_blank" rel="noreferrer">
                            <InstagramLogo size={32} />
                        </a>

                        <a href="https://www.linkedin.com/in/allyson-athyrson-487461109/" target="_blank" rel="noreferrer">
                            <LinkedinLogo size={32} />
                        </a>
                    </GroupSocialStackStyled>
                </ContentSocialStackStyled>

                <DocsStackStyled>
                    <Link href="">
                        <Typography
                            sx={{ typography: {xs: "phoneTextMedium", md: "desktopTextMedium"} }}
                            color="white"
                            textAlign="center"
                        >Termo de uso</Typography>
                    </Link>
                    <Link href="">
                        <Typography
                            sx={{ typography: {xs: "phoneTextMedium", md: "desktopTextMedium"} }}
                            color="white"
                            textAlign="center"
                        >Política de tratamento de dados</Typography>
                    </Link>
                </DocsStackStyled>

                <Box className="copyright">
                    <Typography
                        sx={{ typography: {xs: "phoneTextSmall", md: "desktopTextSmall"} }}
                        color="white"
                        textAlign="center"
                    >Copyright 2022 Allyson Athyrson. Todos os direitos reservados.</Typography>
                    <Typography
                        sx={{ typography: {xs: "phoneTextSmall", md: "desktopTextSmall"} }}
                        color="white"
                        textAlign="center"
                    >Brasília - Distrito Federal</Typography>
                </Box>
            </SpacingFooterStyled>
        </ContainerFooterStyled>
    );
};
