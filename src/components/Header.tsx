import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import logo from "../assets/images/logos/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-24 max-w-5xl flex flex-col justify-center items-center">
      <nav className="grid md:grid-cols-[1fr,3fr,1fr] grid-cols-2 justify-items-stretch w-full">
        <div className="w-full flex flex-row justify-start items-center pl-4 md:pl-0">
          <img src={logo} alt="Logo" className="w-20 h-20" />
          <h1 className="text-[#629D8C] text-xs font-bold w-24">
            Nuvens de Algodão
          </h1>
        </div>

        <ul className="hidden md:flex gap-6 flex-row w-full justify-center items-center">
          <li>
            <a href="#" className="text-gray-900 text-base font-light">
              Início
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 text-base font-light">
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 text-base font-light">
              Nossos Serviços
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-900 text-base font-light">
              Consulta
            </a>
          </li>
        </ul>

        <div className="hidden md:flex flex-col justify-center items-end">
          <Button
            title="Contato"
            className="bg-orange-300 hover:bg-orange-400/75 transition-all duration-300 ease-in-out w-32 text-white"
          />
        </div>

        <div className="flex md:hidden justify-end items-center z-50 w-full pr-6">
          <div
            onClick={toggleMenu}
            className="p-2 shadow-sm flex flex-row gap-2 items-center px-4"
          >
            <motion.button
              className="text-gray-900 text-2xl focus:outline-none"
              aria-label="Menu"
              whileTap={{ scale: 0.9 }}
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isMenuOpen ? "✖" : "☰"}
            </motion.button>
          </div>
        </div>
      </nav>

      <motion.div
        className="md:hidden flex flex-col bg-white w-full absolute top-24 left-0 p-4 shadow-md"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: isMenuOpen ? 0 : "-100%", opacity: isMenuOpen ? 1 : 0 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <ul className="flex flex-col gap-4">
          <li>
            <a
              href="#"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 text-base font-light"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 text-base font-light"
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 text-base font-light"
            >
              Nossos Serviços
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 text-base font-light"
            >
              Consulta
            </a>
          </li>
        </ul>
        <div className="mt-4">
          <Button
            title="Contato"
            className="bg-orange-300 hover:bg-orange-400/75 transition-all duration-300 ease-in-out w-full text-white"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
