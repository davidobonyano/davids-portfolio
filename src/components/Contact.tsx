"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faPaperPlane,
  faCheckCircle,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import { 
  faLinkedin as faLinkedinBrand,
  faGithub as faGithubBrand,
  faTwitter as faTwitterBrand
} from "@fortawesome/free-brands-svg-icons";
import emailjs from '@emailjs/browser';
import { useLocale } from "@/i18n/LocaleProvider";

export default function Contact() {
  const { t } = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // EmailJS configuration - you'll need to replace these with your actual values
      const serviceId = 'service_wqnlyzs';
      const templateId = 'template_2qsawal';
      const publicKey = '6Q4DdR03xq4twi3Nj';

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly.');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t("letsConnect")}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Simple CTA with icons and availability (no cards) */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              {/* Social icons inline (no cards) */}
              <div className="flex flex-wrap items-center gap-5 justify-center lg:justify-start text-gray-400">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 transition-colors ${social.color}`}
                    title={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-2xl" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">{t("sendMessage")}</h3>
            
            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <FontAwesomeIcon icon={faCheckCircle} className="text-green-400 text-6xl mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">{t("messageSent")}</h4>
                <p className="text-gray-400">{t("thanksSoon")}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                      {t("fullName")}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder={t("fullNamePlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                      {t("emailAddress")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                      placeholder={t("emailPlaceholder")}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 text-sm font-medium mb-2">
                    {t("subject")}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder={t("subjectPlaceholder")}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder={t("messagePlaceholder")}
                  />
                </div>

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <FontAwesomeIcon icon={faExclamationCircle} className="text-red-400" />
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>{t("sending")}</span>
                    </>
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPaperPlane} />
                      <span>{t("sendMessage")}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

