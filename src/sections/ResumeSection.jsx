import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Code, 
  CheckCircle,
  Eye
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personal';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState('preview');

  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#3678F7', '#60A5FA', '#34D399', '#FBBF24']
    });

    const link = document.createElement('a');
    link.href = personalInfo.resumePdf;
    link.download = 'Hasan_Ahmed_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-4">
      <div className="rounded-3xl neu-card p-6 sm:p-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">
                Curriculum Vitae / Resume
              </h2>
              <p className="text-xs text-slate-400">Professional credentials & career overview</p>
            </div>
          </div>

          {/* Action Buttons: Download PDF & Print */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="p-2.5 rounded-xl neu-button text-slate-600 dark:text-slate-300 hover:text-primary transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-semibold"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl neu-btn-primary font-semibold text-xs text-white shadow-neu-accent cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>

        {/* Resume Preview Paper Container */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 shadow-neu-flat dark:shadow-neu-dark-flat border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 max-w-4xl mx-auto text-slate-800 dark:text-slate-200">
          
          {/* Header Area */}
          <div className="border-b-2 border-primary/20 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {personalInfo.name}
                </h1>
                <p className="text-primary font-bold text-sm sm:text-base mt-0.5">
                  {personalInfo.role}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {personalInfo.location}
                </p>
              </div>

              <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1 sm:text-right font-medium">
                <p>Email: <a href={`mailto:${personalInfo.email}`} className="text-primary hover:underline">{personalInfo.email}</a></p>
                <p>GitHub: <a href={personalInfo.socialLinks.github} target="_blank" rel="noreferrer" className="text-primary hover:underline">github.com/hasanahmed</a></p>
                <p>LinkedIn: <a href={personalInfo.socialLinks.linkedin} target="_blank" rel="noreferrer" className="text-primary hover:underline">linkedin.com/in/hasanahmed</a></p>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <span>●</span> Summary & Career Objective
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {personalInfo.bioLong}
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span>●</span> Education
            </h3>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.id} className="text-xs">
                  <div className="flex flex-wrap justify-between font-bold text-slate-800 dark:text-white">
                    <span>{edu.degree}</span>
                    <span className="text-primary font-semibold">{edu.period}</span>
                  </div>
                  <div className="flex flex-wrap justify-between text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                    <span>{edu.institution} — {edu.location}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">{edu.grade}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span>●</span> Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-200">Programming Languages:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  C, C++, Python, Java, JavaScript (ES6+), TypeScript, SQL
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-200">Frontend Development:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  React.js, Tailwind CSS, HTML5, CSS3, Redux Toolkit, Framer Motion
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-200">Backend & Databases:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Node.js, Express.js, MongoDB, PostgreSQL, RESTful APIs
                </p>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/50 dark:border-slate-800">
                <span className="font-bold text-slate-700 dark:text-slate-200">Tools & Methodologies:</span>
                <p className="text-slate-600 dark:text-slate-400 mt-1">
                  Git, GitHub, VS Code, Postman, Vercel, Responsive Design
                </p>
              </div>
            </div>
          </div>

          {/* Featured Key Projects */}
          <div className="mb-4">
            <h3 className="text-xs font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <span>●</span> Featured Projects
            </h3>
            <div className="space-y-4">
              {projectsData.slice(0, 3).map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex flex-wrap justify-between font-bold text-slate-800 dark:text-white">
                    <span>{proj.title}</span>
                    <span className="text-primary font-medium">{proj.tags.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    {proj.shortDescription} {proj.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom PDF Download Banner */}
          <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              Official PDF copy formatted for Applicant Tracking Systems (ATS).
            </span>
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl neu-button text-xs font-bold text-primary hover:text-primary-hover"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official Resume PDF</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
