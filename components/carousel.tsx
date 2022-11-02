import { FC } from "react";
import { Pagination } from "swiper";
import { SwiperSlide } from "swiper/react";
import { SwiperStyled, SwiperSlideContentStyled, GradientBottomStyled } from "../styles/components/carousel";

interface CarouselProps {
    images: string[];
}

const Carousel: FC<CarouselProps> = ({ images }) => {
    return (
        <SwiperStyled pagination={true} modules={[Pagination]}>
            {images.map((image, index) => {
                return (
                    <SwiperSlide key={index}>
                        <SwiperSlideContentStyled sx={{ background: `url("data:image/jpg;base64, ${image}")` }} />
                    </SwiperSlide>
                );
            })}

            <GradientBottomStyled />
        </SwiperStyled>
    );
};

export default Carousel;
