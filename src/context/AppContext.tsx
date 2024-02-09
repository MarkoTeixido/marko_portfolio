import React, { createContext, useState } from "react";
import esJson from "../languages/es/es.json";

interface ContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    language: string;
    setLanguage: React.Dispatch<React.SetStateAction<string>>;
    isOpenNavbarMobile: boolean;
    setIsOpenNavbarMobile: React.Dispatch<React.SetStateAction<boolean>>;
    content: any;
    setContent: React.Dispatch<React.SetStateAction<any>>;
}

const initialContext: ContextType = {
    theme: "light",
    setTheme: () => {},
    language: "ES",
    setLanguage: () => {},
    isOpenNavbarMobile: false,
    setIsOpenNavbarMobile: () => {},
    content: esJson,
    setContent: () => {},
};

const AppContext = createContext<ContextType>(initialContext);

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [theme, setTheme] = useState("light");
    const [language, setLanguage] = useState("ES");
    const [isOpenNavbarMobile, setIsOpenNavbarMobile] = useState(false);
    const [content, setContent] = useState<any>(esJson);

    return (
        <AppContext.Provider value={{ 
            theme,
            setTheme,
            language,
            setLanguage,
            isOpenNavbarMobile,
            setIsOpenNavbarMobile,
            content,
            setContent,
        }}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };