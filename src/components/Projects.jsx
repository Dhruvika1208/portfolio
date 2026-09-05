import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  BrainCircuit, 
  UtensilsCrossed, 
  Dumbbell, 
  Wallet,
  CheckCircle2,
  Maximize2
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'MERN Stack', 'Artificial Intelligence', 'Web Development'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  const getProjectVisual = (projectId) => {
    switch (projectId) {
      case 'dinespot':
        return (
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-purple-500/30 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-2 text-purple-300 font-bold">
                <UtensilsCrossed className="w-4 h-4 text-purple-400" /> DineSpot Reservation API
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                200 OK • JWT Auth
              </span>
            </div>
            <div className="space-y-1.5 text-slate-300 text-[11px]">
              <div className="flex justify-between p-1.5 rounded bg-slate-900">
                <span className="text-cyan-300">POST /api/v1/reservations/book</span>
                <span className="text-purple-400">Table #14 • Reserved</span>
              </div>
              <div className="flex justify-between p-1.5 rounded bg-slate-900">
                <span className="text-cyan-300">GET /api/v1/tables/availability</span>
                <span className="text-emerald-400">Conflict Checked</span>
              </div>
            </div>
          </div>
        );

      case 'med-assistant':
        return (
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-2 text-cyan-300 font-bold">
                <BrainCircuit className="w-4 h-4 text-cyan-400" /> RAG Retriever &amp; Vector Index
              </span>
              <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px]">
                Verified Label Data
              </span>
            </div>
            <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-300 space-y-1">
              <div className="text-slate-400">// Query: "Dosage &amp; contraindications for Drug X"</div>
              <div className="text-cyan-300">&gt; Retrieving embedding match (similarity score: 0.94)...</div>
              <div className="text-emerald-400">&gt; Answer grounded via trusted pharmaceutical labels.</div>
            </div>
          </div>
        );

      case 'fitness-chatbot':
        return (
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30 space-y-2.5 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-2 text-emerald-300 font-bold">
                <Dumbbell className="w-4 h-4 text-emerald-400" /> Fitness Bot Session
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                Rule-Based Engine
              </span>
            </div>
            <div className="space-y-1.5 text-[11px]">
              <div className="p-1.5 rounded bg-slate-900 text-slate-300">
                <span className="text-purple-400">User:</span> "Suggest a 4-day muscle gain diet &amp; split."
              </div>
              <div className="p-1.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/20">
                <span className="text-cyan-400">Bot:</span> "Here is your personalized macro breakdown &amp; routine..."
              </div>
            </div>
          </div>
        );

      case 'expense-tracker':
        return (
          <div className="p-4 rounded-2xl bg-slate-950/80 border border-pink-500/30 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-2 text-pink-300 font-bold">
                <Wallet className="w-4 h-4 text-pink-400" /> Financial Dashboard
              </span>
              <span className="px-2 py-0.5 rounded bg-pink-500/20 text-pink-300 text-[10px]">
                Real-Time Calc
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-[11px]">
              <div className="p-2 rounded bg-slate-900 text-center">
                <div className="text-slate-400 text-[10px]">Total Expenses</div>
                <div className="text-rose-400 font-bold">$1,240.50</div>
              </div>
              <div className="p-2 rounded bg-slate-900 text-center">
                <div className="text-slate-400 text-[10px]">Remaining Budget</div>
                <div className="text-emerald-400 font-bold">$759.50</div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const featuredProject = projectsData.find(p => p.featured);
  const remainingProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text-purple-cyan">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Full-stack web applications, AI-driven RAG models, and interactive software systems built with modern engineering practices.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full mt-2" />
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 border ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white border-purple-400 shadow-lg shadow-purple-500/25'
                  : 'glass-card text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED PROJECT CARD (Large Hero Card) */}
        {featuredProject && (selectedCategory === 'All' || selectedCategory === featuredProject.category) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="glass-card rounded-3xl border border-purple-500/40 p-6 sm:p-10 relative overflow-hidden shadow-2xl group hover:border-purple-400 transition-all duration-500">
              {/* Glowing background gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-600/25 transition-all" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{featuredProject.badgeText}</span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                    {featuredProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {featuredProject.shortDescription}
                  </p>

                  {/* Key Highlights list */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-300">
                    {featuredProject.keyFeatures.slice(0, 4).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-xl bg-slate-900/80 border border-white/10 text-purple-300 font-mono text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    {featuredProject.githubLink && (
                      <a
                        href={featuredProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-purple-500/30 hover:scale-105 transition-all"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                      </a>
                    )}

                    <button
                      onClick={() => setActiveModalProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all"
                    >
                      <Maximize2 className="w-4 h-4 text-cyan-400" />
                      <span>View Full Specs</span>
                    </button>
                  </div>
                </div>

                {/* Right Interactive Mockup Visual */}
                <div className="lg:col-span-5 space-y-4">
                  {getProjectVisual(featuredProject.id)}
                </div>

              </div>
            </div>
          </motion.div>
        )}

        {/* OTHER PROJECTS BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {remainingProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Badge & Title */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[11px] font-semibold">
                      {project.badgeText}
                    </span>
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="p-2 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="Inspect specs"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Visual UI snippet preview */}
                  <div className="pt-2">
                    {getProjectVisual(project.id)}
                  </div>
                </div>

                {/* Bottom Tech Stack & Links */}
                <div className="space-y-4 pt-6 border-t border-white/10 mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-lg bg-slate-900/80 border border-white/5 text-purple-300 font-mono text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 hover:text-white hover:bg-purple-600/40 text-xs font-bold transition-all hover:scale-105 shadow-sm"
                        aria-label={`View ${project.title} repository on GitHub`}
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-cyan-400" />
                        <span>View on GitHub</span>
                        <ExternalLink className="w-3 h-3 text-cyan-400 ml-0.5" />
                      </a>
                    )}

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 text-xs font-semibold transition-all ml-auto"
                    >
                      <span>View Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Modal View for deep feature inspection */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

export default Projects;
