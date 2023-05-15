"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useConfig, useAuth } from "payload/components/utilities";
import Icon from "./Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MenuContainer from "../MenuContainer";
import { motion } from "framer-motion";

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
    <div className="hidden lg:block relative bg-white min-h-screen h-full w-[420px]">
      <div className="px-4 py-12">
        <div className="flex justify-center">
          <Link className="block" href={"/admin"}>
            <div className="relative h-10">
              <Icon />
            </div>
          </Link>
          <hr />
          <MenuContainer
            items={[
              {
                label: "Ventas",
                href: "/admin",
              },
              {
                label: "Subir productos",
                href: "/admin/productos/subir",
              },
              {
                label: "Configuración",
                href: "/admin/configuracion",
              },
            ]}
            selected={pathname}
          >
            <div>hola</div>
          </MenuContainer>
        </div>
      </div>
    </div>
  );
};

function Menu({ items, selected }: any) {
  return (
    <>
      {items.map(({ href, label, icon }: any) => (
        <>
          <MenuItem
            key={href}
            href={href}
            icon={icon}
            selected={selected === href}
          >
            {label}
          </MenuItem>
          <hr className="border-dark/5 hidden lg:block" />
        </>
      ))}

      <ul className="block relative w-full">
        <li
          className={`flex flex-col lg:flex-row gap-2 w-full items-center lg:justify-between px-2 lg:px-6 cursor-pointer`}
          onClick={() => {
            alert("Cerrando sesión");
          }}
        >
          <span className="order-last lg:order-first text-center lg:text-left">
            Salir
          </span>
        </li>
      </ul>
    </>
  );
}

function MenuItem({ href, selected, children, icon }: any) {
  return (
    <Link
      href={href}
      className="block relative w-full text-center lg:text-left h-[22px]"
    >
      {selected && <MenuSelectedIndicator />}
      <motion.li
        className={`flex flex-col lg:flex-row gap-2 !z-[1] w-full lg:justify-between px-2 lg:px-6 cursor-pointer items-center ${
          selected && "!text-secondary"
        }`}
      >
        <motion.p className="order-last lg:order-first">{children}</motion.p>
      </motion.li>
    </Link>
  );
}

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
      className="absolute w-full h-full pointer-events-none"
    >
      <div className="relative w-full h-full inset-0">
        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 bg-gradient-to-b lg:bg-gradient-to-l -translate-x-1/2 from-secondary/10 to-secondary/0 w-full lg:w-[calc(100%+1rem)] h-[calc(100%+1rem)] lg:h-[calc(100%+3rem)] border-t-4 lg:border-t-0 lg:border-r-4 border-secondary" />
      </div>
    </motion.div>
  );
};

export default CustomNav;
