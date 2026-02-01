"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lightbulb, Users, Leaf, Trophy, Heart } from "lucide-react";

export default function CoreValuesPage() {
    const values = [
        {
            name: "Integrity",
            icon: ShieldCheck,
            desc: "We uphold the highest standards of honesty and transparency in all our dealings. Trust is the foundation of our business."
        },
        {
            name: "Innovation",
            icon: Lightbulb,
            desc: "We constantly seek better ways to build, adopting modern technologies and creative solutions to complex challenges."
        },
        {
            name: "Client Satisfaction",
            icon: Users,
            desc: "Our clients are at the heart of everything we do. We listen, understand, and deliver beyond expectations."
        },
        {
            name: "Sustainability",
            icon: Leaf,
            desc: "We are committed to eco-friendly construction practices that minimize environmental impact and promote green living."
        },
        {
            name: "Excellence",
            icon: Trophy,
            desc: "We strive for perfection in every detail. Quality is not just a goal; it's our habit."
        },
        {
            name: "Safety",
            icon: Heart,
            desc: "The safety of our team and stakeholders is paramount. We maintain rigorous safety standards on every site."
        }
    ];

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-dark-slate">
                <div className="absolute inset-0 z-0 opacity-50">
                    <img
                        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop"
                        alt="Team Meeting"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Our <span className="text-primary">Core Values</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            These values guide our decisions, shape our culture, and define how we interact with our clients and partners.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 flex flex-col items-center text-center hover:border-primary transition-all group"
                            >
                                <div className="p-4 bg-gray-50 rounded-full text-dark-slate mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <val.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-dark-slate mb-3">{val.name}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {val.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Culture Section */}
                    <div className="mt-24 bg-dark-slate rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
                            <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h2 className="text-3xl font-bold mb-6">Our Culture: Values in Action</h2>
                            <p className="text-xl text-gray-300 leading-relaxed mb-10">
                                At Ajmeraa, values aren't just wall hangings—they are the compass for our daily interactions. We foster an environment where every voice is heard, safety is non-negotiable, and innovation is celebrated.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Collaborative Spirit</h4>
                                    <p className="text-sm text-gray-300">Teams work across disciplines to solve complex construction challenges together.</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Continuous Learning</h4>
                                    <p className="text-sm text-gray-300">Regular training programs to keep our workforce ahead of industry trends.</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                                    <h4 className="font-bold text-lg mb-2 text-primary">Community First</h4>
                                    <p className="text-sm text-gray-300">Every project involves deep engagement with local stakeholders impact.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
