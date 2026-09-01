import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles, ArrowUpRight, Terminal } from 'lucide-react';
import { GithubIcon, LeetcodeIcon, CodechefIcon, HackerrankIcon } from './SocialIcons';
import { codingProfiles } from '../data/portfolioData';

const getProfileIcon = (iconName) => {
  switch (iconName) {
    case 'Code2': return <LeetcodeIcon className="w-7 h-7 text-amber-400" />;
    case 'Github': return <GithubIcon className="w-7 h-7 text-purple-300" />;
    case 'ChefHat': return <CodechefIcon className="w-7 h-7 text-amber-500" />;
    case 'Terminal': return <HackerrankIcon className="w-7 h-7 text-emerald-400" />;
    default: return <LeetcodeIcon className="w-7 h-7 text-purple-400" />;
  }
};

const CodingProfiles = () => {
  return (
    <section id="profiles" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5" />
            <span>Developer Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Coding <span className="gradient-text-cyan-blue">Profiles</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Explore my problem-solving track records across major competitive programming and open-source platforms.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full mt-2" />
        </div>

        {/* 4 Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {codingProfiles.map((profile, idx) => (
            <motion.a
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, y: -6 }}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-white/10 relative overflow-hidden group flex flex-col justify-between"
            >
              {/* Top ambient color bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.color}`} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 group-hover:scale-110 transition-transform">
                    {getProfileIcon(profile.iconName)}
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 text-slate-400 group-hover:text-white group-hover:bg-purple-600/20 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {profile.name}
                  </h3>
                  <div className="text-xs font-mono text-purple-300 mt-0.5">
                    @{profile.handle}
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-mono">
                  {profile.detail}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-6 flex items-center justify-between text-[11px] font-semibold text-cyan-400">
                <span>View Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
