import Image from "next/image";
export function SplashComponent() {
  return (
    <div className="w-[100%] h-screen flex justify-center items-center bg-secondary">
      <div className="2xl:w-[50rem] 3xl:w-[60rem] w-[30rem] animate-pulse">
        <Image
          src="/logo-home.png"
          alt="image-splash"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
}
