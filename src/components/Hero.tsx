"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const [displayText, setDisplayText] = React.useState({ base: "", highlight: "" });
    const [quoteIndex, setQuoteIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [typingSpeed, setTypingSpeed] = React.useState(100);

    const quotes = React.useMemo(() => [
        { base: "Shaping Bengaluru's Skyline with", highlight: " Excellence & Precision." },
        { base: "Building Dreams with", highlight: " Uncompromised Quality." },
        { base: "Engineering the Future of", highlight: " Urban Living." }
    ], []);

    React.useEffect(() => {
        const currentQuote = quotes[quoteIndex];
        const fullText = currentQuote.base + currentQuote.highlight;

        const handleTyping = () => {
            const currentFullLength = (displayText.base + displayText.highlight).length;

            if (isDeleting) {
                // Deleting
                if (currentFullLength > 0) {
                    const newText = fullText.substring(0, currentFullLength - 1);
                    if (newText.length > currentQuote.base.length) {
                        setDisplayText({
                            base: currentQuote.base,
                            highlight: newText.substring(currentQuote.base.length)
                        });
                    } else {
                        setDisplayText({
                            base: newText,
                            highlight: ""
                        });
                    }
                    setTypingSpeed(50);
                } else {
                    setIsDeleting(false);
                    setQuoteIndex((prev) => (prev + 1) % quotes.length);
                    setTypingSpeed(100);
                }
            } else {
                // Typing
                if (currentFullLength < fullText.length) {
                    const newText = fullText.substring(0, currentFullLength + 1);
                    if (newText.length > currentQuote.base.length) {
                        setDisplayText({
                            base: currentQuote.base,
                            highlight: newText.substring(currentQuote.base.length)
                        });
                    } else {
                        setDisplayText({
                            base: newText,
                            highlight: ""
                        });
                    }
                    setTypingSpeed(100);
                } else {
                    // Finished typing, wait before deleting
                    setTypingSpeed(2000);
                    setIsDeleting(true);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, quoteIndex, quotes, typingSpeed]);

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black/50" /> {/* Overlay */}
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 h-[160px] md:h-[120px] flex flex-col justify-center">
                        <span>{displayText.base}</span>
                        <span className="text-primary">{displayText.highlight}</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-3xl mx-auto text-lg md:text-xl text-gray-200 mb-10"
                >
                    Specializing in Residential, Commercial, and Infrastructure projects with a focus on trust and transparency.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-primary rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
                    >
                        View Our Work <ArrowRight size={20} />
                    </Link>
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-dark-slate transition-colors"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
