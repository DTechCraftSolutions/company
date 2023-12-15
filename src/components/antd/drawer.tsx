import React, { useState } from "react";
import { Drawer } from "antd";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";

export function MenuDrawerComponent() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        onClick={showDrawer}
        className="md:hidden -mt-8 text-white cursor-pointer"
      >
        <MenuOutlined />
      </div>

      <Drawer placement="left" onClose={onClose} open={open}>
        <ul
          className="flex flex-col justify-center items-center mt-14 space-y-28
         text-secondary font-bold"
        >
          <Link href="/#home" onClick={onClose}>
            <li className="hover:text-primary transition-all duration-300">
              Inicio
            </li>
          </Link>

          <Link href="/#benefit" onClick={onClose}>
            <li className="hover:text-primary transition-all duration-300">
              Benefícios
            </li>
          </Link>
          <Link href="/#demonstration" onClick={onClose}>
            <li className="hover:text-primary transition-all duration-300">
              Demonstração
            </li>
          </Link>
          <Link href="/#home" onClick={onClose}>
            <li className="hover:text-primary transition-all duration-300">
              Preços
            </li>
          </Link>
          <Link href="/#home" onClick={onClose}>
            <li className="hover:text-primary transition-all duration-300">
              Contato
            </li>
          </Link>
        </ul>
      </Drawer>
    </>
  );
}
