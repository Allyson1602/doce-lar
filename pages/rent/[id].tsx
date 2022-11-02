import { Box, Button, Chip, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Ruler, ShareNetwork } from "phosphor-react";
import { ReactElement } from "react";
import Carousel from "../../components/carousel";
import { TypeColorFooter } from "../../components/globals/footer";
import NavBar from "../../components/globals/navBar";
import Layout from "../../components/layout";
import { NextPageWithLayout } from "../_app";

const Rent: NextPageWithLayout = () => {
    const router = useRouter()
    const { id } = router.query;
    
    return (
		<Box sx={{
			height: "100%",
			background: "#CBF3F0"
		}}>
			<Box>
				<Box>
					<Typography>Apartamento com 3 Quartos à venda, 75m² - Jabotiana</Typography>
					<Box>
						<Divider />
						<Chip label="promoção" />
					</Box>

					<Typography>Rua Alfredo José Pinto, 1680 - Fazendinha, Curitiba - PR</Typography>

					<Box sx={{
						height: "200px"
					}}></Box>

					<Stack direction="row">
						<Typography>253 visualizações</Typography>
						<IconButton>
							<ShareNetwork size={32} />
						</IconButton>
					</Stack>
				</Box>

				<Box>
					<Carousel images={["", ""]} />
				</Box>
			</Box>
			
			<Divider orientation="vertical" />

			<Box>
				<Stack direction="row">
					<Typography>R$1.500</Typography>
					<Typography><Ruler size={32} />144m²</Typography>
				</Stack>

				<Stack>
					<Box>
						<Typography>2 quartos</Typography>
						<Typography>2 quartos</Typography>
						<Typography>2 quartos</Typography>
					</Box>
					
					<Box>
						<Typography>2 quartos</Typography>
						<Typography>2 quartos</Typography>
						<Typography>2 quartos</Typography>
					</Box>
				</Stack>

				<Button>mais características</Button>
			</Box>

			<Box>
				<Typography>Descrição:</Typography>
				<Typography>O projeto do High Design traz uma integração perfeita entre os ambientes, sem barreiras visuais. As unidades de alto padrão têm 4 quartos (4 suítes) e vão de 184,01m² a 246,25m², enquanto as coberturas duplex vão de 360,96m² a 493,87m². O resultado é o maior vão de sala existente no Noroeste e apartamentos realmente vazados, com uma ventilação cruzada espetacular. A amplitude, a inexistência de pilares entre a varanda e a sala, a cozinha gourmet em ilha e o mundo de possibilidades de uso do espaço resultam numa sofisticação inigualável, que faz toda a diferença no dia a dia e ao receber amigos.</Typography>
			</Box>

			<Box>
				mapa
			</Box>
		</Box>
    );
};

Rent.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout footerColor={TypeColorFooter.Secondary}>
      <>
        <NavBar />
        {page}
      </>
    </Layout>
  );
}

export default Rent;