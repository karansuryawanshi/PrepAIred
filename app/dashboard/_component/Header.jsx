"use client";
import React from "react";
import Image from "next/image";
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
  console.log(pathname);

  return (
    <div className="flex p-4 items-center bg-secondary shadow-md justify-between ">
      <Image
        src={"/dummyLogo.svg"}
        width={100}
        height={10}
        alt="logo"
        className="dark:invert"
      />
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
