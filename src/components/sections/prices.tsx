import { CarouselPrices } from "../antd/carouselPrices";

export function PricesComponent() {
  return (
    <div
      className="w-full h-full  3xl:h-screen mobile:mt-24 xs:mt-40 mt-80 3xl:-mt-56"
      id="prices"
    >
      <div className="w-full h-full lg:max-w-[1000px] mx-auto xl:max-w-[1280px]">
        <h1 className="text-primary  px-4 lg:text-start md:text-4xl w-full text-center text-xl font-black mb-16">
          Preços
        </h1>
        <CarouselPrices />
      </div>
    </div>
  );
}
