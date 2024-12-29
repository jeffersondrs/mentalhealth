import CardOffers from "./CardOffers";
import medicine from "../assets/images/medicine/medicine.png";
import mental from "../assets/images/mental-health/mental-health.png";
import peace from "../assets/images/peace-of-mind/peaceofmind.png";

const Offers = () => {
  return (
    <section className="flex flex-col w-full h-full justify-center items-center gap-4 md:py-14">
      <div className="w-full max-w-5xl grid grid-cols-1">
        <div className="p-4">
          <div>
            <span className="text-[#629D8C] text-xs pl-1">O que oferecemos</span>
            <h1 className="text-2xl max-w-96 md:text-3xl">
              Explore nossos serviços abrangentes de bem-estar
            </h1>
          </div>
          <p className="text-sm text-gray-500 max-w-96">
            Acreditamos que a saúde mental é uma jornada e toda jornada merece
            orientação personalizada.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:mt-5 w-full justify-items-center">
          <CardOffers
            title="Planos de Saúde Mental Personalizados"
            image={mental}
            className="bg-teal-200"
          />
          <CardOffers
            title="Profissionais Compassivos e Qualificados"
            image={medicine}
            className="bg-[#BFD7D0]"
          />
          <CardOffers
            title="Abordagem de cura holística"
            image={peace}
            className="bg-[#FFE5D5]"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;
