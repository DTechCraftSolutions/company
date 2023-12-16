import Image from "next/image";

export function VideoComponent() {
  return (
    <div className="w-[100%] lg:h-[100vh] h-[56vh] md:h-[80vh] bg-home bg-no-repeat bg-cover absolute -z-[1000]">
      {/* 
      refator for the feature
      <video autoPlay muted loop src="/video-company.mp4" />
      <div className="md:hidden">
        <video autoPlay muted loop src="/video-company.mp4" />
      </div> */}
    </div>
  );
}
