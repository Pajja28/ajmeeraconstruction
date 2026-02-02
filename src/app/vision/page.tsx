"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Eye, TrendingUp, Globe } from "lucide-react";

export default function VisionPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-dark-slate">
                <div className="absolute inset-0 z-0 opacity-60">
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Skyscrapers"
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
                        Our <span className="text-primary">Vision</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <Eye size={64} className="text-secondary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-dark-slate mb-6">Looking Into the Future</h2>
                        <p className="text-2xl text-gray-700 italic font-medium leading-relaxed">
                            "To be a leading construction company recognized for superior quality, reliability, and innovation, setting benchmarks for the industry globally."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                                <TrendingUp size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-dark-slate mb-4">Innovation Leader</h3>
                            <p className="text-gray-600">
                                Pioneering new construction methodologies and embracing smart technologies to build faster, safer, and better.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                                <Globe size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-dark-slate mb-4">Sustainable Growth</h3>
                            <p className="text-gray-600">
                                Creating infrastructure that respects the environment and contributes to a sustainable future for generations to come.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
                        >
                            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-dark-slate mb-4">Global Recognition</h3>
                            <p className="text-gray-600">
                                Establishing Ajmeraa Construction as a brand synonymous with trust and quality on the global stage.
                            </p>
                        </motion.div>
                    </div>

                    {/* Strategic Roadmap Section */}
                    <div className="mt-24 mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-dark-slate">Vision 2030: A Connected Future</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                                Our roadmap for the next decade focuses on integrating sustainable urban planning with smart technology.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-dark-slate mb-4">Smart Cities & Green Living</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    We envision a future where construction goes beyond bricks and mortar. We are actively researching and investing in:
                                </p>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-center gap-3">
                                        <span className="p-1 bg-secondary/10 rounded-full text-secondary"><Globe size={16} /></span>
                                        <span>Carbon-neutral building materials.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="p-1 bg-secondary/10 rounded-full text-secondary"><Globe size={16} /></span>
                                        <span>IoT-enabled smart homes for energy efficiency.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="p-1 bg-secondary/10 rounded-full text-secondary"><Globe size={16} /></span>
                                        <span>Regenerative urban spaces that promote biodiversity.</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex-1 w-full relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
                                    alt="Future City"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                                    <p className="text-white font-semibold">Designing for Tomorrow</p>
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
