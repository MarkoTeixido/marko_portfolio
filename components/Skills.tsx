"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
    SiJavascript, SiTypescript, SiNextdotjs, SiReact, SiTailwindcss,
    SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, SiMysql, SiSequelize, SiMongodb,
    SiDocker, SiGit, SiGithub, SiGithubactions, SiVitest,
    SiPostman, SiFigma
} from "react-icons/si";
const FigmaIcon = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
    <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
        alt="Figma"
        className={`w-12 h-12 md:w-16 md:h-16 opacity-30 ${className}`}
        style={style}
    />
);

export default function Skills() {
    const { t } = useLanguage();

    const row1 = [
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Next.js", icon: SiNextdotjs, color: "var(--foreground)" },
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Figma", icon: FigmaIcon, color: "" }, // Multicolor icon, no tint needed
        { name: "Postman", icon: SiPostman, color: "#FF6C37" },
        { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
    ];

    const row2 = [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "var(--foreground)" },
        { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "Sequelize", icon: SiSequelize, color: "#52B0E7" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "var(--foreground)" },
    ];

    return (
        <section id="skills" className="py-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">
                        {t.skills.title}
                    </h2>
                </div>

                <div className="relative flex flex-col gap-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    {/* Row 1 - Left */}
                    <Marquee items={row1} direction="left" speed={40} />

                    {/* Row 2 - Right */}
                    <Marquee items={row2} direction="right" speed={40} />
                </div>
            </motion.div>
        </section>
    );
}

interface MarqueeItem {
    name: string;
    icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
    color: string;
}

const Marquee = ({ items, direction, speed }: { items: MarqueeItem[], direction: "left" | "right", speed: number }) => {
    return (
        <div className="flex overflow-hidden select-none">
            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: speed,
                }}
                className="flex flex-shrink-0 gap-16 py-4 px-8 min-w-full"
            >
                {[...items, ...items].map((skill, index) => (
                    <div
                        key={`${skill.name}-${index}`}
                        className="group relative flex flex-col items-center justify-center gap-4 cursor-pointer"
                        style={{ "--skill-color": skill.color } as React.CSSProperties}
                    >
                        <skill.icon
                            className="text-5xl md:text-6xl text-muted-foreground/30 transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 group-hover:text-[var(--skill-color)]"
                        />
                        <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium tracking-wider text-muted-foreground whitespace-nowrap">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
