import Image from "next/image";
import { Button, ButtonText } from "./button-home";
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({ subsets: ["latin"] });
export function ToCumFomeContentComponent() {
  return (
    <>
      <div className={`${montSerrat.className}`}>
        <div className="flex flex-col gap-10 justify-center lg:flex lg:flex-row lg:justify-between items-center mt-[5rem] ">
          <div className="w-[20rem] lg:w-1/2">
            <Image
              src={"/tocumfome.png"}
              quality={100}
              alt="image-demonstration"
              width={1920}
              height={1080}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center">
              <Image
                width={300}
                height={300}
                quality={100}
                className="mx-auto"
                src="/plan-tocumfome.png"
                alt="icon"
              />
            </div>
            <p
              className="flex justify-center  pb-10 lg:py-0 text-secondary 
                lg:text-start lg:text-xl text-center text-lg"
            >
              Transforme a experiência de delivery da sua empresa com o To Cum
              Fome. Oferecemos um sistema integrado com pagamento online,
              acompanhamento de pedidos em tempo real e a conveniência da
              emissão automática do resumo para seus clientes. Simplifique suas
              operações, melhore a eficiência e fortaleça a satisfação do
              cliente. Adote o To Cum Fome e leve sua entrega para o próximo
              nível!
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="w-[92%] md:w-[40%] py-2 md:py-4 bg-primary text-white font-bold md:text-xl rounded-full hover:bg-opacity-80 transition-colors duration-300">
            Experimente grátis
          </button>
        </div>
      </div>
    </>
  );
}
