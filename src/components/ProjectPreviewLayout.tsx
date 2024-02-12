import React, { useState, useEffect } from "react";
import ProjectPreviewCard from "../components/ProjectPreviewCard";

const ProjectPreviewLayout = () => {
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const device = isSmallScreen ? 'M' : 'D';

    return (
        <section id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 te">
            <ProjectPreviewCard
                name="Funkoshop - Ecommerce"
                description="Fullstack project - NodeJS, ExpressJS and MySQL"
                urlProject="https://github.com/MarkoTeixido/FunkoshopCaC-Backend"
                imageUrl={`/ProjectsPics/shotpic${device}.png`}
                bgColor="#685cdd"
                dark
            />
            <ProjectPreviewCard
                name="Shopi - Ecommerce"
                description="React project with ViteJS and tailwind"
                urlProject="https://github.com/MarkoTeixido/react-shopi"
                imageUrl={`/ProjectsPics/shot2pic${device}.png`}
                bgColor="#313442"
                dark
            />
            <ProjectPreviewCard
                name="MarkoToDo - ToDo App"
                description="React project with tailwind"
                urlProject="https://github.com/MarkoTeixido/react-todo"
                imageUrl={`/ProjectsPics/shot3pic${device}.png`}
            />
            <ProjectPreviewCard
                name="MM landing - Landing Page"
                description="Landing page with api fetch"
                urlProject="https://github.com/MarkoTeixido/landing_MM"
                imageUrl={`/ProjectsPics/shot4pic${device}.png`}
                bgColor="#4e4e56"
                dark
            />
        </section>
    );
}

export default ProjectPreviewLayout;