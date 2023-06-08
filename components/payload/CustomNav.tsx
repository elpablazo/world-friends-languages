"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useConfig, useAuth } from "payload/components/utilities";
import Logo from "./Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuContainer from "../MenuContainer";
import { motion } from "framer-motion";
import Icon from "../Icon";
const menuItems = [
  {
    label: "Inicio",
    href: "/admin",
    icon: "casa",
  },
  {
    label: "Cursos",
    href: "/admin/collections/cursos",
    icon: "calendario",
  },
  {
    label: "Clases",
    href: "/admin/collections/clases",
    icon: "webcam",
  },
  {
    label: "Blog",
    href: "/admin/collections/posts",
    icon: "documento",
  },
  {
    label: "Profesores",
    href: "/admin/collections/users",
    icon: "maletin",
  },
  {
    label: "Alumnos",
    href: "/admin/collections/students",
    icon: "estudiante",
  },
  {
    label: "Órdenes",
    href: "/admin/collections/ordenes",
    icon: "carrito",
  },
  {
    label: "Ajustes",
    href: "/admin/account",
    icon: "engrane",
  },
];

const CustomNav = () => {
  const { permissions, user } = useAuth();
  const [menuActive, setMenuActive] = useState(false);
  const [groups, setGroups] = useState([]);

  const { i18n } = useTranslation("general");

  const {
    collections,
    globals,
    routes: { admin },
    admin: {
      components: { beforeNavLinks, afterNavLinks },
    },
  } = useConfig();

  const pathname = usePathname();

  return (
    <div className="hidden lg:block bg-white min-h-screen h-full w-[420px] sticky top-0 left-0">
      <div className="px-4 py-12 relative">
        <div className="flex flex-col gap-12">
          <Link className="!block" href={"/admin"}>
            <div className="relative flex items-center justify-center h-10">
              <Logo />
            </div>
          </Link>
          <hr />

          <Menu items={menuItems} selected={pathname} />
        </div>
      </div>
    </div>
  );
};

function Menu({ items, selected }: any) {
  return (
    <div className="flex">
      <ul className="block relative w-full">
        {items.map(({ href, label, icon }: any) => (
          <>
            <AdminMenuItem
              key={href}
              href={href}
              icon={icon}
              selected={selected === href}
            >
              {label}
            </AdminMenuItem>
            <hr className="border-dark/5 hidden lg:block" />
          </>
        ))}
        <li
          className={`flex flex-col lg:flex-row gap-4 w-full items-center px-2 lg:px-6 cursor-pointer mt-auto py-6`}
          onClick={() => {
            alert("Cerrando sesión");
          }}
        >
          <Icon variant="salida" />
          <span className=" text-center lg:text-left font-bold text-lg">
            Salir
          </span>
        </li>
      </ul>
    </div>
  );
}

const AdminMenuItem = ({ href, selected, children, icon }: any) => {
  return (
    <a
      href={href}
      className="!block relative w-full text-center lg:text-left py-6"
    >
      {selected && <MenuSelectedIndicator />}
      <motion.li
        className={`flex flex-col lg:flex-row gap-4 !z-[1] w-full px-2 lg:px-6 cursor-pointer items-center ${
          selected && "!text-secondary"
        }`}
      >
        {icon && <Icon variant={icon} />}
        <p className="order-last font-bold text-lg ">{children}</p>
      </motion.li>
    </a>
  );
};

const MenuSelectedIndicator = () => {
  return (
    <motion.div
      animate={{
        transition: {
          ease: "easeOut",
          spring: 0,
          bounce: 0,
        },
      }}
      layoutId="menuIndicator"
      className="absolute w-full h-full pointer-events-none inset-0"
    >
      <div className="w-full h-full bg-gradient-to-l from-secondary/100 to-secondary/0 opacity-10"></div>
    </motion.div>
  );
};

export default CustomNav;
