import React from 'react';
import { Mail, ArrowUp, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodechefIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { profileLinks } from '../data/profileLinks';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold text-xl tracking-tight">
              Dhruvika<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">.</span>
            </span>
            <span className="text-xs text-slate-500 font-mono pl-2 border-l border-white/10">
              Computer Science • AI &amp; Full Stack
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={profileLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-600/20 transition-all"
              aria-label="Visit Dhruvika Gannamani's GitHub profile"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-600/20 transition-all"
              aria-label="Visit Dhruvika Gannamani's LinkedIn profile"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profileLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400 hover:bg-amber-600/20 transition-all"
              aria-label="Visit Dhruvika Gannamani's LeetCode profile"
              title="LeetCode"
            >
              <LeetcodeIcon className="w-4 h-4" />
            </a>
            <a
              href={profileLinks.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-600/20 transition-all"
              aria-label="Visit Dhruvika Gannamani's CodeChef profile"
              title="CodeChef"
            >
              <CodechefIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-pink-400 hover:border-pink-400 hover:bg-pink-600/20 transition-all"
              aria-label="Send Email"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-600/20 transition-all flex items-center gap-2 text-xs font-mono font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-cyan-400" />
          </button>

        </div>

        {/* Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="font-mono flex items-center gap-1.5">
            <span>Designed &amp; Built by</span>
            <span className="text-white font-bold">Dhruvika</span>
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
          </div>

          <div className="text-center sm:text-right font-mono">
            &copy; 2026 Dhruvika Gannamani. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
