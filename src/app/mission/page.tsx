"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, CheckCircle2 } from "lucide-react";

export default function MissionPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-dark-slate">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                        alt="Blueprints"
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
                        Our <span className="text-primary">Mission</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <Target size={64} className="text-primary mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-dark-slate mb-6">Driven by Purpose</h2>
                        <p className="text-2xl text-gray-700 italic font-medium leading-relaxed">
                            "To deliver world-class construction solutions that exceed client expectations while adhering to sustainability, safety, and operational excellence."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-dark-slate mb-4 flex items-center gap-2">
                                <CheckCircle2 className="text-primary" /> Key Objectives
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                                    <span><strong>Quality Assurance:</strong> Delivering defect-free projects through rigorous quality control at every stage.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                                    <span><strong>Timely Delivery:</strong> Adhering to strict timelines to respect our clients' investments and plans.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                                    <span><strong>Safety First:</strong> Maintaining zero-accident workplaces through comprehensive safety training and protocols.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-dark-slate mb-4 flex items-center gap-2">
                                <CheckCircle2 className="text-primary" /> Client Promise
                            </h3>
                            <ul className="space-y-4 text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                                    <span><strong>Transparency:</strong> Open (and honest) communication regarding costs, timelines, and progress.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                                    <span><strong>Innovation:</strong> Leveraging the latest construction tech for better efficiency and durability.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 shrink-0" />
                                    <span><strong>Support:</strong> Dedicated post-handover support to ensure long-term satisfaction.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Community Section */}
                    <div className="max-w-4xl mx-auto text-center bg-primary/5 p-10 rounded-2xl">
                        <h3 className="text-2xl font-bold text-dark-slate mb-4">Building Beyond Walls</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Our mission extends beyond construction sites. We are dedicated to uplifting the communities we serve by creating infrastructure that enhances connectivity, supports local economies, and respects environmental consciousness. Every Ajmeraa project is designed to be a harmonious addition to its neighborhood.
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
