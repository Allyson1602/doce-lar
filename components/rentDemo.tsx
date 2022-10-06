import { FC } from "react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import { DataRentals } from "../interfaces/rentals";
import { DoubleArrowIconStyled, RentDemoStyled, RentUtilsStyled, SwiperSlideStyled, SwiperStyled } from "../styles/components/rentDemo";

interface RendDemoProps {
    data: DataRentals;
}

const RentDemo: FC<RendDemoProps> = ({data}) => {
    return (
        <RentDemoStyled>
            <SwiperStyled pagination={true} modules={[Pagination]} className="mySwiper">
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

            <RentUtilsStyled>
                <DoubleArrowIconStyled />
            </RentUtilsStyled>
        </RentDemoStyled>
    );
};

export default RentDemo;
