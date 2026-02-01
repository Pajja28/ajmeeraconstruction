"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Building2,
    PencilRuler,
    Hammer,
    Zap,
    Droplets,
    PaintBucket,
    Home,
    Wrench
} from "lucide-react";

const services = [
    {
        icon: PencilRuler,
        title: "Site Planning & Design",
        description: "Zoning analysis, land surveys, access route planning, and comprehensive 3D modeling.",
    },
    {
        icon: Building2,
        title: "Building Construction",
        description: "High-quality residential & commercial projects built with precision, durability, and strict timelines.",
    },
    {
        icon: Zap,
        title: "Electrical Setup",
        description: "Power wiring, panel installation, outlet planning, and safety grounding systems.",
    },
    {
        icon: Droplets,
        title: "Plumbing Services",
        description: "Efficient water supply, drainage systems, pipelines, pumps, and fixture installations.",
    },
    {
        icon: PaintBucket,
        title: "Interior Finishing",
        description: "Expert floor polishing, premium paint coating, precise trim fitting, and aesthetic ceiling work.",
    },
    {
        icon: Home,
        title: "Exterior Works",
        description: "Durable wall finishes, waterproofing, facade design, and structural detailing.",
    },
    {
        icon: Hammer,
        title: "Renovation Projects",
        description: "Interior renovations, space expansion, additions/alterations, and fixture upgrades.",
    },
    {
        icon: Wrench,
        title: "Structural Repairs",
        description: "Restoring integrity via crack filling, foundation repair, and corrosion management.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-20 bg-light-gray">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">Our Comprehensive Services</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        From ground-breaking to finishing touches, we offer end-to-end construction solutions tailored to your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all cursor-pointer group"
                        >
                            <div className="p-4 bg-red-50 text-primary rounded-full mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                <service.icon size={36} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-dark-slate mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
