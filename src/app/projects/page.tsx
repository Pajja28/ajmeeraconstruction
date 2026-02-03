"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

// Generate mock project data using the 18 images
const categories = ["All", "Residential", "Infrastructure"];

const projectsData = [
    {
        id: 1,
        title: "Club House Adarsh Greens",
        category: "Infrastructure",
        image: "/slideshow/1.jpeg",
        location: "Kogilu, Bengaluru",
        description: "A state-of-the-art community clubhouse featuring recreational amenities and modern design."
    },
    {
        id: 13,
        title: "Adarsh Greens Swimming Pool",
        category: "Infrastructure",
        image: "/slideshow/14.jpeg",
        location: "Kogilu, Bengaluru",
        description: "Premium swimming pool facility located near the club house.",
    },
    {
        id: 2,
        title: "Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/2.jpeg",
        location: "Chikkagubbi, Bengaluru",
        description: "Apartment Suite | Total G + 4 Floors",
    },
    {
        id: 3,
        title: "Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/3.jpeg",
        description: "Apartment Suite | Total G + 4 Floors",
        location: "Chikkagubbi, Bengaluru",
    },
    {
        id: 9,
        title: "Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/9.jpeg",
        location: "Chikkagubbi, Bengaluru",
        description: "Apartment Suite | Total G + 4 Floors",
    },
    {
        id: 10,
        title: "Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/10.jpeg",
        location: "Chikkagubbi, Bengaluru",
        description: "Apartment Suite | Total G + 4 Floors",
    },
    {
        id: 11,
        title: "Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/11.jpeg",
        location: "Chikkagubbi, Bengaluru",
        description: "Apartment Suite | Total G + 4 Floors",
    },
    {
        id: 12,
        title: "Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/12.jpeg",
        location: "Chikkagubbi, Bengaluru",
        description: "Apartment Suite | Total G + 4 Floors",
    },
    {
        id: 4,
        title: "Residential Villa at Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/4.jpeg",
        location: "Chikkagubbi, Bengaluru",
    },
    {
        id: 5,
        title: "Residential Villa at Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/5.jpeg",
        location: "Chikkagubbi, Bengaluru",
    },
    {
        id: 6,
        title: "Residential Villa at Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/6.jpeg",
        location: "Chikkagubbi, Bengaluru",
    },
    {
        id: 7,
        title: "Residential Villa at Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/7.jpeg",
        location: "Chikkagubbi, Bengaluru",
    },
    {
        id: 8,
        title: "Residential Villa at Adarsh Pine Court",
        category: "Residential",
        image: "/slideshow/8.jpeg",
        location: "Chikkagubbi, Bengaluru",
    },
    {
        id: 14,
        title: "Prestige Water Ford",
        category: "Residential",
        image: "/projects/prestige-water-ford.jpg",
        location: "Whitefield, Bangalore",
        description: "Premium residential project located at Whitefield, Bangalore."
    },
    {
        id: 15,
        title: "Pacifica Hotel and Residence",
        category: "Residential",
        image: "/projects/pacifica-hotel-residence.jpg",
        location: "Silk Board Junction, Bangalore",
        description: "Premium hotel and residence project located at Silk Board Junction, Bangalore."
    },
    {
        id: 16,
        title: "Pacifica Hotel and Residence",
        category: "Residential",
        image: "/projects/pacifica-hotel-residence-2.png",
        location: "Silk Board Junction, Bangalore",
        description: "Premium hotel and residence project located at Silk Board Junction, Bangalore."
    }
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    return (
        <main className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-dark-slate text-white py-24 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
                <p className="max-w-2xl mx-auto text-gray-300">
                    Explore our diverse portfolio of residential, commercial, and infrastructure developments across Bengaluru.
                </p>
            </div>

            {/* Content */}
            <div className="container px-4 md:px-6 mx-auto py-12">

                {/* Filters */}
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category
                                ? "bg-primary text-white shadow-md"
                                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-sm font-bold text-dark-slate">
                                    {project.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark-slate mb-2">{project.title}</h3>
                                <p className="text-gray-500 text-sm flex items-center gap-1">
                                    📍 {project.location}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}
