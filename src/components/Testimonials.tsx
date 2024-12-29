import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 md:py-20 p-4 w-full max-w-screen-2xl">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 max-w-5xl justify-items-center place-items-center">
        <div className="flex flex-col gap-2 items-start">
          <span className="pl-1 text-xs text-[#629D8C]">Testemunhos</span>
          <h1 className="text-2xl md:text-4xl text-start mb-2">
            O que nossos clientes estão dizendo
          </h1>
          <iframe
            className="w-full h-52 md:h-72 rounded-2xl"
            src="https://www.youtube.com/embed/H714wnQn2uw?si=Jz6AIL33QJCLdcU6"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
        <div className="flex flex-col gap-2 items-start md:justify-end md:p-12 h-full md:pb-10 justify-center">
          <div className="flex flex-row gap-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} color="#629D8C" size={24} />
            ))}
          </div>
          <p className="text-sm md:text-base text-gray-900 text-start">
            &#34;Nuvens de Algodão transformou minha vida. O apoio e a
            orientação que recebi foram realmente inestimáveis.&#34;
          </p>
          <div>
            <p className="text-sm md:text-base text-gray-500 text-start">Maria Silva</p>
            <span className="text-xs text-gray-800">Cliente</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
