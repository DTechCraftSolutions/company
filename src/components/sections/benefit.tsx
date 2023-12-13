import { Card, CardContent, CardIcon, CardTitle } from "../ui/card";

export function BenefitComponent() {
  return (
    <div
      className="w-screen h-screen"
      id="benefit">
      <div className="w-full h-screen">
        <div className="w-full h-full max-w-[85%] lg:max-w-[1300px] pt-24 mx-auto bg-white">
          <h1 className="text-primary px-4 text-2xl font-black mb-5">
            Descubra os Benefícios
          </h1>
          <p className="text-secondary px-4">
            Descubra por que nossos sistemas são a escolha ideal para o seu negócio.
            Conheça as razões que fazem toda a diferença.
          </p>
          <div className="w-full md:px-4 2xl:px-0 flex flex-col lg:mt-16 gap-5 mt-5 lg:flex-row">
            <Card className="flex flex-col h-80 py-12 items-center">
              <CardIcon>🧑‍💼</CardIcon>
              <CardTitle>Treinamento Especializado</CardTitle>
              <CardContent>
                Maximize seu potencial com treinamento especializado. Desenvolva
                suas habilidades e alcance o sucesso com nossos sistemas.
              </CardContent>
            </Card>
            <Card className="flex flex-col h-80 py-12 items-center">
              <CardIcon>🧑‍💼</CardIcon>
              <CardTitle>Suporte Prioritário</CardTitle>
              <CardContent>
                Suporte prioritário exclusivo para parceiros: respostas rápidas e
                soluções eficientes. Estamos aqui para otimizar sua jornada.
              </CardContent>
            </Card>
            <Card className="flex flex-col h-80 py-12 items-center">
              <CardIcon>🧑‍💼</CardIcon>
              <CardTitle>Preço Justo</CardTitle>
              <CardContent>
                Preços irresistíveis para um valor que vai além das expectativas.
                Sua melhor escolha começa aqui. Não perca essa oportunidade!
              </CardContent>
            </Card>
            <Card className="flex flex-col h-80 py-12 items-center">
              <CardIcon>🧑‍💼</CardIcon>
              <CardTitle>Segurança e Privacidade</CardTitle>
              <CardContent>
                Segurança e privacidade garantidas. Seus dados, nossa responsabilidade.
                Confie em nós para uma experiência tranquila e confidencial
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
