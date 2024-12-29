import Button from "./Button";
import CardInitialSection from "./CardInitialSection";
import person1 from "../assets/images/person1.png";
import person2 from "../assets/images/person2.png";
import person3 from "../assets/images/person3.png";
import person from "../assets/images/person.png";

const InitialSection = () => {
  return (
    <section className="flex flex-row justify-center items-center md:py-12 w-full max-w-5xl">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full md:gap-6">
        <div className="flex flex-col justify-center items-center gap-5 p-4 md:p-0">
          <h1 className="text-3xl font-normal w-full md:text-5xl">
            Encontre seu caminho para o bem-estar emocional hoje.
          </h1>
          <p className="text-xl md:mt-4 w-full">
            Acreditamos na criação de um espaço seguro e de apoio para
            indivíduos que buscam cura mental e emocional em suas vidas.
          </p>
          <div
            className="flex items-start w-full 
          "
          >
            <Button
              title="Agendar Consulta"
              className="text-base py-4 px-6 bg-[#629D8C] text-white hover:bg-[#629d8ce0] transition-all duration-300 ease-in-out"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 p-4 md:p-0">
          <CardInitialSection className="bg-[#A4C6BC]" image={person} />
          <CardInitialSection className="bg-[#FFDAC4]" image={person1} />
          <CardInitialSection className="bg-[#FFCAAA]" image={person2} />
          <CardInitialSection className="bg-[#629D8C]" image={person3} />
        </div>
      </div>
    </section>
  );
};

export default InitialSection;
