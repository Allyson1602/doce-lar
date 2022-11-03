import { FC } from "react";
import { SwiperStyled, SwiperSlideContentStyled, GradientBottomStyled } from "../styles/components/carousel";

import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

interface CarouselProps {
    images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
    return (
        <SwiperStyled pagination={true} modules={[Pagination]}>
            {images.map((image, index) => {
                return (
                    <SwiperSlide key={index}>
                        <SwiperSlideContentStyled style={{ background: `url("data:image/jpg;base64, ${image}")`, backgroundSize: "contain"}} />
                    </SwiperSlide>
                );
            })}

            <GradientBottomStyled />
        </SwiperStyled>
    );
};

export default Carousel;
