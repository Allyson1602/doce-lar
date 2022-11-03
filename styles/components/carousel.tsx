import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { ITheme } from "../../themes/themes";

export const SwiperStyled = styled(Swiper)`
    width: 100%;
    height: 100%;
`;

export const SwiperSlideContentStyled = styled(SwiperSlide)`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
`;

export const GradientBottomStyled = styled(Box)`
    width: 100%;
    height: 38px;
    position: absolute;
    z-index: 1;
    bottom: 0;
    background-image: linear-gradient(to top, #000, #FFFFFF00);
`;
