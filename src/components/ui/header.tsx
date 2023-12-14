"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

export function HeaderComponent() {
  const [scrolled, setScrolled] = useState("invisible");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setScrolled(
          "visible bg-secondary shadow-xl w-screen fixed z-[1000] "
        );
      }
      // if (window.scrollY < 750) {
      //   setScrolled("invisible");
      // }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.1 }}
      className={`${scrolled} "bg-secondary shadow-xl w-screen md:h-20 h-10 fixed z-[1000]
       transition-all duration-700`}
    >
      <div
        className="flex justify-between items-center w-full h-20 max-w-[85%] lg:max-w-[1300px] mx-auto 
        "
      >
        <div className="md:w-12 w-7 -mt-9 md:-mt-0">
          <Image src="/logo-header.png" alt="logo" width={100} height={100} />
        </div>
        <div>
          <div className="md:hidden -mt-9 text-white cursor-pointer">
            <MenuOutlined />
          </div>
          <ul className="hidden md:flex gap-10 text-white font-bold">
            <Link href="/#benefit">
              <li className="hover:text-primary transition-all duration-300">
                Benefícios
              </li>
            </Link>
            <Link href="/#home">
              <li className="hover:text-primary transition-all duration-300">
                Demonstração
              </li>
            </Link>
            <Link href="/#home">
              <li className="hover:text-primary transition-all duration-300">
                Preços
              </li>
            </Link>
            <Link href="/#home">
              <li className="hover:text-primary transition-all duration-300">
                Contato
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
