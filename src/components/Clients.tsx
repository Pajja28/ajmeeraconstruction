"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Clients() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-6">
                        Trusted by <span className="text-primary">Industry Leaders</span>
                    </h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        We are proud to have partnered with some of the most visible and respected names in the construction and real estate sectors. Our reputation is built on their trust.
                    </p>

                    <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <img
                            src="/images/our-clients-banner.png"
                            alt="Our Clients - Adarsh Group, Assetz, SNN Estates"
                            className="w-full h-auto rounded-xl hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
