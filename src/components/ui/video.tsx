import Image from "next/image";

export function VideoComponent() {
  return (
    <div className="w-[100%] absolute -z-[1000]">
      <Image
        src="/image-company-video.png"
        alt="image-video"
        width={1920}
        height={1080}
      />
      <div className="md:hidden absolute -mt-1">
        <Image
          src="/image-company-video.png"
          alt="image-video"
          width={1920}
          height={1080}
        />
      </div>

      {/* 
      refator for the feature
      <video autoPlay muted loop src="/video-company.mp4" />
      <div className="md:hidden">
        <video autoPlay muted loop src="/video-company.mp4" />
      </div> */}
    </div>
  );
}
