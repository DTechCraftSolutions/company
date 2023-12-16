import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface SwiperProps {
  children: React.ReactNode[];
  className?: string;
}
export function CarouselSwiperComponent({ children, className }: SwiperProps) {
  return (
    <div>
      <Swiper
        className={`${className}`}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
