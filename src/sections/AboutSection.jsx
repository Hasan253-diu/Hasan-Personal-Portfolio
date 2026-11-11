import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Target, 
  ArrowRight, 
  Quote, 
  Sparkles,
  CheckCircle,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/personal';

export default function AboutSection({ onNavigateToEducation }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="py-4">
      {/* Bento Grid Row for About & Quote */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Main About Me Card (Matches Reference Bento layout) */}
        <div className="lg:col-span-8 rounded-3xl neu-card p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

          <div>
            {/* Header */}
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <User className="w-4 h-4" />
              </div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                About Me
              </h2>
            </div>

            {/* Intro paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
              {personalInfo.bioLong}
            </p>

            {/* Key Information Points with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-7 space-y-3.5">
                {/* Degree / University */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl neu-card-sm flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      {personalInfo.degree}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {personalInfo.university}
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl neu-card-sm flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Location
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>

                {/* Career Goal */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl neu-card-sm flex items-center justify-center text-primary shrink-0 mt-0.5">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Career Goal
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {personalInfo.careerGoal}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3D Laptop / Tech Illustration on circular podium (from reference) */}
              <div className="sm:col-span-5 flex justify-center items-center">
                <div className="relative group">
                  <div className="w-36 h-36 rounded-2xl p-2 bg-gradient-to-br from-white/80 to-blue-50/60 dark:from-slate-800 dark:to-slate-900 shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm flex items-center justify-center border border-white/60 dark:border-white/5">
                    <img 
                      src={personalInfo.aboutIllustration} 
                      alt="Tech Illustration"
                      className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 mt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-hover transition-colors group cursor-pointer"
            >
              <span>{showMore ? "Show Less" : "Learn More"}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>

            {/* Quick stats pills */}
            <div className="flex items-center gap-2">
              <span className="text-[11px] px-3 py-1 rounded-full neu-card-sm text-slate-600 dark:text-slate-300 font-medium">
                ⚡ Problem Solver
              </span>
              <span className="text-[11px] px-3 py-1 rounded-full neu-card-sm text-slate-600 dark:text-slate-300 font-medium">
                🚀 Fast Learner
              </span>
            </div>
          </div>

          {/* Expanded Career Story & Objectives */}
          {showMore && (
            <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-slate-800 space-y-3 animate-fadeIn">
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider">
                My Journey & Ambition
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Ever since writing my first lines of code in C and C++, I have been fascinated by how algorithms and elegant user interfaces connect to create meaningful tools. Currently pursuing my B.Sc. in Computer Science at Daffodil International University, I actively challenge myself through data structure contests, modern React frontend development, and architecting robust web solutions.
              </p>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={onNavigateToEducation}
                  className="text-xs text-primary underline font-medium hover:text-primary-hover"
                >
                  View full academic timeline & courses →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Bento Column: Quote Card & Experience Highlights */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Quote Card (Exact matching from reference: "Dream Big, Code Better.") */}
          <div className="rounded-3xl neu-card p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-neu-bg via-blue-50/40 to-blue-100/30 dark:from-neu-darkCard dark:via-slate-800/60 dark:to-blue-950/20 border border-white/70 dark:border-white/5">
            <div className="flex items-start justify-between">
              <Quote className="w-8 h-8 text-primary/40 transform -rotate-12" />
              <Sparkles className="w-4 h-4 text-primary/60" />
            </div>

            <div className="my-6">
              <h3 className="text-2xl font-extrabold italic tracking-tight text-slate-800 dark:text-white leading-snug">
                "{personalInfo.quote.text}"
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-400 mt-2 font-medium">
                — {personalInfo.quote.author}
              </p>
            </div>

            <div className="h-1.5 w-16 bg-primary/40 rounded-full" />
          </div>

          {/* Key Metric Highlights Card */}
          <div className="rounded-3xl neu-card p-6 grid grid-cols-2 gap-4">
            {personalInfo.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-3.5 rounded-2xl neu-card-sm text-center flex flex-col items-center justify-center"
              >
                <span className="text-xl sm:text-2xl font-black text-primary">
                  {stat.value}
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
