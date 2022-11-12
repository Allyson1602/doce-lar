import { Box, Button, Link, Divider, IconButton, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { Ruler, ShareNetwork, WhatsappLogo, ArrowLeft } from "phosphor-react";
import { ReactElement } from "react";
import Carousel from "../../components/carousel";
import { TypeColorFooter } from "../../components/globals/footer";
import NavBar from "../../components/globals/navBar";
import Layout from "../../components/layout";
import Map from "../../components/map/map";
import { AddressMainInfosStyled, ButtonsContactRentStyled, ContentCarouselStyled, ContentRentDescriptionStyled, ContentRentMapStyled, DividerFlagStyled, DividerStyled, FlagRentStyled, MainInfosStyled, MainRentStyled, PositionCarouselStyled, RentDividerStyled, RentGradientMapStyled, RentPlaceInfosBodyStyled, RentPlaceInfosHeaderStyled, RentPlaceInfosStyled, RentStyled, TextRentDescriptionStyled, TitleMainInfosStyled, ViewsStyled } from "../../styles/pages/rent/rent";
import { NextPageWithLayout } from "../_app";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Rent: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query;
    
    return (
		<RentStyled>
			<ButtonsContactRentStyled
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<IconButton size="large"><ArrowLeft size={22} /></IconButton>

				<Button
					size="small"
					color="secondary"
					variant="contained"
					className="button-whatsapp"
				><WhatsappLogo size={22} /> whatsapp</Button>

				<Button
					size="small"
					color="secondary"
					variant="contained"
				>contato</Button>
			</ButtonsContactRentStyled>

			<MainRentStyled>
				<MainInfosStyled>
					<TitleMainInfosStyled variant="body1">Apartamento com 3 Quartos à venda, 75m² - Jabotiana</TitleMainInfosStyled>
					<DividerFlagStyled>
						<DividerStyled variant="middle" />
						<FlagRentStyled color="secondary" size="small" label="promoção" />
					</DividerFlagStyled>

					<AddressMainInfosStyled variant="overline">Rua Alfredo José Pinto, 1680 - Fazendinha, Curitiba - PR</AddressMainInfosStyled>


					<ContentCarouselStyled>
						<PositionCarouselStyled>
							<Carousel images={["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"]} />
						</PositionCarouselStyled>
					</ContentCarouselStyled>

					<Stack direction="row" justifyContent="space-between" alignItems="center">
						<ViewsStyled>253 visualizações</ViewsStyled>
						<IconButton color="secondary">
							<ShareNetwork size={22} />
						</IconButton>
					</Stack>
				</MainInfosStyled>
			</MainRentStyled>
			
			<Stack direction="row" justifyContent="center">
				<RentDividerStyled orientation="vertical" />
			</Stack>

			<RentPlaceInfosStyled>
				<RentPlaceInfosHeaderStyled direction="row">
					<Typography variant="h6">R$ 1.500</Typography>
					<Typography variant="h6"><Ruler size={25} /> 144m²</Typography>
				</RentPlaceInfosHeaderStyled>

				<RentPlaceInfosBodyStyled direction="row">
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
				</RentPlaceInfosBodyStyled>

				<Stack direction="row" justifyContent="center">
					<Link href="#" variant="subtitle2" className="link-more-features">mais características</Link>
				</Stack>
			</RentPlaceInfosStyled>
			
			<Stack direction="row" justifyContent="center">
				<RentDividerStyled orientation="vertical" />
			</Stack>

			<ContentRentDescriptionStyled>
				<Typography variant="body2">Descrição:</Typography>
				<TextRentDescriptionStyled variant="body2">O projeto do High Design traz uma integração perfeita entre os ambientes, sem barreiras visuais. As unidades de alto padrão têm 4 quartos (4 suítes) e vão de 184,01m² a 246,25m², enquanto as coberturas duplex vão de 360,96m² a 493,87m². O resultado é o maior vão de sala existente no Noroeste e apartamentos realmente vazados, com uma ventilação cruzada espetacular. A amplitude, a inexistência de pilares entre a varanda e a sala, a cozinha gourmet em ilha e o mundo de possibilidades de uso do espaço resultam numa sofisticação inigualável, que faz toda a diferença no dia a dia e ao receber amigos.</TextRentDescriptionStyled>
			</ContentRentDescriptionStyled>

			<ContentRentMapStyled>
				<Map />
				<RentGradientMapStyled />
			</ContentRentMapStyled>
		</RentStyled>
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