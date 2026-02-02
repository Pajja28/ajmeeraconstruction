import { Suspense } from "react";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
    title: "Contact Us | Ajmeraa Constructions Private Ltd",
    description: "Get in touch with Ajmeraa Constructions for premium residential and commercial projects in Bengaluru. Call now for a free consultation.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen">
            <Suspense fallback={<div>Loading...</div>}>
                <Contact />
            </Suspense>
        </main>
    );
}
