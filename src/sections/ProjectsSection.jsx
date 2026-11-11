import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  Eye 
} from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';
import { projectsData, projectCategories } from '../data/projects';
import Modal from '../components/Modal';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(project => {
    if (selectedCategory === "All") {
      return showAll ? true : project.featured;
    }
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-4">
      <div className="rounded-3xl neu-card p-6 sm:p-8">
        
        {/* Header - Matches Reference: Briefcase icon + My Projects + View All -> */}
        <div className="flex items-center justify-between mb-6 pb-2">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Briefcase className="w-4 h-4" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              My Projects
            </h2>
          </div>

          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors cursor-pointer group"
          >
            <span>{showAll ? "Show Less" : "View All"}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                if (cat !== "All") setShowAll(true);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-neu-accent'
                  : 'neu-button text-slate-600 dark:text-slate-300 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-neu-card dark:bg-neu-darkCard shadow-neu-flat-sm dark:shadow-neu-dark-flat-sm border border-white/80 dark:border-white/5 overflow-hidden flex flex-col justify-between group hover:shadow-neu-flat dark:hover:shadow-neu-dark-flat transition-all duration-300"
            >
              <div>
                {/* Image Banner Container */}
                <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Category Pill Badge */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-slate-900/90 text-primary backdrop-blur-sm shadow-sm">
                    {project.category}
                  </span>

                  {/* Quick Action Overlay Buttons */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5">
                    <button
                      onClick={() => setSelectedProject(project)}
                      title="Quick details view"
                      className="w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-white flex items-center justify-center shadow-sm hover:text-primary transition-colors backdrop-blur-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Live demo"
                        className="w-8 h-8 rounded-full bg-white/90 dark:bg-slate-800/90 text-slate-700 dark:text-white flex items-center justify-center shadow-sm hover:text-primary transition-colors backdrop-blur-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-bold text-sm sm:text-base text-slate-800 dark:text-white group-hover:text-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/70 dark:bg-slate-800/70 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-slate-400 self-center">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer with Links */}
              <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-slate-200/40 dark:border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-primary hover:text-primary-hover flex items-center gap-1 cursor-pointer"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg neu-button text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg neu-button text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                      title="View Live Site"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || "Project Details"}
        maxWidth="max-w-2xl"
      >
        {selectedProject && (
          <div className="space-y-5">
            {/* Modal Image */}
            <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-sm relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-primary text-white shadow-md">
                {selectedProject.category}
              </span>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Overview
              </h4>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>
            </div>

            {/* Key Features */}
            {selectedProject.features && (
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Features & Architecture
                </h4>
                <ul className="space-y-1.5">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl text-xs font-semibold neu-card-sm text-slate-700 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-3 justify-end">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl neu-button text-xs font-semibold text-slate-700 dark:text-slate-200"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repo</span>
                </a>
              )}
              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl neu-btn-primary text-xs font-semibold text-white shadow-neu-accent"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
