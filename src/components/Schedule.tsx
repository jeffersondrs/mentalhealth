import Button from "./Button";

const StartHealing = () => {
  return (
    <section className="flex flex-col items-center justify-center p-4 md:py-20 w-full max-w-screen-2xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-5xl justify-items-center place-items-center">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-4xl text-start mb-2 max-w-80">
            Comece sua jornada de cura hoje
          </h1>
          <p className="text-sm md:text-base text-gray-900 text-start">
            Nunca é muito cedo ou muito tarde para buscar ajuda. Nossos
            especialistas estão aqui para orientá-lo em cada passo do caminho.
          </p>
        </div>
        <div className="flex flex-col w-full justify-center items-center mb-2">
          <Button
            title="Agendar"
            className="bg-[#629D8C] text-white text-sm !py-2 w-full max-w-48 hover:bg-[#4E7C6C] transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </section>
  );
};

export default StartHealing;
