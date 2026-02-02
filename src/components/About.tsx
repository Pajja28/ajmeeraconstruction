"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, Eye, ShieldCheck, Users } from "lucide-react";

export default function About() {
    const items = [
        {
            title: "About Us",
            desc: "Learn about our journey, expertise, and commitment to excellence.",
            icon: Users,
            link: "/about",
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Our Mission",
            desc: "Discover our purpose and the standards we strive to uphold.",
            icon: Target,
            link: "/mission",
            color: "bg-green-50 text-green-600"
        },
        {
            title: "Our Vision",
            desc: "See where we are headed and how we plan to shape the future.",
            icon: Eye,
            link: "/vision",
            color: "bg-purple-50 text-purple-600"
        },
        {
            title: "Core Values",
            desc: "Explore the principles that guide every decision we make.",
            icon: ShieldCheck,
            link: "/core-values",
            color: "bg-orange-50 text-orange-600"
        }
    ];

    return (
        <section id="about" className="py-20 bg-dark-slate relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-about.png"
                    alt="About Background"
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

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Who <span className="text-primary">We Are</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        We are more than just a construction company; we are partners in building your dreams. Explore our story and values below.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group flex flex-col items-center text-center"
                        >
                            <div className={`p-4 rounded-full mb-6 ${item.color} group-hover:scale-110 transition-transform`}>
                                <item.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-dark-slate mb-3">{item.title}</h3>
                            <p className="text-sm text-gray-500 mb-6 flex-grow leading-relaxed">
                                {item.desc}
                            </p>
                            <Link
                                href={item.link}
                                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                            >
                                Read More <ArrowRight size={16} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
