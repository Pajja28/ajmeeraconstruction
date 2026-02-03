"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "Club House Adarsh Greens",
        category: "Infrastructure",
        image: "/slideshow/1.jpeg",
        description: "A premium club house facility designed for community engagement and leisure at Adarsh Greens, Kogilu.",
    },
    {
        title: "Adarsh Greens Swimming Pool",
        category: "Infrastructure",
        image: "/slideshow/14.jpeg",
        description: "Premium swimming pool facility located near the club house, offering relaxation and recreation.",
    },
    {
        title: "Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/2.jpeg",
        description: "Modern high-rise apartments offering premium amenities and panoramic views, located in Chikkagubbi.",
    },
    {
        title: "Residential Villa at Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/5.jpeg",
        description: "Spacious residential villas designed for families, featuring open green spaces and modern facilities.",
    },
    {
        title: "Prestige Water Ford",
        category: "Residential",
        image: "/projects/prestige-water-ford.jpg",
        description: "Premium residential project located at Whitefield, Bangalore.",
    },
    {
        title: "Pacifica Hotel and Residence",
        category: "Residential",
        image: "/projects/pacifica-hotel-residence.jpg",
        description: "Premium hotel and residence project located at Silk Board Junction, Bangalore.",
    },
];

export default function Portfolio() {
    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">Featured <span className="text-primary">Projects</span></h2>
                        <p className="text-gray-600 max-w-xl">
                            A glimpse into our diverse portfolio of successfully completed projects across Bengaluru.
                        </p>
                    </div>
                    <Link href="/projects" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                        View All Projects <ArrowUpRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                        >
                            <div className="aspect-video w-full overflow-hidden relative">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                                <span className="text-xs font-bold text-primary bg-white px-2 py-1 rounded mb-2 inline-block">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/projects" className="inline-flex items-center gap-2 text-primary font-semibold">
                        View All Projects <ArrowUpRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
