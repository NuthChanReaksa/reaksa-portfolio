"use client";
import React from "react";
import Image from "next/image";

const data = [
    {
        id: 1,
        title: "Reaksa",
        description: "I am me",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 2,
        title: "Nuth ChanReaksa",
        description: "Web Developer",
        image: "/logoProject/img-sa.jpg"
    },
    {
        id: 3,
        title: "Jane Smith",
        description: "UI/UX Designer",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 4,
        title: "Mike Johnson",
        description: "Software Engineer",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 5,
        title: "Sarah Williams",
        description: "Product Manager",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 6,
        title: "Emily Davis",
        description: "Data Scientist",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 7,
        title: "Daniel Brown",
        description: "Cybersecurity Expert",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 8,
        title: "Sophia Miller",
        description: "Cloud Architect",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 9,
        title: "James Wilson",
        description: "Blockchain Developer",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 10,
        title: "Olivia Martinez",
        description: "AI Researcher",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
];

const Page = () => {
    return (
        <section className="p-5 px-5ls">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-[#1a1a2e]"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={500}
                            height={500}
                            className="w-full h-64 object-cover"
                        />
                        <div className="relative p-4">
                            <h1 className="text-xl font-semibold text-white">{item.title}</h1>
                            <p className="mt-2 text-gray-300">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Page;
