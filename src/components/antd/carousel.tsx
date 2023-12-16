import React from "react";
import { Carousel } from "antd";
import { ToCumFomeContentComponent } from "../ui/tocumfome";
import { CarouselSwiperComponent } from "../swiper/carousel-swiper";
import { divide } from "cypress/types/lodash";

export function CarouselComponent() {
  return (
    // <Carousel autoplay effect="fade" dots={false} autoplaySpeed={4000}>
    //   <div>
    //     <ToCumFomeContentComponent />
    //   </div>
    // </Carousel>
    <div>
      <CarouselSwiperComponent
        key={Math.random()}
        className="md:h-[45rem] h-[55rem] cursor-pointer"
        children={[
          <ToCumFomeContentComponent />,
          <ToCumFomeContentComponent />,
        ]}
      />
    </div>
  );
}
