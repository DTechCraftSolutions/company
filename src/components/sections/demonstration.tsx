import { CarouselComponent } from "../antd/carousel";

export function DemonstrationComponent() {
  return (
    <div className="w-full h-screen" id="demonstration">
      <div className="w-full h-full max-w-full">
        <div className="w-full lg:mt-0 h-full max-w-[85%] lg:max-w-[1000px] mx-auto xl:max-w-[1280px]">
          <h1 className="text-primary  px-4 lg:text-start md:text-4xl w-full text-center text-xl font-black mb-5">
            Nossos Sistemas
          </h1>
          <CarouselComponent />
        </div>
      </div>
    </div>
  );
}
