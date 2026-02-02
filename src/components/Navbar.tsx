"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "About Us",
            href: "#",
            subItems: [
                { name: "Our Story", href: "/about" },
                { name: "Mission", href: "/mission" },
                { name: "Vision", href: "/vision" },
                { name: "Core Values", href: "/core-values" }
            ]
        },
        { name: "Services", href: "/#services" },
        { name: "Projects", href: "/#projects" },
        { name: "Packages", href: "/#packages" },
        { name: "Machinery", href: "/#machinery" },
        { name: "Contact", href: "/contact" },
    ];

    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md border-gray-200 shadow-sm py-4"
                    : "bg-transparent border-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <div className="relative h-20 w-auto">
                        <img
                            src="/images/logo.png"
                            alt="Ajmeraa Construction Logo"
                            className="h-full w-auto object-contain"
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.subItems ? (
                                <button
                                    className={cn(
                                        "text-sm font-medium transition-colors flex items-center gap-1",
                                        isScrolled
                                            ? "text-dark-slate hover:text-primary"
                                            : "text-gray-200 hover:text-white"
                                    )}
                                // Make sure hover works for dropdown
                                >
                                    {link.name}
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-colors",
                                        isScrolled
                                            ? "text-dark-slate hover:text-primary"
                                            : "text-gray-200 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {link.subItems && (
                                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 p-2">
                                    {link.subItems.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            href={sub.href}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-lg"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className={cn(
                            "hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold transition-all rounded-full focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2",
                            isScrolled
                                ? "text-white bg-primary hover:bg-red-700"
                                : "text-dark-slate bg-white hover:bg-gray-100" // White button on dark bg for hero contrast
                        )}
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden transition-colors",
                        isScrolled ? "text-dark-slate" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-lg flex flex-col space-y-4 max-h-[80vh] overflow-y-auto">
                    {navLinks.map((link) => (
                        <div key={link.name}>
                            {link.subItems ? (
                                <div className="space-y-2">
                                    <div className="text-base font-bold text-dark-slate px-2">{link.name}</div>
                                    <div className="pl-4 space-y-2 border-l-2 border-gray-100 ml-2">
                                        {link.subItems.map(sub => (
                                            <Link
                                                key={sub.name}
                                                href={sub.href}
                                                className="block text-sm font-medium text-gray-600 hover:text-primary"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {sub.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="block text-base font-medium text-dark-slate hover:text-primary px-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <Link
                        href="/contact"
                        className="w-full text-center px-6 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-red-700"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Get a Quote
                    </Link>
                </div>
            )}
        </motion.nav>
    );
}
