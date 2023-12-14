import { BenefitComponent } from "@/components/sections/benefit";
import { HomeComponent } from "@/components/sections/home";

export default function Home() {
  return (
    <div>
      <HomeComponent />
      <div className="3xl:pt-[27rem] 2xl:pt-[15rem] lg:pt-[5rem] pt-7 ">
        <BenefitComponent />
      </div>
    </div>
  );
}
