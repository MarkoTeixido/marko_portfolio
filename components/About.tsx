"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
    const { t } = useLanguage();

    const keywords = [
        "Information Systems Engineering", "Ingeniería en Sistemas de Información",
        "full-stack developer", "desarrollador full-stack",
        "JavaScript", "TypeScript", "Python",
        "artificial intelligence", "inteligencia artificial",
        "engineering", "ingeniería",
        "automation", "automatización",
        "AI", "IA",
        "real value", "valor real"
    ];

    const highlightText = (text: string) => {
        // Use word boundaries \b to prevent matching inside words
        // Special handling might be needed if keywords contain non-word chars, but mostly ours are letters
        const parts = text.split(new RegExp(`\\b(${keywords.join("|")})\\b`, "gi"));
        return parts.map((part, i) =>
            keywords.some(k => k.toLowerCase() === part.toLowerCase()) ? (
                <span key={i} className="text-foreground font-medium transition-colors hover:text-primary">{part}</span>
            ) : (
                part
            )
        );
    };

    return (
        <section id="about" className="py-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
            >
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-foreground">
                        {t.about.title}
                    </h2>
                </div>

                <div className="space-y-8">
                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        {highlightText(t.about.description)}
                    </motion.p>

                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        {highlightText(`${t.about.role} ${t.about.interest}`)}
                    </motion.p>

                    <motion.p
                        className="text-lg text-muted-foreground leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        {highlightText(t.about.goal)}
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
}
