"use client";

import { motion } from "framer-motion";
import MouseFollower from "./MouseFollower";
import TimeDisplay from "./TimeDisplay";
import { useLanguage } from "@/context/LanguageContext";
import ScrollText from "./ScrollText";
import SpinningObject from "./SpinningObject";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 max-w-5xl mx-auto relative overflow-hidden">
            <MouseFollower />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-12 z-10 relative"
            >
                <div className="sm:space-y-2 md:space-y-6">
                    <div className="flex items-center gap-2 text-lg md:text-xl font-medium text-muted-foreground">
                        <span>{t.hero.basedIn}</span>
                        <span className="inline-block">→</span>
                        <span className="text-foreground font-semibold"><TimeDisplay /></span>
                    </div>

                    <hr className="border-border/60 w-full" />

                    <ScrollText
                        text={t.hero.greeting}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-foreground leading-[0.9]"
                    />
                </div>

                <div className="space-y-3 text-xl md:text-2xl font-medium text-muted-foreground max-w-3xl">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className="min-w-fit flex-shrink-0">{t.hero.currently}</span>
                        <span className="hidden md:inline flex-shrink-0">→</span>
                        <span className="text-foreground font-bold">{t.hero.role}</span>
                    </div>
                    {/* <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className="min-w-fit flex-shrink-0">{t.hero.previously}</span>
                        <span className="hidden md:inline flex-shrink-0">→</span>
                        <span className="text-foreground font-bold">{t.hero.prevRole}</span>
                    </div> */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                        <span className="min-w-fit flex-shrink-0">{t.hero.delivering}</span>
                        <span className="hidden md:inline flex-shrink-0">→</span>
                        <span className="text-foreground font-bold">{t.hero.solutions}</span>
                    </div>
                </div>
            </motion.div>
            <SpinningObject />
        </section>
    );
}
