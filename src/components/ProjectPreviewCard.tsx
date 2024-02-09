import React from "react";
import Arrow from "../../public/IconsSVG/arrow.svg";
import { motion } from "framer-motion";

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
  imageUrl = "/ProjectsPics/project-1.png",
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
        <article className="h-full w-full px-10 py-6 duration-[500ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out" style={{ backgroundImage: `url('${imageUrl}')` }}>
          <div className=" flex justify-between">
            <div>
              <h2 className={`font-medium text-lg ${dark ? "text-white" : ""}`}>{name}</h2>
              <p className={`text-sm ${dark ? "text-zinc-300" : "text-zinc-500"}`}>{description}</p>
            </div>
            <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center cursor-pointer">
              <Arrow className="w-6 h-6" />
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
