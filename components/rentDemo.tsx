import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { DataRentals } from "../interfaces/rentals";
import { DoubleArrowIconStyled, MoreFeaturesStyled, RentDemoStyled, GradientBottomStyled, SwiperSlideStyled, SwiperStyled, IconButtonStyled, LinkRentStyled, RentDetailsStyled, RentMainDetailsStyled } from "../styles/components/rentDemo";
import { Door, Toilet, Person, Car, Armchair, House, PawPrint, Baby, Ruler, Money } from "phosphor-react";

interface RendDemoProps {
    data: DataRentals;
}

const RentDemo: FC<RendDemoProps> = ({data}) => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <RentDemoStyled>
            <IconButtonStyled
                onClick={handleClick}
                className={active ? "rent__icon-active" : ""}
            >
                <DoubleArrowIconStyled />
            </IconButtonStyled>

            <SwiperStyled pagination={true} modules={[Pagination]}>
                <SwiperSlideStyled></SwiperSlideStyled>
                <SwiperSlideStyled>Slide 2</SwiperSlideStyled>
                <SwiperSlideStyled>Slide 3</SwiperSlideStyled>
                <SwiperSlideStyled>Slide 4</SwiperSlideStyled>
                <SwiperSlideStyled>Slide 5</SwiperSlideStyled>
                <SwiperSlideStyled>Slide 6</SwiperSlideStyled>
                <SwiperSlideStyled>Slide 7</SwiperSlideStyled>
                <SwiperSlideStyled>Slide 8</SwiperSlideStyled>
                <SwiperSlideStyled>Slide 9</SwiperSlideStyled>
            </SwiperStyled>

            <GradientBottomStyled />

            <MoreFeaturesStyled className={active ? "active" : ""}>
                <RentDetailsStyled container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="body2"><Door size={22} weight="thin" /> quartos</Typography>
                        <Typography variant="body2"><Toilet size={22} weight="thin" /> banheiros</Typography>
                        <Typography variant="body2"><Person size={22} weight="thin" /> pessoas</Typography>
                        <Typography variant="body2"><Car size={22} weight="thin" /> carros</Typography>
                    </Grid>
                    
                    <Grid item>
                        <Typography variant="body2">mobilhado <Armchair size={22} weight="thin" /></Typography>
                        <Typography variant="body2">apartamento <House size={22} weight="thin" /></Typography>
                        <Typography variant="body2">permite animais <PawPrint size={22} weight="thin" /></Typography>
                        <Typography variant="body2">permite crianças <Baby size={22} weight="thin" /></Typography>
                    </Grid>
                </RentDetailsStyled>

                <RentMainDetailsStyled direction="row">
                    <Typography variant="body1"><Money size={32} weight="thin" /> 1.500</Typography>
                    <Typography variant="body1"><Ruler size={32} weight="thin" /> 144M²</Typography>
                </RentMainDetailsStyled>

                <LinkRentStyled href="">ver anúncio</LinkRentStyled>
            </MoreFeaturesStyled>
        </RentDemoStyled>
    );
};

export default RentDemo;
