import { CarouselPrices } from "../antd/carouselPrices";


export function PricesComponent() {
    return (
        <div className="w-full h-[110vh]  3xl:h-screen mobile:mt-24 xs:mt-40 mt-80 3xl:-mt-56 overflow-y-hidden" id="prices">
            <div className="w-full h-full max-w-[1300px] mx-auto">
                <h1 className="text-primary  px-4 lg:text-start md:text-4xl w-full text-center text-xl font-black mb-16">
                    Preços
                </h1>
              <CarouselPrices />
            </div>
        </div>
    );
}