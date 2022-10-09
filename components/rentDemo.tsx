import { Box, IconButton, Link } from "@mui/material";
import { FC, useState } from "react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { DataRentals } from "../interfaces/rentals";
import { DoubleArrowIconStyled, MoreFeaturesStyled, RentDemoStyled, GradientBottomStyled, SwiperSlideStyled, SwiperStyled, IconButtonStyled } from "../styles/components/rentDemo";

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
                <RendDetailsStyled>

                </RendDetailsStyled>

                <RendMainDetailsStyled>
                    
                </RendMainDetailsStyled>

                <Link href="">ver anúncio</Link>
            </MoreFeaturesStyled>
        </RentDemoStyled>
    );
};

export default RentDemo;
