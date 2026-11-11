import React, { useState } from 'react';
import { Download, ChevronRight, ArrowDown, Bell } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personal';
import NotificationModal from '../components/NotificationModal';

export default function HeroSection({ onContactClick, onExploreClick }) {
  const [notifOpen, setNotifOpen] = useState(false);

  const handleDownloadCV = () => {
    // Confetti celebration
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#3678F7', '#60A5FA', '#93C5FD', '#F59E0B']
    });

    // Trigger download
    const link = document.createElement('a');
    link.href = personalInfo.resumePdf;
    link.download = 'Hasan_Ahmed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="relative pt-2 pb-6">
      <div className="relative rounded-3xl neu-card p-6 sm:p-10 overflow-hidden">
        {/* Subtle Ambient Decorative Glow */}
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Row inside Hero Card */}
        <div className="flex items-center justify-end gap-3 mb-4 sm:mb-6 relative z-10">
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 dark:bg-slate-800/70 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/60 dark:border-white/10 text-xs font-medium text-slate-700 dark:text-slate-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{personalInfo.status}</span>
          </div>

          {/* Bell Notification Button */}
          <button
            onClick={() => setNotifOpen(true)}
            aria-label="View notifications"
            className="w-9 h-9 rounded-full neu-button flex items-center justify-center text-slate-600 dark:text-slate-300 relative group"
          >
            <Bell className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full animate-ping" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
          </button>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5">
            {/* Greeting Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/80 dark:border-white/10 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              <span>👋</span>
              <span>{personalInfo.greeting}</span>
            </div>

            {/* Name Heading with Reference Styling */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              <span>{personalInfo.firstName} </span>
              <span className="text-primary drop-shadow-[0_4px_12px_rgba(54,120,247,0.35)]">
                {personalInfo.lastName}
              </span>
            </h1>

            {/* Professional Title */}
            <h2 className="text-lg sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              {personalInfo.role}
            </h2>

            {/* Bio Short */}
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
              {personalInfo.bioShort}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              {/* Download CV Button */}
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full neu-btn-primary font-semibold text-sm cursor-pointer shadow-neu-accent"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </button>

              {/* Contact Me Button */}
              <button
                onClick={onContactClick}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full neu-button font-semibold text-sm text-slate-700 dark:text-slate-200 cursor-pointer"
              >
                <span>Contact Me</span>
                <ChevronRight className="w-4 h-4 text-primary" />
              </button>
            </div>

            {/* Scroll Down Indicator */}
            <div className="pt-4">
              <button
                onClick={onExploreClick}
                aria-label="Scroll to about section"
                className="w-9 h-9 rounded-full neu-button flex items-center justify-center text-slate-500 hover:text-primary transition-all animate-bounce"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Portrait & Visual Backdrop Column */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-72 sm:w-80 h-72 sm:h-80 flex items-center justify-center">
              {/* Abstract 3D Backdrop Pill / Blob */}
              <div className="absolute inset-2 bg-gradient-to-tr from-blue-300/40 via-primary/30 to-indigo-300/40 dark:from-blue-600/20 dark:via-primary/25 dark:to-indigo-500/20 rounded-[42%_58%_70%_30%/45%_45%_55%_55%] blur-xl transform rotate-12 scale-105" />
              
              {/* Geometric Orbit Rings like in the reference */}
              <div className="absolute inset-0 rounded-full border border-primary/20 dark:border-primary/30 transform -rotate-12 scale-110 pointer-events-none" />
              <div className="absolute inset-4 rounded-full border border-blue-400/20 dark:border-blue-400/20 transform rotate-45 scale-95 pointer-events-none" />

              {/* Portrait Image Frame */}
              <div className="relative z-10 w-64 sm:w-72 h-64 sm:h-72 rounded-3xl overflow-hidden flex items-end justify-center">
                <img
                  src={personalInfo.heroPortrait}
                  alt={personalInfo.name}
                  className="w-full h-full object-contain filter drop-shadow-[0_15px_25px_rgba(54,120,247,0.25)] hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&auto=format&fit=crop&q=80";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Modal */}
      <NotificationModal 
        isOpen={notifOpen} 
        onClose={() => setNotifOpen(false)} 
      />
    </section>
  );
}
