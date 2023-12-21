import { Carousel } from "antd";
import { ToCumFomePrice } from "../ui/tocumfomePrice";
import { CarouselSwiperComponent } from "../swiper/carousel-swiper";
import { BarberHubPrices } from "../ui/barberHubPrices";

export function CarouselPrices() {
  return (
    // <Carousel className="carousel-prices" autoplay effect="fade" dots={false} autoplaySpeed={4000}>
    //    <ToCumFomePrice/>
    // </Carousel>
    <div>
      <CarouselSwiperComponent
        key={Math.random()}
        className="md:h-[54rem] 2xl:h-[50.3rem] 3xl:h-[54rem] h-[45rem] mobile:h-[56rem] cursor-pointer"
        children={[<ToCumFomePrice />, <BarberHubPrices />]}
      />
    </div>
  );
}
