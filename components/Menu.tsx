"use client";
import { motion } from "framer-motion";
import Icon from "./Icon";

export const Menu = ({ items, selected }: any) => {
  return (
    <div className="flex">
      <ul className="block relative w-full">
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
        <li
          className={`flex flex-col lg:flex-row gap-4 w-full items-center px-2 lg:px-6 cursor-pointer mt-auto py-6`}
          onClick={() => {
            alert("Cerrando sesión");
          }}
        >
          <Icon variant="salida" extraClassName="!h-8 !w-8" />
          <span className="font-default text-center lg:text-left text-lg">
            Salir
          </span>
        </li>
      </ul>
    </div>
  );
};

export const MenuItem = ({ href, selected, children, icon }: any) => {
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
        {icon && <Icon variant={icon} extraClassName="!h-8 !w-8" />}
        <p className="order-last font-default text-lg ">{children}</p>
      </motion.li>
    </a>
  );
};

export const MenuSelectedIndicator = () => {
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
