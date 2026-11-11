import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Code2, 
  Briefcase, 
  GraduationCap, 
  Award, 
  FileText, 
  Mail, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/personal';
import ThemeToggle from './ThemeToggle';

export const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About Me', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'resume', label: 'Resume', icon: FileText },
  { id: 'contact', label: 'Contact', icon: Mail },
];

export default function Sidebar({ activeSection, setActiveSection }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile drawer on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between">
      <div>
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 px-2 py-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm flex items-center justify-center border border-white/80 dark:border-white/5">
            <span className="text-primary font-black text-xl tracking-tight">H</span>
          </div>
          <span className="font-bold text-xl text-slate-800 dark:text-white tracking-wide">
            {personalInfo.firstName}
          </span>
        </div>

        {/* Profile Avatar Card */}
        <div className="flex flex-col items-center text-center p-3 mb-6 rounded-2xl bg-neu-card dark:bg-neu-darkCard shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/60 dark:border-white/5">
          <div className="relative mb-2.5">
            <div className="w-20 h-20 rounded-full p-1 bg-neu-card dark:bg-neu-darkCard shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm flex items-center justify-center">
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80";
                }}
              />
            </div>
            {/* Online Status Dot */}
            <span 
              className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-neu-bg dark:border-neu-darkBg shadow-sm animate-pulse"
              title="Available for opportunities"
            />
          </div>
          <h2 className="font-semibold text-sm text-slate-800 dark:text-white">
            {personalInfo.name}
          </h2>
          <p className="text-xs text-slate-400 dark:text-slate-400 font-medium">
            {personalInfo.tagline}
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-50/80 dark:bg-primary/15 text-primary shadow-neu-pressed-sm dark:shadow-neu-dark-pressed-sm font-bold'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-white/40 dark:hover:bg-slate-800/40'
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isActive ? 'text-primary scale-110' : 'text-slate-400 dark:text-slate-400'
                  }`}
                />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Area: Theme Toggle & Social Links */}
      <div className="pt-4 border-t border-slate-200/50 dark:border-slate-800/80 mt-4">
        {/* Theme Toggle */}
        <div className="mb-4 flex justify-center">
          <ThemeToggle />
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-center gap-2.5">
          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-xl neu-button flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-xl neu-button flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socialLinks.email}
            aria-label="Send Email"
            className="w-9 h-9 rounded-xl neu-button flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Sticky Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-neu-bg/95 dark:bg-neu-darkBg/95 backdrop-blur-md border-b border-white/60 dark:border-white/5 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 shadow-neu-flat-sm flex items-center justify-center text-primary font-bold text-base">
            H
          </div>
          <span className="font-bold text-slate-800 dark:text-white text-base">
            {personalInfo.name}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle className="scale-90" />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-xl neu-button text-slate-700 dark:text-slate-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed top-0 bottom-0 left-0 z-50 w-72 p-5 bg-neu-bg dark:bg-neu-darkBg shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end mb-2">
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 rounded-lg neu-button text-slate-500"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {navContent}
      </aside>

      {/* Desktop Fixed Left Sidebar */}
      <aside className="hidden lg:block fixed top-6 bottom-6 left-6 z-30 w-60 p-4 rounded-3xl neu-card overflow-y-auto">
        {navContent}
      </aside>
    </>
  );
}
