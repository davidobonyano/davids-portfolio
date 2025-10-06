"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faArrowUp
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
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">David Obonyano</h3>
            <p className="text-gray-400 leading-relaxed">
              Full-stack developer, bugs hate to see me coming. 
              I make websites that don&apos;t break when you click them (most of the time).
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-gray-800/50 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} hover:border-blue-500/50 transition-all duration-300`}
                  title={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links + Resume CTA */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{translate("quickLinks")}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {translate(link.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => window.open('/david-cv.pdf', '_blank')}
              className="mt-4 w-full px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/30 transition-colors duration-300"
            >
              {translate('viewCv')}
            </button>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">{translate("getInTouch")}</h4>
            <div className="space-y-2">
              <p className="text-gray-400">
                <span className="text-white font-medium">{translate("email")}</span> davidobonyanoefe@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">{translate("location")}</span> Lagos, Nigeria
              </p>
              <p className="text-gray-400">
                <span className="text-white font-medium">{translate("status")}</span> 
                <span className="text-green-400 ml-2">{translate("availableForWork")}</span>
              </p>
            </div>
          </div>
        </div>

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
