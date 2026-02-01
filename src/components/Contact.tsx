"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const [formStatus, setFormStatus] = React.useState<"idle" | "submitting" | "success" | "error">("idle");
    const [result, setResult] = React.useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus("submitting");
        setResult("");

        const formData = new FormData(e.currentTarget);
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
        <section id="contact" className="py-20 bg-white">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-slate mb-4">
                        Get in <span className="text-primary">Touch</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Ready to build your dream project? Contact us for a free quote and consultation.
                    </p>
                </div>

                {/* Leadership Section */}
                <div className="mb-16 max-w-5xl mx-auto">
                    <h3 className="text-2xl font-bold text-dark-slate mb-8 text-center md:text-left">Meet Our Leadership</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Director 1: Asgar Ali */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-4 text-center hover:shadow-md transition-shadow">
                            <div className="w-40 h-48 shrink-0 overflow-hidden rounded-lg shadow-sm">
                                <img
                                    src="/images/asgar-ali.jpg"
                                    alt="Mr. Asgar Ali"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                                    }}
                                />
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                                    <span className="text-primary text-xl font-bold">AA</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-dark-slate">Mr. Asgar Ali</h4>
                                <p className="text-gray-500 text-sm tracking-wide uppercase mb-2">Director</p>
                                <p className="text-primary font-semibold flex items-center justify-center gap-2 text-sm">
                                    +91-7795840938
                                </p>
                            </div>
                        </div>

                        {/* Director 2: Hayat Alam */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-4 text-center hover:shadow-md transition-shadow">
                            <div className="w-40 h-48 shrink-0 overflow-hidden rounded-lg shadow-sm">
                                <img
                                    src="/images/hayat-alam.jpg"
                                    alt="Mr. Hayat Alam"
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                                    }}
                                />
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                                    <span className="text-dark-slate text-xl font-bold">HA</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-dark-slate">Mr. Hayat Alam</h4>
                                <p className="text-gray-500 text-sm tracking-wide uppercase mb-2">Director</p>
                                <p className="text-primary font-semibold flex items-center justify-center gap-2 text-sm">
                                    +91-9900639329
                                </p>
                            </div>
                        </div>

                        {/* Operations Head */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-4 text-center hover:shadow-md transition-shadow">
                            <div className="w-40 h-48 shrink-0 overflow-hidden rounded-lg shadow-sm bg-gray-50 flex items-center justify-center p-1">
                                <img
                                    src="/images/somashekar-ks.png"
                                    alt="Somashekar KS"
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        (e.target as HTMLImageElement).nextElementSibling!.classList.remove('hidden');
                                    }}
                                />
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center hidden">
                                    <span className="text-gray-400 text-xl font-bold">OH</span>
                                </div>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-dark-slate">Somashekar KS</h4>
                                <p className="text-gray-500 text-sm tracking-wide uppercase mb-2">Operations Head</p>
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
                        className="bg-gray-50 p-8 md:p-10 rounded-2xl shadow-sm border border-gray-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="package" className="text-sm font-semibold text-gray-700">Interested Package</label>
                                <select
                                    name="package"
                                    id="package"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all bg-white"
                                >
                                    <option value="">Select a package</option>
                                    <option value="basic">Basic (Rs.1620/sqft)</option>
                                    <option value="premium">Premium (Rs.1830/sqft)</option>
                                    <option value="luxury">Luxury (Rs.1999/sqft)</option>
                                    <option value="custom">Custom Requirement</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project requirements..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
                                ></textarea>
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
