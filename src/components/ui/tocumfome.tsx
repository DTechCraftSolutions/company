import Image from "next/image";
import { Button, ButtonText } from "./button-home";
export function ToCumFomeContentComponent() {
  return (
    <>
      <div>
        <div className="flex flex-col justify-center lg:flex lg:flex-row lg:justify-between items-center mt-[5rem] ">
          <div className="w-[20rem] lg:w-1/2">
            <Image
              src="/tocumfome.png"
              alt="image-demonstration"
              width={1920}
              height={1080}
            />
          </div>
          <div className="lg:w-1/2">
            <p
              className="flex justify-center lg:pt-24 py-10 lg:py-0 text-secondary 
              lg:text-start lg:text-xl text-center text-lg  "
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
          <Button>
            <ButtonText color="white">Experimente Grátis</ButtonText>
          </Button>
        </div>
      </div>
    </>
  );
}
