import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Code2, 
  Trophy, 
  GraduationCap, 
  FolderGit2, 
  Sparkles, 
  UserCheck, 
  Brain, 
  Terminal, 
  CheckCircle,
  Award
} from 'lucide-react';
import { personalInfo, statsData } from '../data/portfolioData';

// Component for animating stat counter numbers when in view
const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 1500; // ms
      const steps = 40;
      const target = stat.value;
      const stepTime = duration / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += target / steps;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(stat.isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value, stat.isDecimal]);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-6 h-6 text-purple-400" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-cyan-400" />;
      case 'FolderGit2': return <FolderGit2 className="w-6 h-6 text-pink-400" />;
      default: return <Sparkles className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card glass-card-hover rounded-2xl p-6 relative overflow-hidden group border border-white/10"
    >
      {/* Background glow circle */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-500/10 rounded-full blur-xl group-hover:bg-purple-500/20 transition-all" />

      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
          {getIcon(stat.icon)}
        </div>
        <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-white/5">
          Verified
        </span>
      </div>

      <div className="space-y-1">
        <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-baseline">
          <span>{stat.isDecimal ? count.toFixed(1) : count}</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
            {stat.suffix}
          </span>
        </div>
        <div className="text-sm font-bold text-slate-200">{stat.label}</div>
        <div className="text-xs text-slate-400">{stat.description}</div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Ambient mesh background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Background &amp; Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-purple-cyan">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Visual Profile Highlight Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/15 relative overflow-hidden shadow-2xl space-y-6">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-cyan-500/0 rounded-full blur-2xl" />

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-purple-500/30">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                    <span className="text-2xl font-bold font-mono text-cyan-400">GD</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-xs text-purple-300 font-mono">AI &amp; Data Science Specialist</p>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] text-slate-400">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>SVECW • Bhimavaram</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-purple-400" /> Specialization
                  </span>
                  <span className="font-semibold text-purple-300">AI &amp; Data Science</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-cyan-400" /> Focus Areas
                  </span>
                  <span className="font-semibold text-cyan-300">MERN Stack, RAG, LLMs</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-400" /> Academic CGPA
                  </span>
                  <span className="font-bold text-amber-400 font-mono">9.0 / 10.0</span>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 border border-emerald-500/20 p-3 rounded-xl">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>Seeking Software Engineering &amp; AI Developer Roles</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Narrative Biography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              {personalInfo.aboutBio.map((paragraph, idx) => (
                <p key={idx} className="glass-card p-5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Core Pillars / Interests */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl glass-card border border-white/10 text-center space-y-1">
                <div className="text-purple-400 text-xs font-mono font-bold">01. Scalability</div>
                <div className="text-xs text-slate-300">MERN Stack Apps</div>
              </div>
              <div className="p-3.5 rounded-xl glass-card border border-white/10 text-center space-y-1">
                <div className="text-cyan-400 text-xs font-mono font-bold">02. Intelligence</div>
                <div className="text-xs text-slate-300">RAG &amp; GenAI</div>
              </div>
              <div className="p-3.5 rounded-xl glass-card border border-white/10 text-center space-y-1 col-span-2 sm:col-span-1">
                <div className="text-pink-400 text-xs font-mono font-bold">03. Logic</div>
                <div className="text-xs text-slate-300">DSA &amp; Problem Solving</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Statistics Cards Grid (Animated Count-Up) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
