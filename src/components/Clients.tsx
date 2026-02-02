"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
    return (
        <section className="py-20 bg-dark-slate relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-clients.png"
                    alt="Clients Background"
                    fill
                    className="object-cover"
                    quality={90}
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-dark-slate/85 via-dark-slate/70 to-dark-slate/50" />
                {/* Top and Bottom Fades for smooth transition */}
                <div className="absolute top-0 left-0 right-0 h-40 md:h-64 bg-gradient-to-b from-dark-slate via-dark-slate/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-40 md:h-64 bg-gradient-to-t from-dark-slate via-dark-slate/80 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Trusted by <span className="text-primary">Industry Leaders</span>
                    </h2>
                    <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
                        We are proud to have partnered with some of the most visible and respected names in the construction and real estate sectors. Our reputation is built on their trust.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
                        {[
                            { name: "Adarsh Group", logo: "/images/client-adarsh-v3.png" },
                            { name: "Assetz", logo: "/images/client-assetz-v3.png" },
                            { name: "SNN Estates", logo: "/images/client-snn-v3.png" }
                        ].map((client, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-all duration-300 group cursor-pointer h-48 flex items-center justify-center"
                            >
                                <div className="relative w-full h-32 opacity-80 group-hover:opacity-100 transition-opacity mix-blend-screen">
                                    <Image
                                        src={client.logo}
                                        alt={`${client.name} Logo`}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
