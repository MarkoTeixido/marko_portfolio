"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
    const { t } = useLanguage();

    return (
        <section id="contact" className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{t.contact.cta}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        {t.contact.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.contact.email}</h3>
                        <Link
                            href="mailto:hello@example.com"
                            className="text-2xl md:text-3xl font-medium hover:text-muted-foreground transition-colors inline-flex items-center gap-2 group"
                        >
                            teixido_marko@outlook.es
                            <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">{t.contact.socials}</h3>
                        <div className="flex gap-6">
                            <Link href="https://www.linkedin.com/in/marcos-teixido/" className="text-foreground hover:text-muted-foreground transition-colors">
                                <Linkedin size={24} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://github.com/MarkoTeixido" className="text-foreground hover:text-muted-foreground transition-colors">
                                <Github size={24} />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
