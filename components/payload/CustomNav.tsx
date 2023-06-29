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
import { Menu } from "../Menu";
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
  const {
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

export default CustomNav;
