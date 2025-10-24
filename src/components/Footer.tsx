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
    <footer className="bg-gray-900/50 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400">
              <span>© {currentYear} David Obonyano. All rights reserved.</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <FontAwesomeIcon icon={faArrowUp} />
              <span>{translate("backToTop")}</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
