"use client";

import { motion } from "framer-motion";
import { Menu } from "./Menu";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./payload/Logo";

const menuItems = [
  {
    label: "Inicio",
    href: "/dashboard",
    icon: "casa",
  },
  {
    label: "Mis compras",
    href: "/dashboard/mis-compras",
    icon: "bolsa",
  },
  {
    label: "Ajustes",
    href: "/dashboard/ajustes",
    icon: "engrane",
  },
];

export default function MenuContainer({ children = null }: any) {
  const pathname = usePathname();

  return (
    <div className="relative grid lg:grid-cols-12 gap-0">
      <div className="lg:col-span-3 flex-col gap-6 lg:py-2 lg:h-screen w-screen lg:w-auto fixed bottom-0 left-0 lg:relative z-[1]">
        <motion.div className="text-xs lg:text-xl flex lg:flex-col lg:gap-6 font-bold lg:pt-12 max-w-screen items-stretch bg-white text-primary">
          <Link className="hidden lg:block" href={"/admin"}>
            <div className="relative flex items-center justify-center h-10">
              <Logo />
            </div>
          </Link>
          <hr className="hidden lg:block" />
          <Menu
            items={menuItems}
            // selected={"/dashboard/mis-compras"}
            selected={pathname}
          />
        </motion.div>
      </div>
      <div
        className={`relative lg:col-span-9 pb-48 py-12 space-y-4 overflow-auto text-center items-center flex flex-col h-screen bg-gradient-to-br from-gray-light/50 via-transparent to-transparent`}
      >
        {children}
      </div>
    </div>
  );
}
