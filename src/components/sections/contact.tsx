import { FormContactContentComponent } from "../ui/form-contact";

export function ContactComponent() {
  return (
    <div
      id="contact"
      className="w-full h-[120vh] 3xl:h-screen mt-40 3xl:-mt-56 overflow-y-hidden"
    >
      <div className="w-full h-full max-w-[1300px] mx-auto">
        <h1 className="text-primary  px-4 lg:text-start md:text-4xl w-full text-center text-xl font-black mb-16">
          Contato
        </h1>
        <p className="text-secondary lg:text-start lg:text-xl text-center px-4">
          Deseja termais informações, ou fazer um orçamento para um um sistema
          único e personalizado, entre em contato aqui conosco
        </p>
        <div className="mt-10">
          <FormContactContentComponent />
        </div>
      </div>
    </div>
  );
}
