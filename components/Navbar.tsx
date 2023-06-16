"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./payload/Logo";
import Icon from "./Icon";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import SearchBar from "./SearchBar";

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
    open: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    closed: {
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 0%, 0% 0%)",
    },
  };

  return (
    <div className="flex flex-row gap-12 items-center justify-start w-screen sticky top-[0] z-[10] bg-gradient-to-b from-light/100 via-light/20 to-light/0 pb-32 -mb-32 select-none">
      <div
        className={`container flex items-center justify-between gap-24 py-4`}
      >
        <Logo />

        <div className="hidden lg:flex flex-row gap-12 items-center relative w-full">
          <SearchBar />

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
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.div
            className={`flex xl:hidden fixed top-0 left-0 w-screen flex-col items-center justify-start h-screen bg-white/70 backdrop-blur-sm`}
            variants={menuVariants}
            initial="closed"
            animate={"open"}
            exit="closed"
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
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
