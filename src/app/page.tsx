import { BenefitComponent } from "@/components/sections/benefit";
import { HomeComponent } from "@/components/sections/home";

export default function Home() {
  return (
    <div>
      <HomeComponent />
      <div className="md:pt-[20rem] pt-7">
        <BenefitComponent />
      </div>
    </div>
  );
}
