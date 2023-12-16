import Image from "next/image";
import { PriceCard, PriceCardAmount, PriceCardContent, PriceCardTitle } from "./priceCard";
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({ subsets: ['latin'] });

export function ToCumFomePrice() {
    return (
        <div className={`w-full h-[120vh] 3xl:h-screen ${montSerrat.className}`}>
            <Image width={300} height={300} quality={100} className="mx-auto imageToCumFome" src="/plan-tocumfome.png" alt="image-prices" />
            <div className="lg:w-full lg:mx-0 mx-auto h-4/6 gap-5 w-[85%] max-h-full md:flex grid grid-cols-2 justify-between ">
                <PriceCard className="lg:w-[22%] w-full h-full shadow-xl border border-primary border-opacity-50 rounded-lg">
                    <PriceCardTitle>
                        <p className="relative top-1 lg:top-3">Gratuito</p>
                    </PriceCardTitle>
                    <PriceCardAmount>
                        R$ 0,00
                    </PriceCardAmount>
                    <PriceCardContent>

                    </PriceCardContent>
                </PriceCard>
                <PriceCard className="lg:w-[22%] w-full border border-primary border-opacity-50 h-full shadow-xl rounded-lg">
                    <PriceCardTitle>
                        <p className="relative  top-1 lg:top-3">Start</p>
                    </PriceCardTitle>
                    <PriceCardAmount>
                    R$ 59,90
                    </PriceCardAmount>
                    <PriceCardContent>
                    </PriceCardContent>
                </PriceCard>
                <PriceCard className="lg:w-[22%] w-full h-full border border-primary border-opacity-50 shadow-xl rounded-lg">
                    <PriceCardTitle>
                        <p className="relative  top-1 lg:top-3">Pro</p>
                    </PriceCardTitle>
                    <PriceCardAmount>
                                        R$ 79,90

                    </PriceCardAmount>
                    <PriceCardContent>

                    </PriceCardContent>
                </PriceCard>
                <PriceCard className="lg:w-[22%] w-full  h-full border border-primary border-opacity-50 shadow-xl rounded-lg">
                    <PriceCardTitle>
                        <p className="relative  top-1 lg:top-3">Premium</p>
                    </PriceCardTitle>
                    <PriceCardAmount>
                    R$ 99,90
                    </PriceCardAmount>
                    <PriceCardContent>

                    </PriceCardContent>
                </PriceCard>
            </div>
        </div>
    )
}