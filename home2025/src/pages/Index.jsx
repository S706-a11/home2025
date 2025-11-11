import { ProjectCard } from "@/components/ProjectCard";
import game from "@/assets/img/game.jpg";
import getthawha from "@/assets/img/getthawha.jpg";
import pokebay from "@/assets/img/pokebay.jpg";

const projects = [
    {
        id: 1,
        title: "Getthawha",
        description: "Getthawha Thai Massage, featuring an online booking system, service menu, and location finder, all built with React, TypeScript, and a custom backend API. (frontend role)",
        image: getthawha,
        link: "https://getthawha.com/",
    },
    {
        id: 2,
        title: "PokéBay",
        description: "A Pokémon-themed e-commerce application built as an educational project. It uses Laravel for all backend logic, user authentication, and route handling, with MySQL for data persistence to manage users, Pokémon (products), and orders. (Fullstack role)",
        image: pokebay,
        link: "https://e-commerce.iamgot.com",
    },
    {
        id: 3,
        title: "Run, Little Hero!",
        description: "A cross-platform, real-time multiplayer endless runner inspired by Cookie Run. Players race against each other live, dodging obstacles and collecting items. The game client is built with LibGDX and is supported by a custom backend using Spring Boot and a Node.js (Socket.IO) server to handle the live multiplayer. (frontend role)",
        image: game,
        link: "https://game.yungying.com/",
    },
    {
        id: 4,
        title: "Project Delta",
        description: "Mobile-first responsive landing page design",
        image: game,
        link: "https://example.com/project-delta",
    },
    {
        id: 5,
        title: "Project Epsilon",
        description: "Portfolio website with modern animations",
        image: game,
        link: "https://example.com/project-epsilon",
    },
    {
        id: 6,
        title: "Project Zeta",
        description: "SaaS application with subscription management",
        image: game,
        link: "https://example.com/project-zeta",
    },
];

const Index = () => {
    return (
        <div className="min-h-screen bg-[hsl(var(--background))]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="mb-16">
                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-[hsl(var(--foreground))] sm:text-5xl">
                        Projects
                    </h1>
                    <p className="text-lg text-[hsl(var(--muted-foreground))]">
                        Kitiipong Jakkham <a href="https://github.com/S706-a11/" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            link={project.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Index;
