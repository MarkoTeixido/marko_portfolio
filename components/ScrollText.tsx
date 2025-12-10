"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollTextProps {
    text: string;
    className?: string;
}

export default function ScrollText({ text, className = "" }: ScrollTextProps) {
    const containerRef = useRef<HTMLHeadingElement>(null);
    const { scrollY } = useScroll();

    const words = text.split(" ");

    return (
        <h1 ref={containerRef} className={`flex flex-wrap gap-[0.25em] ${className}`}>
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className="flex whitespace-nowrap">
                    {word.split("").map((char, charIndex) => {
                        // Calculate a unique index for the character across the whole string roughly
                        // This is just to stagger the effect
                        const globalIndex = wordIndex * 5 + charIndex;

                        return (
                            <Char
                                key={charIndex}
                                char={char}
                                scrollY={scrollY}
                                index={globalIndex}
                            />
                        );
                    })}
                </span>
            ))}
        </h1>
    );
}

function Char({ char, scrollY, index }: { char: string; scrollY: MotionValue<number>; index: number }) {
    // Stagger the movement: later characters move faster/further
    // We map scrollY (0 to 300px) to a Y translation
    // The factor (index * 2) makes each letter move at a slightly different rate/offset
    const y = useTransform(scrollY, [0, 500], [0, -100 - (index * 15)]);

    // Also fade out slightly as they move up
    const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

    return (
        <motion.span style={{ y, opacity }} className="inline-block">
            {char}
        </motion.span>
    );
}
