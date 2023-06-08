"use client";
import { useState } from "react";
import Logo from "./payload/Logo";
import Icon from "./Icon";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row gap-12 items-center justify-start w-screen sticky top-[0] z-[10]">
      <div
        className={`container flex items-center justify-between gap-24 py-4`}
      >
        <Logo />

        <div className="hidden lg:flex flex-row gap-12 items-center relative">
          <div className="bg-gray-light rounded pt-2 pr-4 pb-2 pl-4 flex flex-row gap-2 items-center justify-start relative">
            <div className="text-dark text-center relative">
              Busca clases o cursos
            </div>
          </div>

          <div className="text-dark text-center">Ver cursos</div>

          <div className="text-dark text-center">Clases 1 a 1</div>

          <div className="text-dark text-center">Marco teórico</div>

          <Link href="/ingresa" className="hidden md:block">
            <div className="bg-secondary rounded flex flex-row gap-2 items-start justify-center relative px-3 py-1">
              <div className="text-light text-center">Ingresa</div>
            </div>
          </Link>
        </div>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <Icon variant={"menu"} />
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "flex lg:hidden" : "hidden"
        } md:hidden fixed top-0 left-0 w-screen flex-col items-center justify-center h-screen bg-white`}
      >
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <Icon variant={"menu"} />
          </div>
          <div className="text-dark text-center">Busca clases o cursos</div>

          <div className="text-dark text-center">Ver cursos</div>

          <div className="text-dark text-center">Clases 1 a 1</div>

          <div className="text-dark text-center">Marco teórico</div>

          <div className="bg-secondary rounded flex flex-row gap-2 items-start justify-center relative px-3 py-1">
            <div className="text-light text-center">Ingresa</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
