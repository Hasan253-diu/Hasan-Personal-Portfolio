import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 mt-6 border-t border-slate-200/50 dark:border-slate-800/80">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-white dark:bg-slate-800 shadow-neu-flat-sm flex items-center justify-center text-primary font-bold text-xs">
            H
          </div>
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-1 font-medium">
          <span>Crafted with</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>using React & Soft Neumorphism</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl neu-button text-slate-600 dark:text-slate-300 hover:text-primary transition-colors flex items-center gap-1.5"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
          <span className="text-[11px] font-semibold">Back to Top</span>
        </button>
      </div>
    </footer>
  );
}
