"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = [
    { name: t.nav.work, href: "/#work" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-6 transition-all duration-300 ${isScrolled
          ? "bg-background/60 backdrop-blur-md border-none"
          : "bg-transparent border-b border-border"
          }`}
      >
        <div className="flex items-center justify-between max-w-5xl mx-auto px-6 md:px-12">
          <div className="flex-1">
            <Link href="/" aria-label="Home" className="text-xl font-bold tracking-tighter text-foreground hover:opacity-80 transition-opacity">
              M!
            </Link>
          </div>

          <nav className="hidden md:flex gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex gap-4 flex-1 justify-end items-center">
            <button
              onClick={toggleLanguage}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle Language"
            >
              {language === "en" ? "EN" : "ES"}
            </button>

            <button
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <div className="hidden md:block w-px h-6 bg-border mx-2" />

            <Link
              href={t.nav.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              CV
            </Link>
            <Link
              href="https://www.linkedin.com/in/marcos-teixido/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/MarkoTeixido"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>

            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-muted-foreground hover:text-foreground transition-colors ml-2"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 md:hidden flex flex-col"
        >
          {/* Header in Overlay */}
          <div className="flex justify-between items-center px-6 py-6 border-b border-border/10">
            <Link href="/" className="text-xl font-bold tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>
              M!
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Items */}
          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.1 },
              },
            }}
            className="flex-1 flex flex-col justify-center items-center gap-6"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20 } },
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-bold tracking-tight hover:text-muted-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Footer Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-8 flex justify-center gap-8 items-center"
          >
            <Link
              href={t.nav.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="text-xl font-medium">CV</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={24} />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
