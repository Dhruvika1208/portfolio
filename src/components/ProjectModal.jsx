import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl border border-white/20 overflow-hidden shadow-2xl bg-slate-900/95 my-8"
        >
          {/* Header Banner */}
          <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-white/10 relative`}>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 text-slate-300 hover:text-white hover:bg-slate-950 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono font-bold text-white mb-3">
              {project.badgeText}
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h3>

            <p className="text-slate-300 text-sm mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
            
            {/* Key Features */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wider font-mono flex items-center gap-2">
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
              <h4 className="text-sm font-bold text-cyan-300 uppercase tracking-wider font-mono flex items-center gap-2">
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

            {/* Action Buttons */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View GitHub Repository</span>
                </a>
              )}

              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl bg-white/10 text-slate-300 text-sm font-semibold hover:bg-white/20 hover:text-white transition-colors"
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
