"use client";
import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
// import image from "../../../public/images/logo.png";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex p-4 items-center bg-secondary shadow-md justify-between">
      <Image
        className=""
        src={"/dummyLogo.svg"}
        width={100}
        height={10}
        alt="logo"
      />
      <ul className="hidden md:flex gap-6">
        <li
          className={`transition-all duration-300 hover:text-purple-700 hover:scale-105 cursor-pointer
            ${pathname == "/dashboard" && "text-purple-700 scale-105"}`}
        >
          Dashboard
        </li>
        <li
          className={`transition-all duration-300 hover:text-purple-700 hover:scale-105 cursor-pointer
            ${pathname == "/question" && "text-purple-700 scale-105"}`}
        >
          Questions
        </li>
        <li
          className={`transition-all duration-300 hover:text-purple-700 hover:scale-105 cursor-pointer
            ${pathname == "/upgrade" && "text-purple-700 scale-105"}`}
        >
          Upgrade
        </li>
        <li
          className={`transition-all duration-300 hover:text-purple-700 hover:scale-105 cursor-pointer
            ${pathname == "/working" && "text-purple-700 scale-105"}`}
        >
          How it Works?
        </li>
      </ul>

      <UserButton></UserButton>
    </div>
  );
};

export default Header;
