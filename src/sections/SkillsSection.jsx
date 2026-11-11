import React, { useState } from 'react';
import { Code2, ArrowRight, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { skillsData, skillsCategories } from '../data/skills';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAllSkills, setShowAllSkills] = useState(false);

  // Filter skills based on active category
  const filteredSkills = skillsData.filter(skill => {
    if (selectedCategory === "All") {
      return showAllSkills ? true : skill.featured;
    }
    return skill.category === selectedCategory;
  });

  return (
    <section id="skills" className="py-4">
      <div className="rounded-3xl neu-card p-6 sm:p-8">
        
        {/* Section Header (Matches Reference: </> My Skills & View All ->) */}
        <div className="flex items-center justify-between mb-6 pb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              &lt;/&gt;
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              My Skills
            </h2>
          </div>

          <button
            onClick={() => setShowAllSkills(!showAllSkills)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer group"
          >
            <span>{showAllSkills ? "Show Less" : "View All"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Category Pills (Visible when viewing all or filtering) */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {skillsCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                if (category !== "All") setShowAllSkills(true);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-neu-accent'
                  : 'neu-button text-slate-600 dark:text-slate-300 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid - Exact Neumorphic Raised Square Styling as Reference */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="p-4 sm:p-5 rounded-2xl bg-neu-card dark:bg-neu-darkCard shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/80 dark:border-white/5 flex flex-col items-center justify-center text-center group hover:scale-[1.03] transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container with soft well */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/70 dark:bg-slate-800/80 shadow-sm flex items-center justify-center mb-3 p-2.5 transition-transform group-hover:scale-110">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter group-hover:brightness-110"
                  onError={(e) => {
                    // Fallback to text initials
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              {/* Skill Name */}
              <h3 className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 group-hover:text-primary transition-colors">
                {skill.name}
              </h3>

              {/* Category Subtitle */}
              <span className="text-[10px] text-slate-400 dark:text-slate-400 mt-0.5">
                {skill.category}
              </span>

              {/* Proficiency Gauge (Visible on expanded view) */}
              {showAllSkills && (
                <div className="w-full mt-3">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 mb-1 font-medium">
                    <span>Proficiency</span>
                    <span className="text-primary font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200/70 dark:bg-slate-700/60 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-800/80 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-primary" />
            <span>Regularly practicing clean architecture & algorithms</span>
          </div>
          <span className="text-[11px] font-medium text-primary">
            {skillsData.length} Technologies
          </span>
        </div>

      </div>
    </section>
  );
}
