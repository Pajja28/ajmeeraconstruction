"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Contact() {
    const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
    const [result, setResult] = React.useState<string>("");
    const searchParams = useSearchParams();
    const [selectedPackage, setSelectedPackage] = React.useState("");

    React.useEffect(() => {
        const plan = searchParams.get("plan");
        if (plan) {
            setSelectedPackage(plan);
        }
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");
        setResult("");

        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;
        const phone = formData.get("phone") as string;

        // Validation Checks
        const nameRegex = /^[A-Za-z\s]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!name || name.trim().length < 3) {
            setFormStatus("error");
            setResult("Name must be at least 3 characters long.");
            return;
        }

        if (!nameRegex.test(name)) {
            setFormStatus("error");
            setResult("Name should only contain letters and spaces.");
            return;
        }

        // Strict 10 digit check
        if (!phoneRegex.test(phone)) {
            setFormStatus("error");
            setResult("Phone number must be exactly 10 digits.");
            return;
        }

        // Add your Web3Forms Access Key here
        formData.append("access_key", "8406f724-ec69-44c9-94cf-1804d43a905a");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setFormStatus("success");
                setResult("Message sent successfully! We will get back to you soon.");
                (e.target as HTMLFormElement).reset();
            } else {
                setFormStatus("error");
                setResult(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setFormStatus("error");
            setResult("Failed to send message. Please try again later.");
        }
    };

    return (
        <section id="contact" className="py-20 bg-dark-slate relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-contact.png"
                    alt="Contact Background"
                    fill
                    className="object-cover"
                    quality={90}
                    priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-dark-slate/85 via-dark-slate/70 to-dark-slate/50" />
                {/* Top Fade for smooth transition */}
                <div className="absolute top-0 left-0 right-0 h-40 md:h-64 bg-gradient-to-b from-dark-slate via-dark-slate/80 to-transparent" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Ready to build your dream project? Contact us for a free quote and consultation.
                    </p>
                </div>

                {/* Leadership Section */}
                <div className="mb-16 max-w-5xl mx-auto">
                    <h3 className="text-2xl font-bold text-white mb-8 text-center md:text-left">Meet Our Leadership</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Director 1: Asgar Ali */}
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 flex flex-col items-center gap-4 text-center hover:bg-white/10 transition-colors group">
                            <div className="w-40 h-48 shrink-0 overflow-hidden rounded-lg shadow-sm">
                                <img
                                    src="/images/asgar-ali.jpg"
                                    alt="Mr. Asgar Ali"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                                    }}
                                />
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center hidden">
                                    <span className="text-white text-xl font-bold">AA</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Mr. Asgar Ali</h4>
                                <p className="text-gray-400 text-sm tracking-wide uppercase mb-2">Director</p>
                                <p className="text-primary font-semibold flex items-center justify-center gap-2 text-sm">
                                    +91-7795840938
                                </p>
                            </div>
                        </div>

                        {/* Director 2: Hayat Alam */}
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 flex flex-col items-center gap-4 text-center hover:bg-white/10 transition-colors group">
                            <div className="w-40 h-48 shrink-0 overflow-hidden rounded-lg shadow-sm">
                                <img
                                    src="/images/hayat-alam.jpg"
                                    alt="Mr. Hayat Alam"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                                    }}
                                />
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center hidden">
                                    <span className="text-white text-xl font-bold">HA</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Mr. Hayat Alam</h4>
                                <p className="text-gray-400 text-sm tracking-wide uppercase mb-2">Director</p>
                                <p className="text-primary font-semibold flex items-center justify-center gap-2 text-sm">
                                    +91-9900639329
                                </p>
                            </div>
                        </div>

                        {/* Operations Head */}
                        <div className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/10 flex flex-col items-center gap-4 text-center hover:bg-white/10 transition-colors group">
                            <div className="w-40 h-48 shrink-0 overflow-hidden rounded-lg shadow-sm bg-white/10 flex items-center justify-center p-1">
                                <img
                                    src="/images/somashekar-ks.png"
                                    alt="Somashekar KS"
                                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                                    }}
                                />
                                <div className="w-full h-full bg-gray-700 flex items-center justify-center hidden">
                                    <span className="text-gray-400 text-xl font-bold">OH</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">Somashekar KS</h4>
                                <p className="text-gray-400 text-sm tracking-wide uppercase mb-2">Operations Head</p>
                                <p className="text-primary font-semibold flex items-center justify-center gap-2 text-sm">
                                    +91 9945008673
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-md p-8 md:p-10 rounded-2xl shadow-xl border border-white/10"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-200">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        required
                                        minLength={3}
                                        pattern="[A-Za-z\s]+"
                                        title="Name should only contain letters and be at least 3 characters long"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-gray-200">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="9876543210"
                                        className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                        required
                                        maxLength={10}
                                        pattern="[0-9]{10}"
                                        title="Please enter exactly 10 digits"
                                        onInput={(e) => {
                                            const target = e.target as HTMLInputElement;
                                            target.value = target.value.replace(/\D/g, '').slice(0, 10);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-200">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="package" className="text-sm font-semibold text-gray-200">Interested Package</label>
                                <select
                                    name="package"
                                    id="package"
                                    value={selectedPackage}
                                    onChange={(e) => setSelectedPackage(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all [&>option]:bg-dark-slate [&>option]:text-white"
                                >
                                    <option value="">Select a package</option>
                                    <option value="basic">Basic (Rs.1900/sqft)</option>
                                    <option value="premium">Premium (Rs.2200/sqft)</option>
                                    <option value="luxury">Luxury (Rs.2600/sqft)</option>
                                    <option value="custom">Custom Requirement</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-200">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    maxLength={3000}
                                    placeholder="Tell us about your project requirements... (Max 3000 chars)"
                                    className="w-full px-4 py-3 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                                    onChange={(e) => {
                                        const len = e.target.value.length;
                                        const counter = document.getElementById('char-counter');
                                        if (counter) counter.innerText = `${len}/3000`;
                                    }}
                                ></textarea>
                                <div className="text-right text-xs text-gray-400" id="char-counter">0/3000</div>
                            </div>

                            <button
                                type="submit"
                                disabled={formStatus === "submitting"}
                                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {formStatus === "submitting" ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>

                            {formStatus === "success" && (
                                <div className="p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
                                    <CheckCircle size={20} />
                                    <span>{result}</span>
                                </div>
                            )}

                            {formStatus === "error" && (
                                <div className="p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                                    <AlertCircle size={20} />
                                    <span>{result}</span>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
