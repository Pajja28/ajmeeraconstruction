"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-dark-slate text-white pt-16 pb-8">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="mb-6 bg-white p-3 rounded-xl inline-block">
                            <div className="relative h-24 w-auto">
                                <img
                                    src="/images/logo.png"
                                    alt="Ajmeraa Construction Logo"
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Shaping Bengaluru's skyline with excellence, precision, and a commitment to quality. Trusted by families and businesses alike.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <svg
                                    viewBox="0 0 24 24"
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-primary/30 inline-block pb-1">Company</h3>
                        <ul className="space-y-2">
                            {["About Us", "Mission", "Vision", "Core Values"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(" ", "-") === "about-us" ? "about" : item.toLowerCase().replace(" ", "-")}`} className="text-gray-400 hover:text-white hover:pl-1 transition-all text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-primary/30 inline-block pb-1">Navigation</h3>
                        <ul className="space-y-2">
                            {["Home", "Services", "Projects", "Machinery", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase() === "home" ? "" : "#" + item.toLowerCase()}`} className="text-gray-400 hover:text-white hover:pl-1 transition-all text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-primary/30 inline-block pb-1">Services</h3>
                        <ul className="space-y-2">
                            {["Building Construction", "Project Design", "Renovation", "Structural Repairs"].map((item) => (
                                <li key={item}>
                                    <Link href="/#services" className="text-gray-400 hover:text-white hover:pl-1 transition-all text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b border-primary/30 inline-block pb-1">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400 text-sm">
                                <MapPin size={18} className="text-primary min-w-[18px] mt-0.5" />
                                <span>
                                    S.L.V. Complex, Sirinagar, Reva - BSF Circle,<br />
                                    Kattigenahalli, Bagaluru Main Road,<br />
                                    Yelahanka, Bengaluru - 560 063
                                </span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Phone size={18} className="text-primary min-w-[18px]" />
                                <span>+91 77958 40938 | +91 99006 39329</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400 text-sm">
                                <Mail size={18} className="text-primary min-w-[18px]" />
                                <span>ajmeraaconstruction@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Ajmeraa Construction Pvt. Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
