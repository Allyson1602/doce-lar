import { Box, Card } from "@mui/material";
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

export const RentUtilsStyled = styled(Box)`
    width: 100%;
    height: 38px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to top, #000, #FFFFFF00);
`;

export const DoubleArrowIconStyled = styled(DoubleArrowIcon)`
    transform: rotate(270deg);
    font-size: 1.7rem;
    color: ${props => (props.theme as ITheme).palette.primary.main};
    
    animation-name: moviment;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;

    @keyframes moviment {
        from {
            margin-bottom: 0px;
        }
        to {
            margin-bottom: 10px;
        }
    }
`;
