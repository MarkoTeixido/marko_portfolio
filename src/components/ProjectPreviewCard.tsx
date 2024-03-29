import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Arrow from "../../public/IconsSVG/arrow.svg";

interface Props {
  name?: string | undefined;
  description?: string | undefined;
  urlProject?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
}

const ProjectPreview: React.FC<Props> = ({
  name = "project name",
  description = "This is an amazing project",
  urlProject = "",
  imageUrl = "https://i.imgur.com/wO7okdu.png",
  bgColor = "#e4e4e7",
  dark = false,
}) => {
  return (
    <motion.div
      className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ background: `${bgColor}` }}
      initial="initial"
      whileInView="animate"
      variants={PreviewAnimation}
    >
      <a href={urlProject}>
        <article className="h-full w-full max-md:p-6 md:px-10 md:py-6 duration-500ms hover:scale-105 transition-all ease-in-out relative">
          <div className="absolute inset-0">
            <Image
              src={imageUrl}
              alt="Descripción de la imagen"
              width={800}
              height={800}
              quality={100}
              priority={true}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex justify-between relative z-10">
            <div>
              <h2 className={`font-medium text-lg ${dark ? "text-white" : ""}`}>{name}</h2>
              <p className={`text-sm ${dark ? "text-zinc-300" : "text-zinc-500"}`}>{description}</p>
            </div>
            <div>
              <div className="max-sm:w-10 max-sm:h-10 md:h-12 md:w-12 max-md:p-2 bg-white rounded-full flex justify-center items-center cursor-pointer">
                <Arrow className="w-6 h-6" />
              </div>
            </div>
          </div>
        </article>
      </a>
    </motion.div>
  );
};

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};

export default ProjectPreview;
