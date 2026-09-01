import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { educationData } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="gradient-text-cyan-blue">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Academic qualifications and achievements at top engineering and pre-university institutions.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="space-y-6">
                
                {/* Header info */}
                <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                  <div className="space-y-1">
                    <span className="text-xs font-mono text-purple-300 font-semibold px-2.5 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors pt-1">
                      {edu.institution}
                    </h3>
                    <p className="text-sm font-semibold text-slate-300">
                      {edu.degree}
                    </p>
                  </div>

                  {/* Score badge */}
                  <div className="text-right bg-gradient-to-tr from-purple-600/30 to-cyan-500/30 p-3 rounded-2xl border border-white/15 shadow-md flex-shrink-0">
                    <div className="text-[10px] text-slate-300 font-mono uppercase">{edu.scoreLabel}</div>
                    <div className="text-xl font-extrabold text-white font-mono">{edu.score}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{edu.location}</span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2.5 text-slate-300 text-xs sm:text-sm">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono text-purple-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" /> First Class Distinction
                </span>
                <span className="text-cyan-400 font-mono font-bold">SVECW</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
