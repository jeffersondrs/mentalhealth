import facebook from "../assets/images/logos/facebook.svg";
import linkedin from "../assets/images/logos/linkedin.png";
import twitter from "../assets/images/logos/youtube.svg";
import instagram from "../assets/images/logos/instagram.svg";
import logo from "../assets/images/logos/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#629D8C] flex flex-col w-full h-full justify-center items-center gap-4 md:py-20 p-4 max-w-screen-2xl">
      <div className="grid grid-cols-1 justify-items-center place-items-center w-full h-full md:grid-cols-2 max-w-5xl">
        <div className="flex flex-col gap-4 items-center justify-start">
          <div className="w-full flex flex-row justify-start items-center">
            <img src={logo} alt="Logo" className="w-20 h-20" />
            <h1 className="text-[#F9F9F9] text-sm font-extralight w-20">
              Nuvens de Algodão
            </h1>
          </div>
          <p className="text-white text-start text-sm font-light max-w-[500px]">
            O Centro Psicolóco Nuvens de Algodão é um centro de saúde mental
            compassivo e holístico dedicado a fornecer atendimento personalizado
            para indivíduos que buscam bem-estar emocional e paz interior
          </p>
          <ul className="flex gap-6 flex-row w-full justify-start">
            <li>
              <a href="#">
                <img src={facebook} alt="Facebook" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={instagram} alt="LinkedIn" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={twitter} alt="Twitter" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src={linkedin} alt="Facebook" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 w-full py-4 md:p-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-lg">Empresa</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Time
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-lg">Suporte</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Testemunhos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-lg">Fique por dentro</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Alerta por Email
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Novas Ofertas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Dicas de bem-estar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-sm font-light cursor-pointer"
                >
                  Atualização de eventos
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full md:flex-row justify-center md:col-span-2 py-2 gap-2">
          <p className="text-white text-xs font-light">
            © 2024 Nuvens de Algodão. Todos os direitos reservados.
          </p>
          <p className="text-white text-xs font-light">
            Desenvolvido por{" "}
            <a
              href="https://www.jeffersondrs.dev/"
              target="_blank"
              rel="noopener"
              className="text-yellow-300 text-xs font-light hover:text-yellow-400"
            >
              Jefferson Santos
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
