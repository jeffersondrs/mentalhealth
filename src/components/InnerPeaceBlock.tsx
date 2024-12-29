import { MoveRight } from "lucide-react";
import pana from "../assets/images/pana.png";
import Button from "./Button";

const InnerPeaceBlock = () => {
  return (
    <section className="flex flex-row justify-center items-center w-full max-w-screen-2xl bg-gray-50 md:py-24 p-4">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center w-full max-w-5xl gap-6">
        <div className="flex flex-col justify-between items-start">
          <h1 className="text-2xl md:text-3xl font-normal w-full mb-2">
            Encontre o Seu Caminho para a Paz Interior
          </h1>
          <p className="md:text-base text-sm w-full my-6">
            No Centro Psicolóco Nuvens de Algodão, oferecemos uma variedade de
            serviços terapêuticos projetados para dar suporte à sua jornada em
            direção ao bem-estar emocional. Nossos profissionais experientes se
            dedicam a ajudar você a encontrar o caminho certo para suas
            necessidades únicas.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="gap-2 flex flex-col justify-between items-start">
              <h4 className="text-base">Terapia Individual</h4>
              <p className="text-sm text-gray-600">
                Sessões personalizadas para abordar seus desafios emocionais e
                promover a autodescoberta.
              </p>
              <Button
                title={"Leia mais"}
                className="border-none gap-2 text-[#629D8C] -translate-x-4"
              >
                <MoveRight />
              </Button>
            </div>
            <div className="gap-2 flex flex-col justify-between items-start">
              <h4 className="text-base">Aconselhamento para casais</h4>
              <p className="text-sm text-gray-600">
                Fortaleça seu relacionamento com estratégias eficazes de
                comunicação e resolução de conflitos.
              </p>
              <Button
                title={"Leia mais"}
                className="border-none gap-2 text-[#629D8C] -translate-x-4"
              >
                <MoveRight />
              </Button>
            </div>
          </div>
        </div>
        <figure className="flex flex-col justify-center items-center w-full bg-[#A4C6BC] rounded-2xl relative max-w-96 h-80 md:h-full">
          <img
            src={pana}
            alt="Discovery"
            className="w-full max-h-80 object-cover rounded-2xl max-w-96 absolute bottom-0"
          />
        </figure>
      </div>
    </section>
  );
};

export default InnerPeaceBlock;
