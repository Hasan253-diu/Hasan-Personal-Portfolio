import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { educationData } from '../data/education';

export default function EducationSection() {
  return (
    <section id="education" className="py-4">
      <div className="rounded-3xl neu-card p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-8 pb-2">
          <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
            <GraduationCap className="w-4 h-4" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Education
            </h2>
            <p className="text-xs text-slate-400">Academic Background & Qualifications</p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-primary/30 dark:border-primary/20 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-8">
          {educationData.map((edu, index) => (
            <div key={edu.id} className="relative group">
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-neu-bg dark:bg-neu-darkBg border-2 border-primary shadow-sm flex items-center justify-center transition-transform group-hover:scale-125">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
              </div>

              {/* Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-neu-card dark:bg-neu-darkCard shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/80 dark:border-white/5 transition-all group-hover:shadow-neu-flat dark:group-hover:shadow-neu-dark-flat">
                {/* Degree & Year Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">
                    {edu.institution}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-primary" />
                    {edu.location}
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-600 dark:text-emerald-400">
                    <Award className="w-3 h-3" />
                    {edu.grade}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Highlights / Coursework */}
                {edu.highlights && (
                  <div className="pt-3 border-t border-slate-200/50 dark:border-slate-800/80">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <BookOpen className="w-3 h-3 text-primary" />
                      Key Highlights & Coursework
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                          <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
