"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

const testimonials = [
    {
        name: "Wale",
        role: "Senior Developer, NSDC",
        text: "I led the NSDC website build and David, as a young dev then, consistently delivered clean, reliable features. His hunger to learn and speed of iteration made a real impact on our timelines.",
        image: "/testimonials/wale.JPG",
        rating: 5
    },
    {
        name: "Alhaja",
        role: "Staff, Yano School",
        text: "Our school portal became so much easier to use. Payments, timetables and results are clear and fast. David listened to our needs and shipped exactly what helped the team.",
        image: "/testimonials/alaha.jpg",
        rating: 5
    },
    {
        name: "Mrs Diamond",
        role: "Proprietor & Head of School, Yano School",
        text: "From stability to usability, David delivered a system we trust every day. Parents, teachers and students all found it intuitive and it truly elevated our operations.",
        image: "/testimonials/mrsdiamond.jpg",
        rating: 5
    },
    {
        name: "Joy",
        role: "Owner, Deluxe Store (E-commerce)",
        text: "David built our online store with great attention to speed and conversion. The checkout is smooth, and our catalog management is a breeze now.",
        image: "/testimonials/joy.jpg",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-black text-[#E2E1DF] border-t border-white/5 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

                {/* Header */}
                <div className="flex flex-col gap-6 mb-20 text-center">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#E2E1DF] font-medium">[ REVIEWS ]</span>
                    <h2 className="text-4xl lg:text-6xl font-display uppercase tracking-tighter">
                        Client <span className="opacity-30 italic">Stories</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 border border-white/10 bg-[#050505] relative group hover:border-[#E2E1DF]/30 transition-colors flex flex-col h-full"
                        >
                            <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-white/10 mb-6 group-hover:text-[#E2E1DF] transition-colors" />

                            <p className="text-lg text-white/80 font-sans leading-relaxed mb-8 flex-grow">
                                "{item.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto pt-8 border-t border-white/5">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="font-display text-lg uppercase tracking-wide text-white">{item.name}</span>
                                    <span className="text-xs font-mono text-[#E2E1DF] uppercase tracking-wider">{item.role}</span>
                                </div>
                            </div>

                            <div className="absolute top-8 right-8 flex gap-1 text-[#E2E1DF]/40">
                                {[...Array(item.rating)].map((_, r) => (
                                    <FontAwesomeIcon key={r} icon={faStar} className="text-xs" />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
