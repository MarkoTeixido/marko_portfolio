import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AppContext } from "../context/AppContext";
import ModeLight from "../../public/IconsSVG/modeLight.svg";
import ModeDark from "../../public/IconsSVG/modeDark.svg"
import Bars from "../../public/IconsSVG/bars.svg";
import XMark from "../../public/IconsSVG/x-mark.svg";
import esJson from "../languages/es/es.json";
import enJson from "../languages/en/en.json";

interface Styles {
  container: string;
  ul: string;
};

const Navbar = () => {
  //context
  const context = useContext(AppContext);
  
  //light/dark theme toggle
  const toggleTheme = () => {
    const currentTheme = context.theme === "light" ? "dark" : "light";
    context.setTheme(currentTheme);

    localStorage.theme = currentTheme;

    if (currentTheme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    } 
  };

  //language toggle
  const toggleLanguage = () => {
    context.setLanguage(context.language === "ES" ? "EN" : "ES");
    context.setContent(context.language === "ES" ? enJson : esJson);
  };
  
  //navbar mobile toggle
  const toggleMenu = () => {
    context.setIsOpenNavbarMobile(!(context.isOpenNavbarMobile));
  };

  useEffect(() => {
    if (context.isOpenNavbarMobile) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [context.isOpenNavbarMobile]);

  //navbar styles responsive
  const [styles, setStyles] = useState<Styles>({
    container: "",
    ul: ""
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setStyles({
          container: `absolute max-w-[800px] top-[3.5rem] left-0 z-20 flex flex-col justify-center ${context.isOpenNavbarMobile ? "" : "hidden"}`,
          ul: "w-screen h-screen top-0 z-20 p-5 flex flex-col items-center gap-4 bg-slate-50 dark:bg-gray-700 text-md dark:text-slate-50 text-zinc-400"
        });
      } else {
        setStyles({
          container: `${context.isOpenNavbarMobile ? "block" : ""}`,
          ul: "flex gap-12 text-md dark:text-slate-50 text-zinc-400"
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [context.isOpenNavbarMobile]);

  return (
    <header>
      <nav id="home" className="flex justify-between items-center py-4 px-2">
        <div className="cursor-pointer flex items-center gap-[1ch]">
          <div className="w-5 h-5 bg-blue-700 rounded-full" />
          <span className="dark:text-white text-lg font-semibold tracking-widest">M!</span>
        </div>
        <div className="flex justify-between items-center gap-12 max-md:gap-3">
          <div className="flex gap-3">
            <button onClick={toggleLanguage} aria-label="language mode" className="text-xs font-medium dark:text-slate-50 dark:hover:text-black text-zinc-500 border border-zinc-400 hover:bg-zinc-300 hover:text-zinc-800 rounded-full py-1 px-2 w-9 transition duration-200 hover:ease-linear"> 
              {context.language === "ES" ? "EN" : "ES" }
            </button>
            <button onClick={toggleTheme} aria-label="light/dark theme" className="text-md font-normal dark:text-slate-50 dark:hover:text-black text-zinc-500 border border-zinc-400 hover:bg-zinc-300 hover:text-zinc-800 rounded-full py-1 px-2 transition duration-200 hover:ease-linear">
              {context.theme === "light" ? <ModeLight strokeWidth="2" /> : <ModeDark strokeWidth="2" />}
            </button>
          </div>
          <div>
            <div className={styles.container}>
              <ul className={styles.ul}>
                <li>
                  <Link href="#home" className="focus:text-black focus:font-medium hover:text-zinc-700 dark:hover:dark:hover:text-white/75 transition duration-200 hover:ease-linear">{context.content.navbar.home}</Link>
                </li>
                <li>
                  <Link href="#projects" className="focus:text-black focus:font-medium hover:text-zinc-700 dark:hover:dark:hover:text-white/75 transition duration-200 hover:ease-linear">{context.content.navbar.projects}</Link>
                </li>
                <li>
                  <Link href="#contact" className="focus:text-black focus:font-medium hover:text-zinc-700 dark:hover:dark:hover:text-white/75 transition duration-200 hover:ease-linear">{context.content.navbar.contact}</Link>
                </li>
              </ul>
            </div>
            <div>
              <button onClick={toggleMenu} aria-label="mobile menu toggle" className="md:hidden text-md font-normal dark:text-slate-50 dark:hover:text-black text-zinc-500 border border-zinc-400 hover:bg-zinc-300 hover:text-zinc-800 rounded-full py-1 px-2 transition duration-200 hover:ease-linear">
                {context.isOpenNavbarMobile === false ? <Bars strokeWidth="2" /> : <XMark strokeWidth="2" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header> 
  );
};

export default Navbar;
