"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ChevronDown, ChevronUp, Star } from "lucide-react";

type Package = {
    name: string;
    price: string;
    color: string;
    popular?: boolean;
    features: {
        category: string;
        items: string[];
    }[];
};

const packages: Package[] = [
    {
        name: "Basic",
        price: "Rs.1900/- Sq Ft",
        color: "bg-blue-600",
        features: [
            {
                category: "Design & Drawings",
                items: [
                    "2D Floor Plans",
                    "3D Elevation Design",
                    "Structural Drawings",
                    "Electrical & Plumbing Drawings",
                    "Furniture Layout",
                ],
            },
            {
                category: "Civil Construction",
                items: [
                    "Steel: Fe500 Grade (Meenakshi/Prime Gold or equivalent)",
                    "Cement: Grade 43/53 (Dalmia/Zuari or equivalent)",
                    "Aggregates: 20mm & 40mm",
                    "Bricks: Standard Solid Concrete Blocks (6\" & 4\")",
                    "Sand: M-Sand for Blockwork & Plastering",
                    "Concrete: M20 Grade",
                    "Ceiling Height: 10 feet",
                ],
            },
            {
                category: "Structural Designing",
                items: [
                    "Standard Structural Design as per IS Code",
                    "Soil Test Report included",
                ],
            },
            {
                category: "MEP Designing",
                items: [
                    "Standard Electrical Layout",
                    "Standard Plumbing & Drainage Layout",
                ],
            },
            {
                category: "Flooring & Wall Tiling",
                items: [
                    "Living & Dining: Tiles up to Rs.50/sq.ft",
                    "Bedrooms & Kitchen: Tiles up to Rs.50/sq.ft",
                    "Balcony & Sit-out: Anti-skid tiles up to Rs.40/sq.ft",
                    "Bathroom Flooring: Anti-skid tiles up to Rs.40/sq.ft",
                    "Bathroom Wall Cladding: Up to 7ft height (Rs.40/sq.ft)",
                    "Kitchen Counter: Granite up to Rs.120/sq.ft",
                    "Staircase: Granite up to Rs.80/sq.ft",
                ],
            },
            {
                category: "Kitchen",
                items: [
                    "Ceramic Wall Tiling: Up to 2ft above counter (Rs.40/sq.ft)",
                    "Sink: SS Sink worth Rs.3000",
                    "Accessories: Basic fittings",
                ],
            },
            {
                category: "Bathroom & Plumbing",
                items: [
                    "Fixtures: Parryware/Hindware or equivalent",
                    "CP Fittings:  Parryware/Hindware or equivalent",
                    "Pipes: CPVC & PVC (Ashirwad/Supreme)",
                    "Overhead Tank:  1000 Litres (Sintex)",
                ],
            },
            {
                category: "Doors & Windows",
                items: [
                    "Main Door: Teak Wood Frame & Shutter (Basic design)",
                    "Internal Doors: Sal Wood Frame with Flush Shutter",
                    "Bathroom Doors: PVC/WPC Doors",
                    "Windows: Aluminium Sliding Windows (2 track)",
                ],
            },
            {
                category: "Painting",
                items: [
                    "Interior: Tractor Emulsion / Distemper (Asian Paints)",
                    "Exterior: Ace Exterior Emulsion (Asian Paints)",
                    "Metals & Grills: Enamel Paint",
                ],
            },
            {
                category: "Electrical",
                items: [
                    "Wires: Finolex/Polycab (Fire Resistant)",
                    "Switches: Anchor/Roma non-modular",
                ],
            },
            {
                category: "Fabrication",
                items: [
                    "Main Gate: MS Gate (Basic Design)",
                    "Staircase Railing: MS Railing",
                    "Balcony Railing: MS Railing",
                ]
            },
            {
                category: "Compound Wall",
                items: [
                    "4\" Solid Block Wall",
                    "Height: 5ft from ground level",
                    "Plastering & Painting included",
                ]
            },
            {
                category: "Government Liaison",
                items: [
                    "Assistance for Plan Sanction",
                    "Assistance for Electricity & Water Connection",
                    "Note: Official fees to be paid by client",
                ]
            },
            {
                category: "Warranty",
                items: [
                    "1 Year Maintenance Warranty",
                    "10 Years Waterproofing Warranty",
                ]
            }
        ],
    },
    {
        name: "Premium",
        price: "Rs.2200/- Sq Ft",
        color: "bg-purple-600",
        features: [
            {
                category: "Design & Drawings",
                items: [
                    "2D Floor Plans & 3D Elevation Designs",
                    "Structural Design Analysis",
                    "Electrical, Plumbing & HVAC Drawings",
                    "Detailed Furniture Layout",
                    "3 Drawing Revisions",
                ],
            },
            {
                category: "Civil Construction",
                items: [
                    "Steel: Fe550 Grade (JSW/Tata or equivalent)",
                    "Cement: Grade 53 (Ultratech/ACC or equivalent)",
                    "Bricks: Premium Concrete Blocks / Red Bricks",
                    "Sand: Double washed M-Sand",
                    "Concrete: M25 Grade",
                    "Waterproofing: Dr. Fixit/Fosroc for terrace & washrooms",
                    "Ceiling Height: 10 feet",
                ],
            },
            {
                category: "Structural Designing",
                items: [
                    "Detailed Structural Analysis",
                    "Seismic Design considerations",
                    "Overlap Drawings provided",
                ],
            },
            {
                category: "MEP Designing",
                items: [
                    "Detailed Electrical Layout with conduits",
                    "Plumbing & Sanitation Detailed Drawings",
                ],
            },
            {
                category: "Flooring & Wall Tiling",
                items: [
                    "Living, Dining & Bedrooms: Vitrified Tiles up to Rs.70/sq.ft",
                    "Kitchen & Bathroom Flooring: Anti-skid Tiles up to Rs.60/sq.ft",
                    "Bathroom Wall Cladding: Up to 7ft height (Rs.60/sq.ft)",
                    "Kitchen Counter: Granite up to Rs.160/sq.ft",
                    "Staircase: Granite up to Rs.100/sq.ft",
                    "Parking Tiles: Anti-skid tiles up to Rs.45/sq.ft",
                ],
            },
            {
                category: "Kitchen",
                items: [
                    "Wall Tiling: Up to 4ft above counter (Rs.60/sq.ft)",
                    "Sink: SS/Granite Sink worth Rs.5000",
                    "Provision for Chimney & Water Purifier",
                ],
            },
            {
                category: "Bathroom & Plumbing",
                items: [
                    "Fixtures: Jaquar/Cera or equivalent",
                    "CP Fittings: Jaquar/Cera or equivalent",
                    "Pipes: Astral/Ashirwad CPVC",
                    "Solar Connection Provision",
                ],
            },
            {
                category: "Doors & Windows",
                items: [
                    "Main Door: Teak Wood Frame & Teak Shutter (Standard design)",
                    "Internal Doors: Sal Wood Frame with Molded Skin Shutter",
                    "Bathroom Doors: WPC Frame & Shutter",
                    "Windows: UPVC Windows (2 track with mesh)",
                ],
            },
            {
                category: "Painting",
                items: [
                    "Interior: Premium Emulsion (Asian Paints Apcolite)",
                    "Exterior: Apex Ultima (Asian Paints)",
                    "Putty: 2 Coats (Birla/JK)",
                ],
            },
            {
                category: "Electrical",
                items: [
                    "Wires: Finolex/Havells",
                    "Switches: Modular Switches (Anchor/Legrand)",
                    "DB & MCB: IndoAsian/Legrand",
                ],
            },
            {
                category: "Fabrication",
                items: [
                    "Main Gate: MS Designer Gate",
                    "Staircase Railing: SS Railing (202 Grade)",
                    "Balcony Railing: MS Railing / SS Railing",
                ]
            },
            {
                category: "Compound Wall",
                items: [
                    "6\" Solid Block Wall",
                    "Height: 5ft from ground level",
                    "Plastering & Painting included",
                ]
            },
            {
                category: "Government Liaison",
                items: [
                    "End-to-end Assistance for Sanctions",
                    "Liaison for temporary & permanent connections",
                    "Note: Official fees to be paid by client",
                ]
            },
            {
                category: "Warranty",
                items: [
                    "1 Year Maintenance Warranty",
                    "10 Years Waterproofing Warranty",
                ]
            }
        ],
    },
    {
        name: "Luxury",
        price: "Rs.2600/- Sq Ft",
        color: "bg-amber-500",
        popular: true,
        features: [
            {
                category: "Design & Drawings",
                items: [
                    "Advanced 2D & 3D Elevation Designs",
                    "Structural, Electrical, Plumbing & MEP Drawings",
                    "3D Interior Walkthrough",
                    "Landscape Design Basics",
                    "Unlimited Drawing Revisions",
                ],
            },
            {
                category: "Civil Construction",
                items: [
                    "Steel: Fe550D TMT (Tata/JSW)",
                    "Cement: Grade 53 (Ultratech Super/ACC F2R)",
                    "Bricks: Porotherm / High-Quality Red Bricks",
                    "Concrete: Design Mix M25/M30",
                    "Waterproofing: Crystalline (Integral waterproofing)",
                    "Underground Sump: RCC with waterproofing (Capacity 8000L)",
                    "Ceiling Height: 11 feet",
                ],
            },
            {
                category: "Structural Designing",
                items: [
                    "Advanced Structural Analysis",
                    "Earthquake Resistant Design",
                    "Detailed Reinforcement Drawings",
                ],
            },
            {
                category: "MEP Designing",
                items: [
                    "Smart Home Electrical Layout",
                    "Advanced Plumbing & Recirculation Layout",
                    "HVAC Provisions",
                ],
            },
            {
                category: "Flooring & Wall Tiling",
                items: [
                    "Living & Dining: Large Slab Tiles / Italian Marble finish (Rs.100/sq.ft)",
                    "Master Bedroom: Wooden Flooring / Premium Vitrified (Rs.90/sq.ft)",
                    "Bathroom Flooring: Anti-skid Premium Tiles (Rs.80/sq.ft)",
                    "Bathroom Wall Cladding: Up to ceiling height (Rs.80/sq.ft)",
                    "Kitchen Counter: Premium Granite / Quartz up to Rs.200/sq.ft",
                    "Staircase: Premium Granite / Marble with nosing",
                ],
            },
            {
                category: "Kitchen",
                items: [
                    "Wall Tiling: Designer tiles up to ceiling",
                    "Sink: Quartz/Carysil Sink worth Rs.8000",
                    "Gas Piping: Copper piping included",
                ],
            },
            {
                category: "Bathroom & Plumbing",
                items: [
                    "Fixtures: Kohler/Grohe/Toto",
                    "CP Fittings: Kohler/Grohe/Toto (Diverters included)",
                    "Glass Partition: Toughened Glass for Shower Area (Master Bed)",
                    "Tanks: 2000 Litres Overhead",
                ],
            },
            {
                category: "Doors & Windows",
                items: [
                    "Main Door: Burma Teak Frame & Shutter with Carving",
                    "Internal Doors: Teak Wood Frame with Veneer Flush Shutter",
                    "Bathroom Doors: Premium WPC/Teak Frame",
                    "Windows: UPVC Windows (3 track wood finish)",
                ],
            },
            {
                category: "Painting",
                items: [
                    "Interior: Royale Luxury Emulsion (Asian Paints)",
                    "Exterior: Apex Ultima Protek (Warranty backed)",
                    "Texture Paint: 1 Wall highlight in Hall & Bedrooms",
                ],
            },
            {
                category: "Electrical",
                items: [
                    "Wires: Finolex/Polycab (FR-LSH)",
                    "Switches: Premium Modular (Legrand Arteor/Schneider)",
                    "Automation: Basic Smart Home provisions included",
                ],
            },
            {
                category: "Fabrication",
                items: [
                    "Main Gate: SS/MS Designer Gate (Rs.400/sq.ft)",
                    "Railings: SS 304 Grade with Glass for Balconies",
                    "Staircase Railing: SS 304 Grade with Glass/Wood",
                ],
            },
            {
                category: "Compound Wall",
                items: [
                    "6\" Solid Block Wall with Design elements",
                    "Height: 5ft from ground level",
                    "Texture Paint / Cladding highlights included",
                ]
            },
            {
                category: "Government Liaison",
                items: [
                    "Premium Support for Quick Sanctions",
                    "Dedicated Liaison Officer",
                    "Note: Official fees to be paid by client",
                ]
            },
            {
                category: "Warranty",
                items: [
                    "1 Year Maintenance Warranty",
                    "10 Years Waterproofing Warranty",
                ]
            }
        ],
    },
];

export default function Packages() {
    const [openSection, setOpenSection] = useState<{ [key: string]: boolean }>({});

    const toggleSection = (pkgName: string, category: string) => {
        const key = `${pkgName}-${category}`;
        setOpenSection((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <section id="packages" className="py-20 bg-dark-slate relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/bg-packages.png"
                    alt="Packages Background"
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
                        Construction <span className="text-primary">Packages</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Transparent pricing with detailed scope of work. Choose the plan that fits your vision and budget.
                    </p>
                    <div className="inline-flex items-center gap-2 bg-yellow-900/30 border border-yellow-700/50 text-yellow-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                        <Star size={16} fill="currentColor" /> All packages include GST, Transportation, and Labor charges.
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`bg-white rounded-2xl shadow-xl border overflow-hidden relative flex flex-col h-full ${pkg.popular ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-gray-200'}`}
                        >
                            {pkg.popular && (
                                <div className="absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10 shadow-sm">
                                    MOST POPULAR
                                </div>
                            )}

                            <div className={`p-6 text-center text-white ${pkg.color}`}>
                                <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                                <div className="text-3xl font-bold mb-1">{pkg.price}</div>
                                <p className="text-white/80 text-sm">Inclusive of all taxes</p>
                            </div>

                            <div className="flex-1 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-200">
                                {pkg.features.map((feature) => {
                                    const key = `${pkg.name}-${feature.category}`;
                                    const isOpen = openSection[key] !== false; // Default behavior

                                    return (
                                        <div key={feature.category} className="border-b border-gray-100 last:border-0">
                                            <button
                                                onClick={() => toggleSection(pkg.name, feature.category)}
                                                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors text-left"
                                            >
                                                <span className="font-semibold text-dark-slate text-sm">{feature.category}</span>
                                                {openSection[key] ? <ChevronUp size={16} className="text-gray-400" /> : <ChevronDown size={16} className="text-gray-400" />}
                                            </button>

                                            <AnimatePresence>
                                                {openSection[key] && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.2 }}
                                                        className="bg-gray-50/50"
                                                    >
                                                        <ul className="px-4 pb-4 pt-1 text-sm space-y-2.5">
                                                            {feature.items.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-2 text-gray-600 leading-snug">
                                                                    <Check size={14} className={`min-w-[14px] mt-0.5 ${pkg.name === 'Basic' ? 'text-blue-500' : pkg.name === 'Premium' ? 'text-purple-500' : 'text-amber-500'}`} strokeWidth={3} />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="p-6 bg-white border-t border-gray-100">
                                <Link href={`?plan=${pkg.name.toLowerCase()}#contact`} className={`block w-full text-center py-3.5 rounded-lg font-bold text-white transition-all shadow-md active:scale-95 ${pkg.color} hover:brightness-110`}>
                                    Choose {pkg.name}
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
