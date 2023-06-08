"use client";
import { useState } from "react";
import Logo from "./payload/Logo";
import Icon from "./Icon";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-row gap-12 items-center justify-start w-screen sticky top-[0] z-[10] bg-gradient-to-b from-light/100 via-light/20 to-light/0 pb-32 -mb-32">
      <div
        className={`container flex items-center justify-between gap-24 py-4`}
      >
        <Logo />

        <div className="hidden lg:flex flex-row gap-12 items-center relative w-full">
          <div className="grid gap-1 grow">
            <Label className="sr-only" htmlFor="search">
              Buscar
            </Label>
            <Input
              id="search"
              placeholder="Buscar"
              type="text"
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect="off"
              disabled={false}
              className="w-full"
            />
          </div>

          <div className="text-dark text-center whitespace-nowrap font-bold">
            Ver cursos
          </div>

          <div className="text-dark text-center whitespace-nowrap font-bold">
            Clases 1 a 1
          </div>

          <div className="text-dark text-center whitespace-nowrap font-bold">
            Marco teórico
          </div>

          <Link href={"/registrate"} className="block">
            <Button size="sm" variant="secondary">
              Ingresa
            </Button>
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

          <Link href={"/registrate"}>
            <Button variant="secondary">Ingresa</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
