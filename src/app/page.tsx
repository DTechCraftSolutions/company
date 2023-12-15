"use client";
import { BenefitComponent } from "@/components/sections/benefit";
import { DemonstrationComponent } from "@/components/sections/demonstration";
import { HomeComponent } from "@/components/sections/home";
import { SplashComponent } from "@/components/ui/splash";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
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
          <div className="mt-[58rem] md:mt-[63rem] 3xl:-mt-[18rem] 2xl:-mt-[5rem]">
            <DemonstrationComponent />
          </div>
        </div>
      )}
    </div>
  );
}
