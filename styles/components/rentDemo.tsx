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
    // backgroundImage: `url(${imageRentTest.src})`,
    margin: theme?.spacing(2, 1),

    "& .swiper-pagination": {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "16px",
        bottom: "5px !important",
        zIndex: "5 !important",
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
    width: 100%;
    height: 100%;
`;

export const SwiperSlideContentStyled = styled(Box)`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
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
        margin-bottom: 160px !important;
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
    z-index: 1;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-Index: 3;
    height: 0;
    transition: height 1s;
    transition-timing-function: ease;
    background: ${props => (props.theme as ITheme).palette.primary.main};

    .MuiTypography-root {
        svg {
            vertical-align: sub;
        }
    }
    
    &.active {
        height: 200px;
        transition: height 1s;
        transition-Timing-Function: ease;
    }
`;

export const RentDetailsStyled = styled(Grid)`
    padding: 1.7rem 1rem 0;

    & :last-child.MuiGrid-root {
        .MuiTypography-root {
            text-align: end;
        }
    }

    .MuiTypography-root {
        color: #00000099;
    }
`;

export const RentMainDetailsStyled = styled(Stack)`
    width: 100%;
    justify-content: space-around;
    padding-top: 11px;

    .MuiTypography-root {
        font-weight: 700;

        svg {
            vertical-align: bottom;
        }
    }
`;

export const LinkRentStyled = styled(Link)`
    border-radius: 30px;
    padding: 0.7rem;
    padding-top: 0.5rem;
    position: relative;
    bottom: -6px;
    text-decoration: none;
    background: ${props => (props.theme as ITheme).palette.common.white};
`;
