import { Box, Card, Grid, IconButton, Link, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

import { ITheme } from "../../themes/themes";
import imageRentTest from "../../public/renttest.png";
import styled from "@emotion/styled";

interface RentDemoStyledProps {
    theme?: ITheme;
}

export const RentDemoStyled = styled(Card)(({ theme }: RentDemoStyledProps) => ({
    height: "200px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    backgroundImage: `url(${imageRentTest.src})`,
    margin: theme?.spacing(2, 1),

    "& .swiper-pagination": {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "16px",
        bottom: "5px !important"
    },

    "& .swiper-pagination-bullet": {
        width: "6px",
        height: "6px",
        opacity: "1",
        background: theme?.palette.primary.contrastText,
        margin: "2px !important"
    },

    "& .swiper-pagination-bullet-active": {
        background: theme?.palette.primary.main
    },
}));

export const SwiperStyled = styled(Swiper)`
    height: 100%;
`;

export const SwiperSlideStyled = styled(SwiperSlide)`

`;

export const IconButtonStyled = styled(IconButton)`
    height: 43px;
    position: absolute;
    z-index: 4;
    bottom: 0;
    margin-bottom: 0px;
    transition: 1s;
    
    animation-name: moviment;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;

    &.rent__icon-active {
        animation-name: none;
        margin-bottom: 155px !important;
        transition: margin 1s;

        .MuiSvgIcon-root {
            transform: rotate(90deg);
            transition: transform 1s;
            color: ${props => (props.theme as ITheme).palette.primary.contrastText};
        }
    }

    @keyframes moviment {
        from {
            bottom: 0px;
        }
        to {
            bottom: 10px;
        }
    }
`;

export const GradientBottomStyled = styled(Box)`
    width: 100%;
    height: 38px;
    position: absolute;
    bottom: 0;
    background-image: linear-gradient(to top, #000, #FFFFFF00);
`;

export const DoubleArrowIconStyled = styled(DoubleArrowIcon)`
    transform: rotate(270deg);
    font-size: 1.7rem;
    transition: transform 1s;
    color: ${props => (props.theme as ITheme).palette.primary.main};
`;

export const MoreFeaturesStyled = styled(Box)`
    position: absolute;
    bottom: 0;
    width: 100%;
    z-Index: 3;
    height: 0;
    transition: height 1s;
    transition-timing-function: ease;
    background: ${props => (props.theme as ITheme).palette.primary.main};
    
    &.active {
        height: 200px;
        transition: height 1s;
        transition-Timing-Function: ease;
    }
`;

export const RentDetailsStyled = styled(Grid)`

`;

export const RentMainDetailsStyled = styled(Stack)`

`;

export const LinkRentStyled = styled(Link)`

`;
