import { Metadata } from "next";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import HeroComponent from "@/components/HeroSectionComponent/HeroComponent";

export const metadata: Metadata = {
    title: "Home - Reaksa Portfolio",
    description: "Welcome to my portfolio. Explore my skills, projects, and encryption expertise.",
    openGraph: {
        title: "Home - Reaksa Portfolio",
        description: "Welcome to my portfolio. Explore my skills, projects, and encryption expertise.",
        url: "https://reaksa-portfolio.vercel.app/",
        siteName: "Reaksa Portfolio",
        images: [
            {
                url: "https://www.cstad.edu.kh/_next/image?url=https%3A%2F%2Flms-api.istad.co%2Fapi%2Fv1%2Fmedias%2Fview%2F3a5b9fed-24f1-4974-ab00-8ff870a77718.png&w=256&q=75",
                width: 1200,
                height: 630,
                alt: "Portfolio Preview Image",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Home - My Portfolio",
        description: "Welcome to my portfolio. Explore my skills, projects, and encryption expertise.",
        images: ["https://www.cstad.edu.kh/_next/image?url=https%3A%2F%2Flms-api.istad.co%2Fapi%2Fv1%2Fmedias%2Fview%2F3a5b9fed-24f1-4974-ab00-8ff870a77718.png&w=256&q=75"],
    },
};

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Hero />
                <Skills />
                <Encryption />
                <Projects />

            </div>
        </main>
    );
}
