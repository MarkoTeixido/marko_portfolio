import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import SocialButton from "../components/SocialButton";
import Github from "../../public/IconsSVG/github.svg";
import Linkedin from "../../public/IconsSVG/linkedin.svg";

const Footer = () => {
    //context
    const context = useContext(AppContext);

    return (
        <footer id="contact" className="dark:bg-gray-500 bg-zinc-200 grid grid-cols-1 max-sm:p-6 p-10 rounded-3xl gap-4 mb-4">
            <h3 className="dark:text-slate-50 max-sm:text-4xl text-[2.7rem] font-semibold">{context.content.footer.title}</h3>
            <p className="dark:text-slate-50 flex-1">{context.content.footer.text}</p>
            <div className="flex flex-col md:flex-row items-center gap-4 text-center max-sm:pt-5 pt-10">
                <a href="mailto:teixido_marko@outlook.es" target="_blank" rel="noopener noreferrer" aria-label="Email" className="dark:text-black dark:bg-slate-100 cursor-pointer bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:opacity-80 transition duration-200 hover:ease-linear">
                {context.content.footer.buttonContact}
                </a>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/MarkoTeixido">
                        <SocialButton bgColor="github">
                            <Github className="w-6 h-6" />
                        </SocialButton>        
                    </a>
                    <a href="https://www.linkedin.com/in/marcos-teixido-5b506326b/">
                        <SocialButton bgColor="linkedin">
                            <Linkedin className="w-5 h-5" />
                        </SocialButton>   
                    </a>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;