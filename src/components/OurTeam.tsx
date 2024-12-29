import CardTeam from "./CardTeam";
import teamMembers from "../utils/teammembers";

const OurTeam = () => {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center gap-4 md:py-14 p-4">
      <div className="grid grid-cols-1 md:gap-8 text-center md:grid-cols-2 w-full max-w-5xl place-items-center">
        <div className="flex flex-col gap-2 items-start">
          <span className="text-[#629D8C] text-xs pl-1">Conheça nossa equipe</span>
          <h1 className="text-2xl md:text-4xl text-start mb-2">
            Compassivo, experiente e pronto para apoiá-lo
          </h1>
        </div>
        <p className="md:text-base text-sm text-gray-500 text-start">
          Nossa equipe de terapeutas licenciados e profissionais de saúde mental
          trazem muito conhecimento e empatia para orientar você em sua jornada
          de bem-estar.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 max-w-6xl justify-items-center place-items-center">
        {teamMembers.map((member, index) => (
          <CardTeam
            key={index}
            name={member.name}
            image={member.image}
            role={member.role}
            links={member.links}
          />
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
