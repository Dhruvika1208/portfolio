import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, CheckCircle2, Users, HeartHandshake, Coffee, Code2 } from 'lucide-react';
import { certificationsData, extracurricularData } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Certificates &amp; Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Certifications &amp; <span className="gradient-text-pink-purple">Activities</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Professional course certifications, hackathon participation, and extracurricular leadership roles.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Section 1: Certifications Grid */}
        <div className="mb-16 space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>Verified Certifications</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsData.map((cert, idx) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 relative overflow-hidden flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[11px] font-mono font-bold">
                      {cert.badge}
                    </span>
                    <Award className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-slate-400 font-mono">
                    {cert.issuer}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 mt-4 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="text-purple-300 font-mono">{cert.category}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: Extracurricular Activities */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-pink-400" />
            <span>Extracurricular Activities &amp; Leadership</span>
          </h3>

          <div className="grid grid-cols-1 gap-6">
            {extracurricularData.map((extra, idx) => (
              <motion.div
                key={extra.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden shadow-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                      <HeartHandshake className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-extrabold text-white">
                        {extra.role}
                      </h4>
                      <p className="text-xs text-purple-300 font-mono mt-0.5">
                        {extra.organization}
                      </p>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-cyan-400 font-semibold self-start sm:self-center">
                    {extra.period}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {extra.activities.map((act, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-4 rounded-2xl bg-slate-950/60 border border-white/10 space-y-2 text-xs text-slate-300"
                    >
                      <div className="flex items-center gap-2 text-pink-400 font-bold font-mono">
                        <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                        <span>Key Initiative #{aIdx + 1}</span>
                      </div>
                      <p className="leading-relaxed">{act}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
