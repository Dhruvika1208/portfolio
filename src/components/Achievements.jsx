import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, Award, Zap, Code2, CheckCircle2, Sparkles } from 'lucide-react';
import { achievementsData, dsaTopics } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones &amp; Competitive Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key <span className="gradient-text-purple-cyan">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Algorithmic problem-solving achievements and competitive programming involvement.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-purple-500 mx-auto rounded-full mt-2" />
        </div>

        {/* 3 Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-2xl bg-gradient-to-tr ${item.color} p-[1px] shadow-lg`}>
                    <div className="w-full h-full bg-slate-950 rounded-[15px] p-3 flex items-center justify-center">
                      {item.icon === 'Target' && <Target className="w-6 h-6 text-purple-400" />}
                      {item.icon === 'Award' && <Award className="w-6 h-6 text-cyan-400" />}
                      {item.icon === 'Zap' && <Zap className="w-6 h-6 text-pink-400" />}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest px-2.5 py-1 rounded bg-white/5">
                    Verified
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 font-semibold">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-purple-300 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" /> Active Practitioner
                </span>
                <span className="font-mono text-purple-400">100%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strong DSA Mastery Topics Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 border border-white/10 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Algorithmic &amp; Data Structures Mastery</h3>
                <p className="text-xs text-slate-400">Key topics covered in 200+ problem solutions &amp; 50+ contests</p>
              </div>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold border border-cyan-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Core Proficiency
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {dsaTopics.map((topic) => (
              <div
                key={topic}
                className="px-4 py-2 rounded-xl bg-slate-900/80 border border-white/10 text-slate-200 text-xs font-mono font-semibold flex items-center gap-2 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all hover:scale-105"
              >
                <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
