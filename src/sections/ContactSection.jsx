import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personal';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    // Validate simple required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields (Name, Email, Message).'
      });
      setLoading(false);
      return;
    }

    try {
      const { serviceId, templateId, publicKey } = personalInfo.emailjs;
      const isEmailJsConfigured = 
        serviceId && 
        templateId && 
        publicKey && 
        serviceId !== 'YOUR_SERVICE_ID' &&
        publicKey !== 'YOUR_PUBLIC_KEY';

      if (isEmailJsConfigured) {
        // Send email via EmailJS API
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || 'New message from portfolio',
            message: formData.message,
            to_name: personalInfo.name,
          },
          publicKey
        );
      } else {
        // Simulation mode for demo & development
        await new Promise(resolve => setTimeout(resolve, 800));
      }

      // Trigger Confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#3678F7', '#10B981', '#60A5FA']
      });

      setStatus({
        type: 'success',
        message: isEmailJsConfigured
          ? 'Thank you! Your message has been sent successfully. I will get back to you shortly.'
          : 'Thank you! Your message was received in demo mode. (Configure your free EmailJS keys in src/data/personal.js to send directly to your inbox!)'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (err) {
      console.error('Email send error:', err);
      setStatus({
        type: 'error',
        message: 'An error occurred while sending your message. Please reach out directly to ' + personalInfo.email
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-4">
      <div className="rounded-3xl neu-card p-6 sm:p-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-8 pb-2">
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-xs text-slate-400">Let's discuss opportunities, collaborations, or tech</p>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Status Card */}
            <div className="p-5 rounded-2xl bg-neu-card dark:bg-neu-darkCard shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/80 dark:border-white/5">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <h3 className="font-bold text-sm text-slate-800 dark:text-white">
                  Available for Opportunities
                </h3>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                I am currently open to full-time roles, internships, and freelance projects. Let's create something impactful together!
              </p>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-4 rounded-2xl neu-button flex items-center gap-3.5 group cursor-pointer block"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-[11px] font-medium text-slate-400 block">Email Me</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white group-hover:text-primary transition-colors truncate block">
                  {personalInfo.email}
                </span>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-4 rounded-2xl neu-button flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-medium text-slate-400 block">Location</span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-white">
                  {personalInfo.location}
                </span>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                Connect Across The Web
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl neu-button flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personalInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl neu-button flex items-center justify-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Neumorphic Contact Form */}
          <div className="lg:col-span-7 rounded-2xl bg-neu-card dark:bg-neu-darkCard shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/80 dark:border-white/5 p-6 sm:p-8">
            <h3 className="font-bold text-base text-slate-800 dark:text-white mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            {/* Status Feedback Alert */}
            {status.message && (
              <div 
                className={`p-4 rounded-xl text-xs flex items-start gap-2.5 mb-6 ${
                  status.type === 'success' 
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' 
                    : 'bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-2.5 rounded-xl neu-inset text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-xl neu-inset text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineering Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl neu-inset text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Hasan, I'd like to discuss a software project with you..."
                  className="w-full px-4 py-2.5 rounded-xl neu-inset text-xs sm:text-sm text-slate-800 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl neu-btn-primary font-semibold text-xs sm:text-sm text-white shadow-neu-accent flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
