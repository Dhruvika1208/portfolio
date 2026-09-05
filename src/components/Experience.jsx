import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Brain, Terminal, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { experienceData } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient radial gradients */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work <span className="gradient-text-purple-cyan">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Hands-on software development and Artificial Intelligence virtual internship project experience.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full mt-2" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-indigo-600 sm:-translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {experienceData.map((exp, idx) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="relative flex flex-col sm:flex-row items-start"
              >
                {/* Timeline Dot Node */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/40 z-10">
                  <Brain className="w-4 h-4 text-cyan-400 animate-pulse" />
                </div>

                {/* Content Box */}
                <div className="ml-12 sm:ml-0 sm:w-full pl-0 sm:pl-0">
                  <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-xl space-y-6">
                    
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                      <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs font-semibold mb-2">
                          {exp.type}
                        </div>
                        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                          <span>{exp.title}</span>
                          <span className="text-sm font-normal text-purple-400">@ {exp.organization}</span>
                        </h3>
                      </div>
                      
                      <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 self-start sm:self-center">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs text-slate-400 font-mono mr-1">Technologies:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl bg-purple-500/10 text-purple-300 text-xs font-mono font-medium border border-purple-500/20 hover:border-purple-400/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                      {exp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* AI Model Inspection Code Snippet Preview */}
                    <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 font-mono text-xs text-slate-300 space-y-2">
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-white/5 pb-2">
                        <span className="flex items-center gap-1.5 text-purple-400">
                          <Terminal className="w-3.5 h-3.5" /> leaf_disease_inference.py
                        </span>
                        <span className="text-emerald-400">YOLOv8 + Streamlit</span>
                      </div>
                      <p className="text-slate-400"># Real-time leaf disease detection pipeline</p>
                      <p>
                        <span className="text-purple-400">from</span> ultralytics <span className="text-purple-400">import</span> YOLO
                      </p>
                      <p>
                        model = YOLO(<span className="text-emerald-300">'leaf_disease_yolo.pt'</span>)
                      </p>
                      <p>
                        results = model.predict(source=uploaded_image, conf=<span className="text-amber-400">0.85</span>)
                      </p>
                    </div>

                    {/* Internship GitHub Repository Action */}
                    {exp.githubLink && (
                      <div className="pt-2 flex items-center justify-start">
                        <a
                          href={exp.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-xs shadow-md shadow-purple-500/20 hover:scale-105 transition-all"
                        >
                          <GithubIcon className="w-4 h-4" />
                          <span>View on GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                        </a>
                      </div>
                    )}

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
