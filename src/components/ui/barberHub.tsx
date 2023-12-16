import Image from "next/image";
import { Button, ButtonText } from "./button-home";
import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({ subsets: ["latin"] });
export function BarberHubContentComponent() {
  return (
    <>
      <div className={`${montSerrat.className}`}>
        <div
          className="flex flex-col justify-center lg:flex lg:flex-row 
        lg:justify-between items-center mt-[3rem] "
        >
          <div className="w-[20rem] lg:w-1/2">
            <Image
              src="/barber-hub-image.png"
              quality={100}
              alt="image-demonstration"
              width={1920}
              height={1080}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="flex justify-center items-center">
              <Image
                src="/barber-hub-price.png"
                quality={100}
                width={300}
                height={300}
                alt="icon"
              />
            </div>
            <p
              className="flex justify-center pb-6 md:pb-10 lg:py-0 text-secondary 
                lg:text-start lg:text-xl text-center text-lg"
            >
              Descubra o futuro da gestão de barbearias com o BarberHub! Uma
              plataforma revolucionária que une abrangência, qualidade e
              praticidade em um só lugar. Automatize seu negócio, ofereça
              agendamentos sem esforço, tenha uma loja virtual integrada para
              ampliar suas vendas, e proporcione um atendimento excepcional aos
              seus clientes. Simplifique sua vida profissional enquanto eleva a
              experiência de cada corte!
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
