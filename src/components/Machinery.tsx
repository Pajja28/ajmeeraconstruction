"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Construction, Scissors, RefreshCw, Zap, Activity, Hammer,
    ArrowUpFromLine, Expand, ChevronsUp, Square, Grid3x3,
    Disc, Crosshair, Brackets, ArrowDownToLine, Magnet,
    TowerControl, Scan, Eye
} from "lucide-react";

export default function Machinery() {
    return (
        <section id="machinery" className="py-20 bg-dark-slate text-white relative overflow-hidden">
            {/* Background pattern/texture */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#444_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Plant & <span className="text-primary">Machinery</span></h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Ajmeraa Construction owns a wide range of modern machinery ensuring quality and timely execution.
                        We maintain complete in-house capability for all construction needs, reducing reliance on external rentals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Bar Bending Machine", qty: "3 Each", icon: Construction },
                        { name: "Cutting Machine", qty: "3 Each", icon: Scissors },
                        { name: "Concrete Mixer (Diesel)", qty: "2 Each", icon: RefreshCw },
                        { name: "Concrete Mixer (Electric)", qty: "1 Each", icon: Zap },
                        { name: "Concrete Needle Vibrator", qty: "10 Each", icon: Activity },
                        { name: "Concrete Chipping Machine", qty: "10 Each", icon: Hammer },
                        { name: "Material Hoist (1 Ton, 60mtr)", qty: "2 Each", icon: ArrowUpFromLine },
                        { name: "Acro Span", qty: "1500 Each", icon: Expand },
                        { name: "MS Jacks", qty: "9000 Each", icon: ChevronsUp },
                        { name: "MS Plate 2'x3'", qty: "6000 Each", icon: Square },
                        { name: "Scaffolding Materials MS", qty: "30000 Sqm", icon: Grid3x3 },
                        { name: "Grinding Machine", qty: "10 Each", icon: Disc },
                        { name: "Drilling Machine", qty: "10 Each", icon: Crosshair },
                        { name: "C Channel", qty: "1200 Rm", icon: Brackets },
                        { name: "Base Jacks MS", qty: "1500 Each", icon: ArrowDownToLine },
                        { name: "U Jacks MS", qty: "1500 Each", icon: Magnet },
                        { name: "Mobile Tower Crane", qty: "1 Each", icon: TowerControl },
                        { name: "Total Station", qty: "1 Each", icon: Scan },
                        { name: "Dumpy Level", qty: "3 Each", icon: Eye }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.05 }}
                            viewport={{ once: true }}
                            className="bg-white/5 border border-white/10 rounded-lg p-6 flex justify-between items-center hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-primary/20 text-primary rounded-full">
                                    <item.icon size={22} strokeWidth={2.5} />
                                </div>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                            </div>
                            <div className="text-right">
                                <span className="block text-2xl font-bold text-white">{item.qty.split(' ')[0]}</span>
                                <span className="text-xs text-gray-400 uppercase">{item.qty.split(' ').slice(1).join(' ')}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
