import React, { useState, useEffect, useCallback } from "react";
import ProjectPreviewCard from "../components/ProjectPreviewCard";

const ProjectPreviewLayout = () => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    const handleResize = useCallback(() => {
        setIsSmallScreen(window.innerWidth <= 768);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    const device = isSmallScreen ? 'M' : 'D';

    return (
        <section id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <ProjectPreviewCard
                name="Funkoshop - Ecommerce"
                description="Fullstack project - NodeJS, ExpressJS and MySQL"
                urlProject="https://github.com/MarkoTeixido/FunkoshopCaC-Backend"
                imageUrl={isSmallScreen ? 'https://i.imgur.com/Jy0Ua2Z.png' : 'https://i.imgur.com/6BEVHYE.png'}
                bgColor="#685cdd"
                dark
            />
            <ProjectPreviewCard
                name="Shopi - Ecommerce"
                description="React project with ViteJS and Tailwind"
                urlProject="https://github.com/MarkoTeixido/react-shopi"
                imageUrl={isSmallScreen ? 'https://i.imgur.com/cKWqcom.png' : 'https://i.imgur.com/cbV1ooh.png'}
                bgColor="#313442"
                dark
            />
            <ProjectPreviewCard
                name="MarkoToDo - ToDo App"
                description="React project with Tailwind"
                urlProject="https://github.com/MarkoTeixido/react-todo"
                imageUrl={isSmallScreen ? 'https://i.imgur.com/hCIp6wz.png' : 'https://i.imgur.com/sPpafvb.png'}
            />
            <ProjectPreviewCard
                name="MM landing - Landing Page"
                description="Landing page with api fetch"
                urlProject="https://github.com/MarkoTeixido/landing_MM"
                imageUrl={isSmallScreen ? 'https://i.imgur.com/wO7okdu.png' : 'https://i.imgur.com/AM4x7xU.png'}
                bgColor="#4e4e56"
                dark
            />
        </section>
    );
}

export default ProjectPreviewLayout;