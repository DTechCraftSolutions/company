import { Montserrat } from "next/font/google";

const montSerrat = Montserrat({ subsets: ["latin"] });
export function FormContactContentComponent() {
  return (
    <div className={`${montSerrat.className} `}>
      <form>
        <div className="mb-4 flex flex-col md:items-center lg:items-start">
          <label
            className="text-primary font-semibold lg:text-start lg:text-xl text-center px-4"
            htmlFor="name"
          >
            Nome
          </label>
          <input
            className="ml-7 md:ml-4 mt-5 shadow appearance-none border border-primary rounded-lg w-[85%] md:w-[70%] py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nome"
          />
        </div>
        <div className="mb-4 flex flex-col md:items-center lg:items-start">
          <label
            className="text-primary font-semibold lg:text-start lg:text-xl text-center px-4 mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="ml-7 md:ml-4 mt-5 shadow appearance-none border border-primary rounded-lg  w-[85%] md:w-[70%] py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-4 flex flex-col md:items-center lg:items-start">
          <label
            className="text-primary font-semibold lg:text-start lg:text-xl text-center px-4 mb-2"
            htmlFor="message"
          >
            Digite sua mensagem
          </label>
          <textarea
            className="ml-7 md:ml-4 mt-5 shadow appearance-none border border-primary rounded-lg w-[85%] md:w-[70%] h-[20rem] py-4 px-4 text-secondary leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Mensagem"
          ></textarea>
        </div>
        <div className="flex md:items-center  md:justify-center lg:items-start lg:justify-start mt-10 ml-7 md:ml-4">
          <button
            type="submit"
            className="w-[92%] md:w-[71%] py-2 md:py-4 bg-primary text-white font-bold md:text-xl rounded-full hover:bg-opacity-80 transition-colors duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}
