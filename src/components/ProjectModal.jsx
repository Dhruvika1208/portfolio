import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Sparkles, Layers, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-[92vw] max-w-5xl max-h-[90vh] glass-card rounded-3xl border border-white/20 shadow-2xl bg-slate-900/95 flex flex-col overflow-hidden my-auto"
        >
          {/* Sticky Header with Accessible Close Button */}
          <div className={`sticky top-0 z-20 p-4 sm:p-6 bg-gradient-to-r ${project.gradient || 'from-purple-900/40 to-slate-900'} border-b border-white/10 flex items-center justify-between gap-4 backdrop-blur-md`}>
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono font-bold text-white border border-white/10">
                {project.badgeText || 'Featured Project'}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-950 text-slate-300 hover:text-white border border-white/15 transition-all shadow-md group flex-shrink-0"
              aria-label="Close project details"
              title="Close project details"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>

          {/* Scrollable Body Content */}
          <div className="p-5 sm:p-8 overflow-y-auto flex-1 space-y-6">
            
            {/* Title & Short Description */}
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {project.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Grid Layout: Single Column on Mobile, Two Columns on Desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
              
              {/* Left Column: Specs, Features & Tech Stack */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold text-purple-300 uppercase tracking-wider font-mono flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" /> Key Features &amp; Technical Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.keyFeatures.map((feature, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-slate-950/60 border border-white/10 flex items-start gap-2.5 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold text-cyan-300 uppercase tracking-wider font-mono flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-400" /> Tech Stack &amp; Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-200 text-xs font-mono font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Info / Architecture Preview Container */}
              <div className="lg:col-span-5 w-full max-w-full overflow-hidden">
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 font-mono text-xs text-slate-300 space-y-3 shadow-inner">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/10 pb-2">
                    <span className="text-cyan-400 font-bold">System Architecture Specs</span>
                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 text-[10px]">Production Spec</span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="p-2 rounded bg-slate-900 text-slate-300">
                      <span className="text-purple-400">Category:</span> {project.category}
                    </div>
                    <div className="p-2 rounded bg-slate-900 text-slate-300">
                      <span className="text-cyan-400">State:</span> Active Development / Verified
                    </div>
                    <div className="p-2 rounded bg-slate-900 text-slate-300">
                      <span className="text-emerald-400">Repository Status:</span> Public GitHub Access
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Action Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>
              )}

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-xl glass-card border border-white/15 text-slate-200 text-sm font-semibold hover:bg-white/10 hover:text-white transition-all ml-auto"
              >
                Close Window
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
