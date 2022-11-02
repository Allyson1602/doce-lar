import { Box, Grid, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { DataRentals } from "../interfaces/rentals";
import { DoubleArrowIconStyled, MoreFeaturesStyled, RentDemoStyled, IconButtonStyled, LinkRentStyled, RentDetailsStyled, RentMainDetailsStyled } from "../styles/components/rentDemo";
import { Door, Toilet, Person, Car, Armchair, House, PawPrint, Baby, Ruler, Money } from "phosphor-react";
import { SwiperSlide } from "swiper/react";
import Carousel from "./carousel";

interface RendDemoProps {
    data: DataRentals;
}

const RentDemo: FC<RendDemoProps> = ({ data }) => {

    const { images, id, features } = data;

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    const getFeaturesLeftElements = (): JSX.Element[] => {
        let itemsFeatures: JSX.Element[] = [];
        
        if(features.rooms && features.rooms > 0) {
            itemsFeatures.push(<Typography variant="body2" fontSize={12}><Door size={20} /> {features.rooms} quartos</Typography>);
        }

        if(features.bathrooms && features.bathrooms > 0) {
            itemsFeatures.push(<Typography variant="body2" fontSize={12}><Toilet size={20} /> {features.bathrooms} banheiros</Typography>);
        }
        
        if(features.people && features.people > 0) {
            itemsFeatures.push(<Typography variant="body2" fontSize={12}><Person size={20} /> {features.people} pessoas</Typography>);
        }
        
        if(features.vacancyCar && features.vacancyCar > 0) {
            itemsFeatures.push(<Typography variant="body2" fontSize={12}><Car size={20} /> {features.vacancyCar} carros</Typography>);
        }
    
        return itemsFeatures;
    }
    
    const getFeaturesRightElements = (): JSX.Element[] => {
        let itemsFeatures: JSX.Element[] = [];

        if(features.furnished) {
            itemsFeatures.push(<Typography variant="body2" fontSize={12}>mobilhado <Armchair size={20} /></Typography>);
        }
        
        if(features.immobileType) {
            itemsFeatures.push(<Typography variant="body2" fontSize={12}>{features.immobileType} <House size={20} /></Typography>);
        }

        if(features.animals) {
            itemsFeatures.push(<Typography variant="body2" fontSize={12}>permite animais <PawPrint size={20} /></Typography>);
        }
        
        if(features.kids) {
            itemsFeatures.push(<Typography variant="body2" fontSize={12}>permite crianças <Baby size={20} /></Typography>);
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

            <Carousel images={images} />

            <MoreFeaturesStyled className={active ? "active" : ""}>
                <RentDetailsStyled container justifyContent="space-between">
                    <Grid item>
                        {getFeaturesLeftElements().map((feature, index) => (
                            <span key={index}>{feature}</span>
                        ))}
                    </Grid>

                    <Grid item>
                        {getFeaturesRightElements().map((feature, index) => (
                            <span key={index}>{feature}</span>
                        ))}
                    </Grid>
                </RentDetailsStyled>

                <RentMainDetailsStyled direction="row">
                    <Typography variant="body1"><Money size={32} weight="thin" /> 1.500</Typography>
                    <Typography variant="body1"><Ruler size={32} weight="thin" /> 144M²</Typography>
                </RentMainDetailsStyled>

                <LinkRentStyled href={`rent/${id}`}>ver anúncio</LinkRentStyled>
            </MoreFeaturesStyled>
        </RentDemoStyled>
    );
};

export default RentDemo;
