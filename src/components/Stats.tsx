"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ShieldCheck, Gem } from "lucide-react";

const stats = [
    {
        id: 1,
        label: "Clients",
        value: "30+",
        icon: Users,
        description: "Trusted by satisfied families and businesses.",
        image: "/images/clients-banner.png"
    },
    {
        id: 2,
        label: "Safety Compliance",
        value: "100%",
        icon: ShieldCheck,
        description: "Adhering to the highest safety protocols.",
    },
    {
        id: 3,
        label: "Quality Materials",
        value: "Premium",
        icon: Gem,
        description: "Sourcing only the best for durability.",
    },
];

export default function Stats() {
    return (
        <section className="py-12 bg-light-gray border-b border-gray-200">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="p-3 bg-red-50 text-primary rounded-full mb-4">
                                <stat.icon size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-dark-slate mb-2">{stat.value}</h3>
                            <p className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</p>
                            <p className="text-sm text-gray-500">{stat.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
