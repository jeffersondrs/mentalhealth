import { Blocks, Brain, PackagePlus, Lock } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="flex flex-row justify-center items-center w-full max-w-screen-2xl md:py-24 p-4">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center w-full max-w-5xl gap-4">
        <div className="flex flex-col gap-6">
          <div>
            <span className="text-[#629D8C] text-xs pl-1">Por que escolher-nos</span>
            <h1 className="text-2xl md:text-4xl max-w-96">Sua jornada única para a cura</h1>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Blocks color={"#629D8C"} />
            <h3 className="text-lg text-gray-500 max-w-96">
              Feito sob medida para você
            </h3>
            <p className="text-sm w-full">
              Não tratamos apenas os sintomas&#59; focamos em compreender e
              curar as causas raízes dos desafios de saúde mental.
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Brain color={"#629D8C"} />
            <h3 className="text-lg text-gray-500 max-w-96">
              Feito sob medida para você
            </h3>
            <p className="text-sm w-full">
              Projetado pensando no seu conforto, nossa atmosfera serena promove
              relaxamento e segurança emocional desde o momento em que você
              entra.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-base w-full mb-2">
            Adotamos uma abordagem holística à saúde mental, focando na sua
            jornada em direção ao bem-estar emocional. Nossa equipe está aqui
            para apoiá-lo em cada passo do caminho.
          </h2>
          <div className="flex flex-col justify-start items-start gap-4">
            <PackagePlus color={"#629D8C"} />
            <h3 className="text-lg text-gray-500 max-w-96">
              Feito sob medida para você
            </h3>
            <p className="text-sm w-full">
              Não tratamos apenas os sintomas&#59; focamos em compreender e
              curar as causas raízes dos desafios de saúde mental.{" "}
            </p>
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <Lock color={"#629D8C"} />
            <h3 className="text-lg text-gray-500 max-w-96">
              Feito sob medida para você
            </h3>
            <p className="text-sm w-full">
              Projetado pensando no seu conforto, nossa atmosfera serena promove
              relaxamento e segurança emocional desde o momento em que você
              entra.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
