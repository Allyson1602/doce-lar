import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { DataRentals } from "../interfaces/rentals";
import { DoubleArrowIconStyled, MoreFeaturesStyled, RentDemoStyled, GradientBottomStyled, SwiperStyled, IconButtonStyled, LinkRentStyled, RentDetailsStyled, RentMainDetailsStyled, SwiperSlideContentStyled } from "../styles/components/rentDemo";
import { Door, Toilet, Person, Car, Armchair, House, PawPrint, Baby, Ruler, Money } from "phosphor-react";
import { SwiperSlide } from "swiper/react";

interface RendDemoProps {
    data: DataRentals;
}

const RentDemo: FC<RendDemoProps> = ({ data }) => {

    const { images, id, features } = data;

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    const getFeaturesElement = (): JSX.Element[] => {
        let itemsFeatures: JSX.Element[] = [];

        if(features.animals) {
            itemsFeatures.push(<Typography variant="body2">permite animais <PawPrint size={22} weight="thin" /></Typography>);
        }

        if(features.bathrooms && features.bathrooms > 0) {
            itemsFeatures.push(<Typography variant="body2"><Toilet size={22} weight="thin" /> {features.bathrooms} banheiros</Typography>);
        }

        if(features.furnished) {
            itemsFeatures.push(<Typography variant="body2">mobilhado <Armchair size={22} weight="thin" /></Typography>);
        }
        
        if(features.immobileType) {
            itemsFeatures.push(<Typography variant="body2">{features.immobileType} <House size={22} weight="thin" /></Typography>);
        }
        
        if(features.kids) {
            itemsFeatures.push(<Typography variant="body2">permite crianças <Baby size={22} weight="thin" /></Typography>);
        }
        
        if(features.people && features.people > 0) {
            itemsFeatures.push(<Typography variant="body2"><Person size={22} weight="thin" />{features.people} pessoas</Typography>);
        }
        
        if(features.rooms && features.rooms > 0) {
            itemsFeatures.push(<Typography variant="body2"><Door size={22} weight="thin" /> {features.rooms} quartos</Typography>);
        }
        
        if(features.vacancyCar && features.vacancyCar > 0) {
            itemsFeatures.push(<Typography variant="body2"><Car size={22} weight="thin" /> {features.vacancyCar} carros</Typography>);
        }
    
        return itemsFeatures;
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
                {images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <SwiperSlideContentStyled sx={{ background: `url("data:image/jpg;base64, ${image}")` }}></SwiperSlideContentStyled>
                        </SwiperSlide>
                    );
                })}

                <GradientBottomStyled />
            </SwiperStyled>

            <MoreFeaturesStyled className={active ? "active" : ""}>
                <RentDetailsStyled container justifyContent="space-between">
                    {getFeaturesElement().map(feature => feature)}
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
