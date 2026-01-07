"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin as faLinkedinBrand,
  faGithub as faGithubBrand,
  faTwitter as faTwitterBrand
} from "@fortawesome/free-brands-svg-icons";
import { useLocale } from "@/i18n/LocaleProvider";

export default function Footer() {
  const { t: translate } = useLocale();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faLinkedinBrand,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/david-obonyano-bb3478256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "hover:text-blue-400"
    },
    {
      icon: faGithubBrand,
      label: "GitHub",
      url: "https://github.com/davidobonyano",
      color: "hover:text-gray-300"
    },
    {
      icon: faTwitterBrand,
      label: "X (Twitter)",
      url: "https://x.com/davidalocaefe?s=21",
      color: "hover:text-blue-400"
    },
    {
      icon: faEnvelope,
      label: "Email",
      url: "mailto:davidobonyanoefe@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  const quickLinks = [
    { nameKey: "nav_home", href: "#home" },
    { nameKey: "nav_about", href: "#about" },
    { nameKey: "nav_projects", href: "#projects" },
    { nameKey: "nav_contact", href: "#contact" }
  ];

  return (
    <footer className="bg-black border-t border-white/5 pb-8 pt-4">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 font-mono text-xs uppercase tracking-widest">
            <span>© {currentYear} David Obonyano. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-white/40 hover:text-[#9EFF00] transition-colors duration-300 group"
          >
            <span className="font-mono text-xs uppercase tracking-widest">{translate("backToTop")}</span>
            <FontAwesomeIcon icon={faArrowUp} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
