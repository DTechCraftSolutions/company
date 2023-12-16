import { Carousel } from "antd";
import { ToCumFomePrice } from "../ui/tocumfomePrice";
import { CarouselSwiperComponent } from "../swiper/carousel-swiper";

export function CarouselPrices() {
  return (
    // <Carousel className="carousel-prices" autoplay effect="fade" dots={false} autoplaySpeed={4000}>
    //    <ToCumFomePrice/>
    // </Carousel>
    <div>
      <CarouselSwiperComponent
        className="md:h-[52rem] h-[55rem] cursor-pointer"
        children={[<ToCumFomePrice />, <ToCumFomePrice />]}
      />
    </div>
  );
}
