
import { Carousel } from "antd";
import { ToCumFomePrice } from "../ui/tocumfomePrice";

export function CarouselPrices() {
    return (
        <Carousel className="carousel-prices" autoplay effect="fade" dots={false} autoplaySpeed={4000}>
           <ToCumFomePrice/>
        </Carousel>
    )
}