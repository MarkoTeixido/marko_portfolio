"use client";

import { createContext, useContext, useState } from "react";

type Language = "en" | "es";

export type Project = {
    image: string;
    title: string;
    description: string;
    tags: string[];
    linkRepo: string;
    linkDemo: string;
};

type Translations = {
    [key in Language]: {
        nav: {
            work: string;
            about: string;
            skills: string;
            contact: string;
            cvUrl: string;
        };
        hero: {
            basedIn: string;
            greeting: string;
            currently: string;
            previously: string;
            delivering: string;
            role: string;
            prevRole: string;
            solutions: string;
        };
        projects: {
            title: string;
            allTechnologies: string;
            viewDemo: string;
            readMore: string;
            viewCode: string;
            viewLive: string;
            list: Project[];
        };
        about: {
            title: string;
            description: string;
            role: string;
            interest: string;
            goal: string;
        };
        skills: {
            title: string;
            languages: string;
            frontend: string;
            backend: string;
            devops: string;
            tools: string;
        };
        contact: {
            title: string;
            cta: string;
            description: string;
            email: string;
            socials: string;
        };
        footer: {
            thanks: string;
        };
    };
};

const translations: Translations = {
    en: {
        nav: {
            work: "Work",
            about: "About",
            skills: "Skills",
            contact: "Contact",
            cvUrl: "/CV_marko-EN.pdf",
        },
        hero: {
            basedIn: "Based in Villa Mercedes, SL",
            greeting: "Hi, this is Marko.",
            currently: "Currently",
            previously: "Previously",
            delivering: "Delivering",
            role: "Systems Engineering Student & Fullstack Developer",
            prevRole: "Fullstack Developer • Freelance",
            solutions: "Scalable Solutions ☻",
        },
        projects: {
            title: "Selected Work",
            allTechnologies: "All Technologies",
            viewDemo: "View Demo",
            readMore: "Read more",
            viewCode: "View Code",
            viewLive: "Live Demo",
            list: [
                {
                    image: "https://res.cloudinary.com/dp7jr9k94/image/upload/v1765318130/ChatGPT_Image_15_oct_2025_06_07_03_p.m._nfxqhn.png",
                    title: "Dubsar AI",
                    description: "Intelligent conversational assistant integrated with Supabase and Gemini API, offering natural responses and connection to external services.",
                    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Google Gemini"],
                    linkRepo: "https://github.com/MarkoTeixido/Dubsar",
                    linkDemo: "https://dubsarai.vercel.app/",
                },
                {
                    image: "https://res.cloudinary.com/dp7jr9k94/image/upload/v1765318152/Generated_image_1_mbn7vu.png",
                    title: "Pregón",
                    description: "Intelligent academic calendar agent integrating AI with Discord and WhatsApp to manage university events automatically.",
                    tags: ["Python", "flask", "Twilio", "discord.py", "Google Gemini", "Google Calendar API"],
                    linkRepo: "https://github.com/MarkoTeixido/Pregon",
                    linkDemo: "https://youtu.be/L4IKepvFY1s",
                },
                {
                    image: "https://res.cloudinary.com/dp7jr9k94/image/upload/v1765402126/Gemini_Generated_Image_fpsownfpsownfpso_men6zq.png",
                    title: "Funkoshop",
                    description: "Online Funko store developed with Next.js, Node.js and MySQL, managing products, users and orders with relational database integration.",
                    tags: ["Node.js", "Express.js", "JavaScript", "MySQL", "Sequelize", "REST API"],
                    linkRepo: "https://github.com/MarkoTeixido/FunkoshopCaC-Backend",
                    linkDemo: "https://funkoshopcac.vercel.app/",
                }
            ]
        },
        about: {
            title: "A bit about me",
            description: "I am an advanced Information Systems Engineering student and full-stack developer. I primarily work with JavaScript/TypeScript and am currently learning Python.",
            role: "I am also interested in the field of artificial intelligence and use it as support in my projects, applying it to add real value.",
            interest: "In this way, ensuring that my solutions, in addition to being clear and scalable, can be further enhanced.",
            goal: "I am always in constant training and building solutions that combine engineering, automation, and AI applied to real cases."
        },
        skills: {
            title: "Skills",
            languages: "Languages",
            frontend: "Frontend",
            backend: "Backend & APIs",
            devops: "DevOps & Infra",
            tools: "Tools"
        },
        contact: {
            title: "Contact",
            cta: "Let's Chat",
            description: "Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            email: "Email",
            socials: "Socials",
        },
        footer: {
            thanks: "THANKS FOR STOPPING BY!",
        },
    },
    es: {
        nav: {
            work: "Proyectos",
            about: "Sobre mí",
            skills: "Habilidades",
            contact: "Contacto",
            cvUrl: "/CV_marko-ES.pdf",
        },
        hero: {
            basedIn: "De Villa Mercedes, SL",
            greeting: "Hola, soy Marko.",
            currently: "Actualmente",
            previously: "Anteriormente",
            delivering: "Entregando",
            role: "Estudiante de Ingeniería en Sistemas y Desarrollador Fullstack",
            prevRole: "Desarrollador Fullstack • Freelance",
            solutions: "Soluciones Escalables ☻",
        },
        projects: {
            title: "Proyectos Destacados",
            allTechnologies: "Todas las Tecnologías",
            viewDemo: "Ver Demo",
            readMore: "Leer más",
            viewCode: "Ver Código",
            viewLive: "Ver Demo",
            list: [
                {
                    image: "https://res.cloudinary.com/dp7jr9k94/image/upload/v1765318130/ChatGPT_Image_15_oct_2025_06_07_03_p.m._nfxqhn.png",
                    title: "Dubsar AI",
                    description: "Asistente conversacional inteligente integrado con Supabase y Gemini API, ofreciendo respuestas naturales y conexión con servicios externos.",
                    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Google Gemini"],
                    linkRepo: "https://github.com/MarkoTeixido/Dubsar",
                    linkDemo: "https://dubsarai.vercel.app/",
                },
                {
                    image: "https://res.cloudinary.com/dp7jr9k94/image/upload/v1765318152/Generated_image_1_mbn7vu.png",
                    title: "Pregón",
                    description: "Agente inteligente de calendario académico que integra IA con Discord y WhatsApp para gestionar eventos universitarios automáticamente.",
                    tags: ["Python", "flask", "Twilio", "discord.py", "Google Gemini", "Google Calendar API"],
                    linkRepo: "https://github.com/MarkoTeixido/Pregon",
                    linkDemo: "https://youtu.be/L4IKepvFY1s",
                },
                {
                    image: "https://res.cloudinary.com/dp7jr9k94/image/upload/v1765402126/Gemini_Generated_Image_fpsownfpsownfpso_men6zq.png",
                    title: "Funkoshop",
                    description: "Tienda online de figuras Funko, desarrollado con Node.js y Express, que gestiona productos, usuarios y pedidos con integración a base de datos relacional.",
                    tags: ["Next.js", "TypeScript", "Tailwind", "Node.js", "Express.js", "MySQL", "Sequelize", "JWT"],
                    linkRepo: "https://github.com/MarkoTeixido/Funkoshop",
                    linkDemo: "https://funkoshopcac.vercel.app/",
                }
            ]
        },
        about: {
            title: "Un poco sobre mí",
            description: "Soy estudiante avanzado de Ingeniería en Sistemas de Información y desarrollador full-stack. Trabajo principalmente con JavaScript/TypeScript y actualmente estoy aprendiendo Python.",
            role: "También me interesa el campo de la inteligencia artificial y la utilizo como apoyo en mis proyectos, aplicándola para aportar valor real.",
            interest: "De esta manera, conseguir que mis soluciones, además de ser claras y escalables, puedan potenciarse aún más.",
            goal: "Siempre estoy en constante formación y construyendo soluciones que combinan ingeniería, automatización e IA aplicada a casos reales."
        },
        skills: {
            title: "Habilidades",
            languages: "Lenguajes",
            frontend: "Frontend",
            backend: "Backend & APIs",
            devops: "DevOps & Infra",
            tools: "Herramientas"
        },
        contact: {
            title: "Contacto",
            cta: "Hablemos",
            description: "Ya sea que tengas una pregunta o simplemente quieras saludar, ¡trataré de responderte lo antes posible!",
            email: "Email",
            socials: "Redes",
        },
        footer: {
            thanks: "¡GRACIAS POR VISITAR!",
        },
    },
};

interface LanguageContextType {
    language: Language;
    toggleLanguage: () => void;
    t: Translations[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("es");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "es" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
