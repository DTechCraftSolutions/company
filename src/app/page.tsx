"use client";
import { BenefitComponent } from "@/components/sections/benefit";
import { ContactComponent } from "@/components/sections/contact";
import { DemonstrationComponent } from "@/components/sections/demonstration";
import { FooterComponent } from "@/components/sections/footer";
import { HomeComponent } from "@/components/sections/home";
import { PricesComponent } from "@/components/sections/prices";
import { SplashComponent } from "@/components/ui/splash";
import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const montSerrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`${montSerrat.className}`}>
      {showSplash ? (
        <div>
          <SplashComponent />
        </div>
      ) : (
        <div>
          <HomeComponent />
          <div className="3xl:mt-[20rem] 2xl:mt-[15rem] lg:mt-[5rem] mt-7">
            <BenefitComponent />
          </div>
          <div className="mt-[65rem]  mobile:mt-[50rem] xs:mt[58rem] md:mt-[63rem] 3xl:-mt-[18rem] 2xl:-mt-[5rem]">
            <DemonstrationComponent />
          </div>
          <div className="3xl:mt-[5rem] 2xl:mt-[0rem]">
            <PricesComponent />
          </div>
          <div className="3xl:mt-[18rem] 2xl:mt-[5rem] -mt-[2rem]">
            <ContactComponent />
            <FooterComponent />
          </div>
        </div>
      )}
    </div>
  );
}
