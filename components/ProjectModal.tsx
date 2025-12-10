"use client";

import { motion } from "framer-motion";
import { ChevronDown, Github, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Project, useLanguage } from "@/context/LanguageContext";

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    const { t } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card w-full max-w-2xl rounded-2xl border border-border shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            >
                <div className="relative aspect-video bg-muted shrink-0">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-8"
                    />
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-background/50 backdrop-blur-md rounded-full hover:bg-background transition-colors"
                    >
                        <ChevronDown size={20} className="rotate-180" />
                        <span className="sr-only">Close</span>
                    </button>
                </div>
                <div className="p-6 space-y-6 overflow-y-auto">
                    <div className="space-y-4">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <h2 className="text-2xl font-bold">{project.title}</h2>
                            <div className="flex gap-3">
                                <Link
                                    href={project.linkRepo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity rounded-full shadow-sm"
                                >
                                    <Github size={16} />
                                    <span>{t.projects.viewCode}</span>
                                </Link>
                                <Link
                                    href={project.linkDemo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition-opacity rounded-full shadow-sm"
                                >
                                    <Globe size={16} />
                                    <span>{t.projects.viewLive}</span>
                                </Link>
                            </div>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            {project.tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 text-xs font-medium border border-border/40 rounded-full text-muted-foreground">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {project.description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}
