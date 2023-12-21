import React from "react";
import { Carousel } from "antd";
import { ToCumFomeContentComponent } from "../ui/tocumfome";
import { CarouselSwiperComponent } from "../swiper/carousel-swiper";
import { divide } from "cypress/types/lodash";
import { BarberHubContentComponent } from "../ui/barberHub";

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
        className="md:h-[48rem] h-[58rem] cursor-pointer"
        children={[
          <ToCumFomeContentComponent />,
          <BarberHubContentComponent />,
        ]}
      />
    </div>
  );
}
