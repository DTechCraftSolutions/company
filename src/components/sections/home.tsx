import Image from "next/image";
import { VideoComponent } from "../ui/video";
import { Button, ButtonText } from "../ui/button-home";

export function HomeComponent() {
  return (
    <div id="home">
      <VideoComponent />
      <div className="flex flex-col justify-center items-center">
        <div className="flex justify-center 2xl:w-[50rem] 3xl:w-[80rem] md:w-[30rem] w-[18rem]  mt-5 md:mt-0">
          <Image src="/logo-home.png" alt="logo" width={1100} height={1100} />
        </div>
        <div>
          <h1
            className="md:text-3xl w-[17rem] md:w-full text-center
           text-white font-bold lg:absolute left-0 lg:-mt-24 2xl:flex 2xl:justify-center"
          >
            Transforme Seu Negócio Com Nossos Sistemas
          </h1>
        </div>
        <div className="pt-10">
          <p
            className="text-white text-center text-sm w-[17rem] 
           md:w-[35rem] md:text-xl lg:-mt-12"
          >
            Descubra a eficiência em soluções para delivery, agendamentos e
            automações em geral. Facilitamos cada passo para o sucesso do seu
            negócio.
          </p>
        </div>
        <div className="lg:pt-14 2xl:pt-20 pt-10">
          <Button>
            <ButtonText>Teste Agora</ButtonText>
          </Button>
        </div>
      </div>
    </div>
  );
}
