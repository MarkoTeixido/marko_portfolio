"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Project } from "@/context/LanguageContext";

interface ProjectCardProps {
    project: Project;
    onClick: (project: Project) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    const { t } = useLanguage();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group/card relative space-y-4"
        >
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative group/image">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover/image:scale-105"
                />
                <div className="absolute inset-0 bg-background/20 backdrop-blur-sm opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                        href={project.linkDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-foreground text-background font-medium rounded-full transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                        {t.projects.viewDemo}
                    </Link>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold group-hover/card:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <Link
                            href={project.linkRepo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <ArrowUpRight size={18} />
                        </Link>
                    </div>
                </div>
                <p className="text-muted-foreground line-clamp-2 text-sm">
                    {project.description}
                </p>
                <button
                    onClick={() => onClick(project)}
                    className="text-xs font-medium text-primary hover:underline underline-offset-4"
                >
                    {t.projects.readMore || "Leer más"}
                </button>
                <div className="flex gap-2 flex-wrap pt-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs font-medium border border-border/40 rounded-full text-muted-foreground bg-transparent hover:border-primary/30 hover:text-foreground transition-all duration-300 group-hover/card:border-border/60">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
