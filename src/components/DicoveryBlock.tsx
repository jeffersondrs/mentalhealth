const DiscoveryBlock = () => {
  return (
    <section className="flex flex-row justify-center items-center w-full max-w-screen-2xl bg-gray-50 py-6 md:py-24">
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center w-full max-w-5xl md:gap-6 mx-auto">
        <figure className="flex flex-col justify-center items-center w-full p-4 md:p-0">
          <img
            src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Discovery"
            className="w-full max-h-80 object-cover rounded-2xl"
          />
          <figcaption className="text-center text-[7px] text-gray-500">
            Foto por
            <a
              href="https://unsplash.com/@priscilladupreez"
              className="underline"
            >
              Priscilla Du Preez 🇨🇦
            </a>
            no
            <a
              href="https://unsplash.com/photos/woman-wearing-gray-jacket-F9DFuJoS9EU"
              className="underline"
            >
              Unsplash
            </a>
          </figcaption>
        </figure>
        <div className="flex flex-col justify-between gap-2 items-start p-4 md:p-0">
          <h1 className="text-2xl md:text-4xl font-normal w-full">
            Descubra os benefícios transformadores de escolher o Centro
            Psicológico Nuvens de Algodão para o seu cuidado
          </h1>
          <p className="text-base md:text-lg w-full">
            No Centro Psicolóco Nuvens de Algodão, priorizamos sua saúde
            emocional com cuidados personalizados e compassivos. Nossa gama
            diversificada de serviços garante que você receba o suporte
            necessário para prosperar e alcançar paz interior duradoura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DiscoveryBlock;
