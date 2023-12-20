import Image from "next/image";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { Montserrat } from "next/font/google";
import { FaApple } from "react-icons/fa";

const montSerrat = Montserrat({ subsets: ["latin"] });

export function FooterComponent() {
  return (
    <footer
      id="footer"
      className={`${montSerrat.className} w-full h-[80vh] lg:h-[20rem] py-2 mt-20
       bg-secondary`}
    >
      <div
        className="h-full mx-auto flex max-w-[85%] flex-col lg:grid lg:grid-cols-4
       lg:max-w-[1300px]"
      >
        <div className=" lg:h-full ">
          <Image
            className="relative -left-[68px]"
            width={300}
            height={300}
            src="/logo-home.png"
            alt="logo-home"
          />
          <div className="relative lg:-top-8 text-white">
            <p className="font-semibold">DtechCraftSolutions © 2023</p>
            <p>todos os direitos reservados.</p>
            <div className="flex w-32 text-xl mt-3 justify-between items-center">
              <FaInstagram className="text-[25px]" />
              <FaWhatsapp className="text-[25px]" />
              <BiLogoGmail className="text-[25px]" />
            </div>
            <div className="flex items-center gap-2 mt-6">
              <p className="font-semibold">CNPJ:</p>
              <p>11111111/111</p>
            </div>
          </div>
        </div>
        <div className=" lg:h-full pt-4 lg:pt-16 text-white">
          <p className=" font-semibold">Produtos</p>
          <div className="flex flex-col mt-6">
            <a href="/#" className="underline">
              BarberHub
            </a>
            <a href="/#" className="underline">
              To cum Fome
            </a>
          </div>
          <div className="w-32 flex gap-8 item-center mt-4 ">
            <a href="/#" className="underline">
              <Image
                width={24}
                height={24}
                src="/googleplay.png"
                alt="logo-home"
              />
            </a>
            <a href="/#" className="underline -mt-1">
              <FaApple className="text-[32px] " />
            </a>
          </div>
        </div>
        <div className=" lg:h-full pt-4 lg:pt-16 text-white">
          <p className=" font-semibold">Sobre</p>
          <div className="flex flex-col mt-6">
            <a href="/#" className="underline">
              Políticas de Privacidade
            </a>
            <a href="/#" className="underline">
              Direitos Autorais
            </a>
            <a href="/#" className="underline">
              Termos de uso
            </a>
          </div>
        </div>
        <div className=" lg:h-full pt-4 lg:pt-16 text-white">
          <p className=" font-semibold">Suporte</p>
          <div className="flex flex-col mt-6">
            <a href="/#" className="underline">
              Central de ajuda
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
