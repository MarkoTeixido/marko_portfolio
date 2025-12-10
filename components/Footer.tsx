"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="py-12 border-t border-border/40 bg-background overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <p className="text-sm md:text-base font-medium tracking-[0.3em] text-muted-foreground select-none">
                        {t.footer.thanks}
                    </p>
                </motion.div>

                <div className="text-xs text-muted-foreground/50 text-center">
                    © {new Date().getFullYear()} M! Portfolio. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
