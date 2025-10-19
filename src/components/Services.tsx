"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faShoppingCart,
  faGraduationCap,
  faBuilding,
  faBlog,
  faMobile,
  faLaptop
} from "@fortawesome/free-solid-svg-icons";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Services() {
  const { t } = useLocale();
  const [isVisible, setIsVisible] = useState(false);

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

  useEffect(() => {
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 px-4 relative bg-black">
      <div id="services-section" className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            {t("servicesTitle")}
          </motion.h2>
        </div>

        {/* Clean Services List */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 py-6 border-b border-gray-800/50 last:border-b-0"
              >
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center">
                  <FontAwesomeIcon icon={service.icon} className="text-2xl text-gray-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}