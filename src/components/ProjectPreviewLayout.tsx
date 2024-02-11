import ProjectPreviewCard from "../components/ProjectPreviewCard";

const ProjectPreviewLayout = () => {
    return (
        <section id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
            <ProjectPreviewCard
                name="Funkoshop - Ecommerce"
                description="Fullstack project - NodeJS, ExpressJS and MySQL"
                urlProject="https://github.com/MarkoTeixido/FunkoshopCaC-Backend"
                imageUrl="/ProjectsPics/shotpic3.png"
                bgColor="#685cdd"
                dark
            />
            <ProjectPreviewCard
                name="Shopi - Ecommerce"
                description="React project with ViteJS and tailwind"
                urlProject="https://github.com/MarkoTeixido/react-shopi"
                imageUrl="/ProjectsPics/shot2pic3.png"
                bgColor="#313442"
                dark
            />
            <ProjectPreviewCard
                name="MarkoToDo - ToDo App"
                description="React project with tailwind"
                urlProject="https://github.com/MarkoTeixido/react-todo"
                imageUrl="/ProjectsPics/shot3pic1.png"
            />
            <ProjectPreviewCard
                name="MM landing - Landing Page"
                description="Landing page with api fetch"
                urlProject="https://github.com/MarkoTeixido/landing_MM"
                bgColor="#4e4e56"
                dark
            />
        </section>
    );
}

export default ProjectPreviewLayout;