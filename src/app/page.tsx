"use client";
import { BenefitComponent } from "@/components/sections/benefit";
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
          <div className="3xl:pt-[20rem] 2xl:pt-[15rem] lg:pt-[5rem] pt-7 ">
            <BenefitComponent />
          </div>
        </div>
      )}
    </div>
  );
}
