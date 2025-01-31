"use client";
import React from "react";
import Image from "next/image";

const data = [
    {
        id: 1,
        title: "About Myself",
        description: "I’m 21 years old, born on November 11, 2002. Currently, I’m studying at ISTAD, where I've completed both basic and advanced full-stack development",
        image:
            "https://scontent.fpnh11-2.fna.fbcdn.net/v/t39.30808-6/475325031_1826402184856420_8857205222670963367_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEGJmM8RR62L8jaYzliszBQTp3EuHseLS5OncS4ex4tLoTx4zLb331abopF6Sz_-gnK4XIhIgM3yq4qmta-7cR4&_nc_ohc=RO2__CtWmCIQ7kNvgF6QCjh&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=A4R2T7TL4rhYGLC4buF7JWi&oh=00_AYAhFoPmy7SirBothrBttHDKTEZLOlBQti-G7bSInXfj3g&oe=67A27045",
    },
    {
        id: 2,
        title: "Travel Enthusiast",
        description: "Traveling is a passion of mine, and I love exploring new places. Whether it's the thrill of discovering a new city or the relaxation of a scenic getaway, every trip offers a chance to learn, grow, and experience different cultures.",
        image: "/logoProject/img-sa.jpg"
    },
    {
        id: 3,
        title: "Football (Soccer)",
        description: "Football, also known as soccer in some countries, is a team sport played between two teams of eleven players on a field. ",
        image: "/logoProject/img4.jpg"
          },

];

const Page = () => {
    return (
        <section className="px-10 p-5 px-5ls py-16">
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
                            <p className="mt-2 text-gray-300 line-clamp-6">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Page;
