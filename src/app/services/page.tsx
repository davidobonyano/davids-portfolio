"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faGraduationCap,
    faBuilding,
    faBlog,
    faMobile,
    faLaptop,
    faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "@/i18n/LocaleProvider";

export default function ServicesPage() {
    const { t } = useLocale();

    const services = [
        {
            icon: faShoppingCart,
            title: t("ecommerceTitle"),
            description: t("ecommerceDesc")
        },
        {
            icon: faGraduationCap,
            title: t("schoolTitle"),
            description: t("schoolDesc")
        },
        {
            icon: faBuilding,
            title: t("businessTitle"),
            description: t("businessDesc")
        },
        {
            icon: faBlog,
            title: t("blogTitle"),
            description: t("blogDesc")
        },
        {
            icon: faMobile,
            title: t("portfolioTitle"),
            description: t("portfolioDesc")
        },
        {
            icon: faLaptop,
            title: t("webappTitle"),
            description: t("webappDesc")
        }
    ];

    return (
        <div className="min-h-screen bg-black text-[#E2E1DF]">
            <Navbar />

            <main className="pt-32 pb-24">
                {/* Header Section */}
                <section className="px-6 lg:px-16 max-w-[1400px] mx-auto mb-20 lg:mb-32">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <span className="text-[10px] uppercase tracking-[0.5em] text-[#9EFF00] font-medium">[ WHAT I DO ]</span>
                            <div className="h-[1px] w-16 bg-[#9EFF00]/30" />
                        </div>
                        <h1 className="text-6xl lg:text-[7rem] font-display uppercase leading-[0.85] tracking-tighter">
                            My <br /> <span className="opacity-30 italic">Services</span>
                        </h1>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="px-6 lg:px-16 max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group p-8 border border-white/10 bg-[#050505] hover:border-[#9EFF00]/30 hover:bg-white/[0.02] transition-colors relative"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white/40 mb-8 group-hover:text-[#9EFF00] group-hover:bg-[#9EFF00]/10 transition-colors">
                                    <FontAwesomeIcon icon={service.icon} className="text-xl" />
                                </div>

                                <h3 className="text-2xl font-display uppercase tracking-wide text-white mb-4">{service.title}</h3>
                                <p className="text-white/60 font-sans leading-relaxed text-sm mb-8 min-h-[60px]">
                                    {service.description}
                                </p>

                                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#9EFF00] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                    <span>Start Project</span>
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

            </main>

            <Contact />
            <Footer />
        </div>
    );
}
