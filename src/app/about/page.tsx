"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Header Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2070&auto=format&fit=crop"
                        alt="Construction Site"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        About <span className="text-primary">Ajmeraa Construction</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-200"
                    >
                        Building Dreams, Engineering Excellence.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <h2 className="text-3xl font-bold text-dark-slate mb-6">Our Story</h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                AJMERAA CONSTRUCTION PRIVATE LIMITED has been a cornerstone in the construction industry, known for delivering high-quality residential and commercial projects. From humble beginnings, we have grown into a trusted name, synonymous with reliability and innovation.
                            </p>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Founded with a vision to redefine urban living, we have successfully completed numerous projects that stand as testaments to our engineering prowess and aesthetic sensibility. Our journey is defined by a relentless pursuit of excellence and a commitment to customer satisfaction.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Today, we continue to push boundaries, embracing modern construction technologies and sustainable practices to build spaces that inspire and endure. We don't just build structures; we build lasting relationships and thriving communities.
                            </p>
                        </div>
                        <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop"
                                alt="Our Team"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Leadership Section */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-dark-slate">Meet Our Leadership</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto mt-4 px-2">
                                The visionaries driving our success and upholding our values.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Leader 1 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary text-center">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-100">
                                    <img src="/images/asgar-ali.jpg" alt="Mr. Asgar Ali" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-slate mb-1">Mr. Asgar Ali</h3>
                                <p className="text-primary font-semibold mb-4">Director</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    A visionary leader guiding the company's strategic direction with a focus on integrity and innovation.
                                </p>
                            </div>

                            {/* Leader 2 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary text-center">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-100">
                                    <img src="/images/hayat-alam.jpg" alt="Mr. Hayat Alam" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-slate mb-1">Mr. Hayat Alam</h3>
                                <p className="text-primary font-semibold mb-4">Director</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Dedicated to maintaining high standards of quality and operational excellence across all projects.
                                </p>
                            </div>

                            {/* Leader 3 */}
                            <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-primary text-center">
                                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gray-100">
                                    <img src="/images/somashekar-ks.png" alt="Somashekar KS" className="w-full h-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold text-dark-slate mb-1">Somashekar KS</h3>
                                <p className="text-primary font-semibold mb-4">Operations Head</p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Expertly managing on-ground operations to ensure timely delivery and seamless execution.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Choose Us */}
                    <div className="mb-20">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-dark-slate">Why Choose Us?</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { title: "Expertise", desc: "Years of experience in delivering complex projects on time." },
                                { title: "Quality", desc: "Using top-tier materials and cutting-edge technology." },
                                { title: "Trust", desc: "Transparent dealings and ethical business practices." }
                            ].map((item, i) => (
                                <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Clients />

            <Footer />
        </main>
    );
}
