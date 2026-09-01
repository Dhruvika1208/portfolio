import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code, 
  Layout, 
  Server, 
  Database, 
  Sparkles, 
  BookOpen, 
  Wrench,
  Coffee,
  FileCode,
  Cpu,
  Binary,
  Atom,
  FileSpreadsheet,
  Globe,
  Palette,
  Network,
  Plug,
  Zap,
  HardDrive,
  BrainCircuit,
  Bot,
  Eye,
  PlaySquare,
  GitMerge,
  Layers,
  Table,
  Terminal,
  Wifi,
  GitBranch,
  Laptop,
  BookMarked,
  Layers3
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { skillCategories } from '../data/portfolioData';

const getCategoryIcon = (categoryIcon) => {
  switch (categoryIcon) {
    case 'Code': return <Code className="w-4 h-4" />;
    case 'Layout': return <Layout className="w-4 h-4" />;
    case 'Server': return <Server className="w-4 h-4" />;
    case 'Database': return <Database className="w-4 h-4" />;
    case 'Sparkles': return <Sparkles className="w-4 h-4" />;
    case 'BookOpen': return <BookOpen className="w-4 h-4" />;
    case 'Wrench': return <Wrench className="w-4 h-4" />;
    default: return <Code className="w-4 h-4" />;
  }
};

const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'Coffee': return <Coffee className="w-5 h-5 text-orange-400" />;
    case 'FileCode': return <FileCode className="w-5 h-5 text-yellow-400" />;
    case 'Cpu': return <Cpu className="w-5 h-5 text-blue-400" />;
    case 'Binary': return <Binary className="w-5 h-5 text-slate-300" />;
    case 'Atom': return <Atom className="w-5 h-5 text-cyan-400" />;
    case 'FileSpreadsheet': return <FileSpreadsheet className="w-5 h-5 text-yellow-400" />;
    case 'Globe': return <Globe className="w-5 h-5 text-orange-500" />;
    case 'Palette': return <Palette className="w-5 h-5 text-blue-400" />;
    case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
    case 'Network': return <Network className="w-5 h-5 text-purple-400" />;
    case 'Plug': return <Plug className="w-5 h-5 text-cyan-400" />;
    case 'Zap': return <Zap className="w-5 h-5 text-slate-300" />;
    case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
    case 'HardDrive': return <HardDrive className="w-5 h-5 text-blue-400" />;
    case 'BrainCircuit': return <BrainCircuit className="w-5 h-5 text-pink-400" />;
    case 'Bot': return <Bot className="w-5 h-5 text-indigo-400" />;
    case 'Eye': return <Eye className="w-5 h-5 text-rose-400" />;
    case 'PlaySquare': return <PlaySquare className="w-5 h-5 text-red-400" />;
    case 'GitMerge': return <GitMerge className="w-5 h-5 text-purple-400" />;
    case 'Layers': return <Layers className="w-5 h-5 text-blue-400" />;
    case 'Table': return <Table className="w-5 h-5 text-pink-400" />;
    case 'Terminal': return <Terminal className="w-5 h-5 text-teal-400" />;
    case 'Wifi': return <Wifi className="w-5 h-5 text-cyan-400" />;
    case 'GitBranch': return <GitBranch className="w-5 h-5 text-orange-500" />;
    case 'Github': return <GithubIcon className="w-5 h-5 text-slate-200" />;
    case 'Laptop': return <Laptop className="w-5 h-5 text-blue-400" />;
    case 'BookMarked': return <BookMarked className="w-5 h-5 text-amber-500" />;
    default: return <Code className="w-5 h-5 text-purple-400" />;
  }
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCategories = activeCategory === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Glow background */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Tech Stack &amp; Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text-cyan-blue">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Comprehensive skill set across Software Development, Artificial Intelligence, Core Computer Science, and Data Engineering.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-2" />
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-12 no-scrollbar pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-lg shadow-purple-500/25'
                : 'glass-card text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
            }`}
          >
            <Layers3 className="w-3.5 h-3.5" />
            <span>All Skills</span>
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 border ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400 shadow-lg shadow-purple-500/25'
                  : 'glass-card text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {getCategoryIcon(cat.icon)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="space-y-10">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat, catIdx) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="space-y-4"
              >
                {/* Subcategory Heading */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {cat.name}
                  </h3>
                  <div className="h-[1px] flex-1 bg-gradient-to-r from-white/15 to-transparent" />
                </div>

                {/* Grid of skill badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.03, y: -4 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="glass-card glass-card-hover rounded-2xl p-4 border border-white/10 flex items-center gap-3.5 relative overflow-hidden group cursor-default"
                    >
                      {/* Gradient border accent */}
                      <div className={`absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b ${skill.color}`} />

                      <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/10 group-hover:scale-110 transition-transform">
                        {getSkillIcon(skill.icon)}
                      </div>

                      <div className="overflow-hidden">
                        <h4 className="text-sm font-bold text-white group-hover:text-purple-300 transition-colors truncate">
                          {skill.name}
                        </h4>
                        <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                          {skill.level}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
