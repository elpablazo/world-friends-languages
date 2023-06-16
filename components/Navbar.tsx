"use client";
import { useState } from "react";
import { motion } from "framer-motion";
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

  const links = [
    { href: "/cursos", label: "Ver cursos" },
    { href: "/clases", label: "Clases 1 a 1" },
    { href: "/marco-teorico", label: "Marco teórico" },
  ];

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
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

          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="text-dark text-center whitespace-nowrap font-bold"
            >
              {link.label}
            </Link>
          ))}

          <Link href={"/registrate"} className="block">
            <Button size="sm" variant="secondary">
              Ingresa
            </Button>
          </Link>
        </div>
        <div className="xl:hidden cursor-pointer" onClick={toggleMenu}>
          <Icon variant={"menu"} />
        </div>
      </div>

      <motion.div
        className={`${
          isMenuOpen ? "flex xl:hidden" : "hidden"
        } xl:hidden fixed top-0 left-0 w-screen flex-col items-center justify-start h-screen bg-white/70 backdrop-blur-sm`}
        variants={menuVariants}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
      >
        <div className="flex flex-col gap-8 items-center justify-center py-4 w-full">
          <div className="container">
            <div className="grid gap-4 grow w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <Logo />
                <div onClick={toggleMenu}>
                  <Icon variant={"menu"} />
                </div>
              </div>
              <div className="grid gap-1 grow w-full">
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
              <div className="grid gap-0 my-2">
                {links.map((link, i) => (
                  <Link
                    href={link.href}
                    className="text-dark text-center py-4 border-b border-gray-light w-full last:border-none text-lg"
                    key={i}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                href={"/registrate"}
                className="flex mx-auto w-full max-w-sm"
              >
                <Button variant="secondary" className="w-full">
                  Ingresa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
