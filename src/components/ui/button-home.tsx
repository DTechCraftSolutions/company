"use client";
import { ComponentProps } from "react";
import { useRouter } from "next/navigation";

interface ButtonProps extends ComponentProps<"button"> {}
export function Button({ children }: ButtonProps) {
  const router = useRouter();
  function handleClick() {
    router.push("/#home");
  }
  return (
    <button
      onClick={handleClick}
      className="bg-primary lg:px-28 px-14 py-1 lg:py-4 rounded-full hover:bg-opacity-80
      transition-colors duration-300"
    >
      {children}
    </button>
  );
}

interface ButtonTextProps extends ComponentProps<"span"> {
  children: string;
  color: string;
}
export function ButtonText({ children, color }: ButtonTextProps) {
  return (
    <span className={`text-${color} lg:text-xl text-sm font-bold`}>
      {children}
    </span>
  );
}
