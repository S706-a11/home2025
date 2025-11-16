import { ThreeDCarousel } from "@/components/ui/3d-carousel";
import ASCIIText from "@/components/ASCIIText";
import ColorBends from "@/components/ColorBends";
import game from "@/assets/img/game.jpg";
import getthawha from "@/assets/img/getthawha.jpg";
import pokebay from "@/assets/img/pokebay.jpg";
import calendar from "@/assets/img/calendar.jpg";
import thira from "@/assets/img/thira.jpg";
import dogcat from "@/assets/img/dogcat.jpg";

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
        title: "Calendar",
        description: "A serverless(firebase) web application for modern event and schedule management. The frontend is built with React, responsive interface that allows users to toggle between Month, Week, and Day views.",
        image: calendar,
        link: "https://calendar.iamgot.com/",
    },
    {
        id: 5,
        title: "Thira",
        description: "A serverless social media application built with React and Firebase. The project features a real-time feed, user profiles, and CRUD functionality for posts. It leverages Firebase Authentication for secure login and Cloud Firestore for all application data. **no server for uploads (Fullstack role)",
        image: thira,
        link: "https://thira.iamgot.com/",
    },
    {
        id: 6,
        title: "Dog or Cat",
        description: "A web-based AI tool that can accurately classify an uploaded image as either a 'Dog' or a 'Cat.' This project is for learning purposes, utilizing a pre-trained machine learning model to perform image recognition tasks. (react,python)",
        image: dogcat,
        link: "https://dog_or_cat.iamgot.com/",
    }
];

const Index = () => {
    return (
        <div>
            {/* Background gradient / bends behind everything */}
            <ColorBends
                className="min-h-screen relative overflow-hidden bg-fuchsia-100 z-0 "
                colors={["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#00ffff", "#0000ff", "#8a2be2", "#ff00ff"]}
                rotation={42}
                autoRotate={-2}
                speed={0.23}
                scale={0.8}
                frequency={1}
                warpStrength={1}
                mouseInfluence={0.8}
                parallax={0.6}
                noise={0.08}
                transparent
            />

            {/* 3D carousel layer */}
            <div className="absolute inset-0">
                <ThreeDCarousel projects={projects} />
            </div>

            {/* ASCII title overlay clickable to GitHub */}
            <a
                href="https://github.com/S706-a11"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-6 left-1/2 -translate-x-1/2 w-[min(90vw,700px)] h-48 z-40 cursor-pointer"
                aria-label="Open GitHub profile"
            >
                <ASCIIText
                    text='Github'
                    enableWaves={true}
                    asciiFontSize={3}
                />
            </a>
        </div>
    );
};

export default Index;
