import React from "react";
import { Carousel } from "antd";
import { ToCumFomeContentComponent } from "../ui/tocumfome";

export function CarouselComponent() {
  return (
    <Carousel autoplay effect="fade" dots={false} autoplaySpeed={4000}>
      <div>
        <ToCumFomeContentComponent />
      </div>
    </Carousel>
  );
}
