"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import { useLanguage, Project } from "@/context/LanguageContext";
import { useClickOutside } from "@/hooks/useClickOutside";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
    const { t } = useLanguage();
    const projects = t.projects.list;

    // Extract unique tags derived from the current language's project list
    const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

    const [filter, setFilter] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const dropdownRef = useRef<HTMLDivElement>(null);
    useClickOutside(dropdownRef, () => setIsDropdownOpen(false));

    const filteredProjects = filter
        ? projects.filter((p) => p.tags.includes(filter))
        : projects;

    return (
        <section id="work" className="sm:py-10 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <h2 className="text-3xl font-bold tracking-tight">{t.projects.title}</h2>

                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-lg hover:bg-muted/20 transition-colors min-w-[150px] justify-between"
                        >
                            {filter || t.projects.allTechnologies}
                            <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute right-0 top-full mt-2 w-56 bg-background border border-border rounded-lg shadow-lg z-20 overflow-hidden"
                                >
                                    <div className="max-h-60 overflow-y-auto p-1 overscroll-contain" data-lenis-prevent>
                                        <button
                                            onClick={() => {
                                                setFilter(null);
                                                setIsDropdownOpen(false);
                                            }}
                                            className={`w-full text-left px-3 py-2 text-sm rounded-md transition-all ${filter === null ? "bg-muted font-medium shadow-sm" : "hover:bg-muted/50 hover:shadow-sm active:scale-[0.98]"
                                                }`}
                                        >
                                            {t.projects.allTechnologies}
                                        </button>
                                        {allTags.map((tag) => (
                                            <button
                                                key={tag}
                                                onClick={() => {
                                                    setFilter(tag);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className={`w-full text-left px-3 py-2 text-sm rounded-md transition-all ${filter === tag ? "bg-muted font-medium shadow-sm" : "hover:bg-muted/50 hover:shadow-sm active:scale-[0.98]"
                                                    }`}
                                            >
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[400px]">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                onClick={setSelectedProject}
                            />
                        ))}
                    </AnimatePresence>
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal
                            project={selectedProject}
                            onClose={() => setSelectedProject(null)}
                        />
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
