import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const AboutCard = () => {
  //context
  const context = useContext(AppContext);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="bg-zinc-200 dark:bg-slate-700 flex max-sm:p-6 p-10 rounded-3xl">
          <div className="relative w-full">
            <div className="absolute top-0 -right-2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="absolute top-0 -bottom-6 -right-2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
              <div className="absolute top-4 -bottom-8 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-14 -right-6 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="absolute -bottom-16 -right-6 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="absolute -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
              <div className="max-sm:m-2 md:m-8 relative space-y-4 flex flex-col gap-5">
                <div className="lg:hidden relative top-1/2 transform max-md:-translate-y-1/8 flex justify-center">
                  <div className="max-md:w-[4.9rem] max-md:h-[5rem] w-[7.7rem] h-[8rem] border-2 border-indigo-200 bg-[url('/ProfilePics/profile8.png')] bg-cover bg-center transform scale-[1.3] rounded-full"></div>
                </div>
                <h1 className="dark:text-slate-50 max-md:text-2xl md:text-[2.7rem] tracking-tighter font-semibold">
                 {context.content.aboutCard.title}
                </h1>
                <p className="dark:text-slate-50 flex-1 mt-5">
                  {context.content.aboutCard.text}
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-4 md:pt-10 justify-self-end">
                  <a href='/CV/CV_compressed.pdf' download='CV_compressed.pdf' target='_blank' rel='noreferrer' className="dark:text-black dark:bg-slate-100 text-center bg-black text-white max-sm:font-normal font-medium py-3 px-12 max-sm:w-[14rem] rounded-full w-60 lg:w-auto hover:opacity-80 transition duration-200 hover:ease-linear">
                    {context.content.aboutCard.buttonDownload}
                  </a>
                  <a href="#contact" className="dark:text-white dark:border-slate-200 dark:hover:bg-slate-100 dark:hover:text-black text-center max-sm:font-normal font-medium py-3 px-12 max-sm:w-[14rem] rounded-full w-60 lg:w-auto border border-black transition duration-200 hover:ease-linear hover:bg-black hover:text-white">
                    {context.content.aboutCard.buttonAbout}
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="max-lg:hidden h-full rounded-3xl p-8 overflow-hidden">
          <div className="bg-cover bg-center transform scale-[1.2]" style={{ backgroundImage: 'url(/ProfilePics/profile4.png)', height: '100%', width: '100%' }} />
        </div>
    </section>
  );
};

export default AboutCard;
