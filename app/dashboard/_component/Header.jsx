"use client";
import React from "react";
import Image from "next/image";
import Logo from "@/public/assets/Logo.png";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Switch from "@mui/material/Switch";
import Slider from "./Slider/Slider";
import SpotlightCard from "@/src/blocks/TailwindComponents/SpotlightCard/SpotlightCard";

const Header = () => {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    document.documentElement.classList.toggle("dark", event.target.checked);
    localStorage.setItem("darkMode", event.target.checked);
  };

  const pathname = usePathname();

  return (
    <div className="flex px-4  items-center bg-secondary shadow-md justify-between ">
      <span className="flex items-center">
        <Image
          src={"/assets/Logo.png"}
          width={100}
          height={10}
          alt="logo"
          className="dark:invert"
        />
        <p className="text-2xl font-bold">
          Prep<span className="text-red-600">AI</span>red
        </p>
      </span>
      <ul className="hidden md:flex gap-6">
        <li
          className={`transition-all duration-300 hover:text-black text-gray-700 hover:scale-105 cursor-pointer ${
            pathname == "/dashboard" && "text-purple-900  scale-105"
          }`}
        >
          Dashboard
        </li>
        <li
          className={`transition-all duration-300 hover:text-black text-gray-700  hover:scale-105 cursor-pointer ${
            pathname == "/question" && "text-purple-700  scale-105"
          }`}
        >
          Questions
        </li>
        <li
          className={`transition-all duration-300 hover:text-black text-gray-700  hover:scale-105 cursor-pointer ${
            pathname == "/upgrade" && "text-purple-700  scale-105"
          }`}
        >
          Upgrade
        </li>
        <li
          className={`transition-all duration-300 hover:text-black text-gray-700  hover:scale-105 cursor-pointer ${
            pathname == "/working" && "text-purple-700  scale-105"
          }`}
        >
          How it Works?
        </li>
      </ul>
      <div className="flex items-center gap-4">
        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
