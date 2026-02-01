"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, HardHat, FileCheck } from "lucide-react";

export default function Safety() {
    return (
        <section className="py-20 bg-primary text-white">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Safety Is Our Priority</h2>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-red-100 mb-12">
                        At Ajmeraa Construction, we strictly adhere to international safety standards. Our zero-accident policy ensures the well-being of our workforce and the integrity of your project.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: HardHat, title: "Mandatory Safety Gear", desc: "Helmets, vests, and boots for every worker, every day." },
                        { icon: FileCheck, title: "Strict Protocols", desc: "Daily site briefings and regular safety audits." },
                        { icon: Shield, title: "Risk Management", desc: "Proactive hazard identification and mitigation strategies." },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
                        >
                            <div className="inline-flex  items-center justify-center p-4 bg-white text-primary rounded-full mb-4">
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-red-100 text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
