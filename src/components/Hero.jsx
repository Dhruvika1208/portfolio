import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Mail, 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  BrainCircuit, 
  Database,
  Download
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const roles = personalInfo.roles;
    const currentRole = roles[roleIndex];
    
    let timer;
    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length - 1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
      }, 80);
    }

    if (!isDeleting && currentText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-[92vh] flex items-center">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium shadow-inner">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Hi, I'm Dhruvika 👋</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Computer Science Student <br />
                <span className="gradient-text-purple-cyan inline-block mt-1">
                  Full Stack Developer
                </span>{' '}
                &amp;{' '}
                <span className="gradient-text-pink-purple inline-block">
                  AI Enthusiast
                </span>
              </h1>
            </div>

            {/* Animated Typing Subtitle */}
            <div className="h-10 flex items-center text-lg sm:text-2xl font-mono text-slate-300">
              <span className="text-purple-400 font-semibold mr-2">&gt;</span>
              <span className="border-b-2 border-cyan-400 pb-0.5 text-cyan-300 font-semibold">
                {currentText}
              </span>
              <span className="w-2.5 h-6 bg-purple-400 inline-block ml-1 animate-pulse" />
            </div>

            {/* Short Introduction Quote */}
            <blockquote className="p-4 rounded-2xl glass-card border-l-4 border-purple-500 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              "Computer Science undergraduate passionate about building scalable web applications, solving complex problems, and exploring Artificial Intelligence and Generative AI."
            </blockquote>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, 'projects')}
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleScrollTo(e, 'contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-slate-200 glass-card border border-white/15 hover:border-purple-400/50 hover:bg-white/10 hover:text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Connect with me:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 hover:scale-110 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400 hover:bg-amber-500/10 hover:scale-110 transition-all shadow-sm"
                  aria-label="LeetCode Profile"
                >
                  <Code2 className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-pink-400 hover:border-pink-400 hover:bg-pink-500/10 hover:scale-110 transition-all shadow-sm"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Developer Workspace Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative floating glowing circles */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-cyan-500/30 rounded-full blur-2xl animate-pulse" />

              {/* Main Code Editor Card */}
              <div className="glass-card rounded-2xl border border-white/15 overflow-hidden shadow-2xl shadow-purple-950/40 transform hover:-translate-y-1 transition-all duration-500">
                {/* Editor Header Bar */}
                <div className="bg-slate-950/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-purple-400" />
                      DhruvikaPortfolio.jsx
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Open to Roles</span>
                  </div>
                </div>

                {/* Code Window Content */}
                <div className="p-5 font-mono text-xs sm:text-sm space-y-2.5 bg-slate-950/90 text-slate-200 overflow-x-auto leading-relaxed">
                  <p className="text-slate-500">// Specializing in AI &amp; Full Stack Development</p>
                  <p>
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-yellow-300">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">name</span>: <span className="text-emerald-300">"{personalInfo.name}"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">institution</span>: <span className="text-emerald-300">"SVECW"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">cgpa</span>: <span className="text-amber-400">9.0</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">expertise</span>: [
                    <span className="text-emerald-300">"MERN Stack"</span>, <span className="text-emerald-300">"RAG"</span>, <span className="text-emerald-300">"LLMs"</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">dsaSolved</span>: <span className="text-purple-400">200</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">contests</span>: <span className="text-purple-400">50</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-cyan-300">isReadyToInnovate</span>: <span className="text-rose-400">true</span>
                  </p>
                  <p>&#125;;</p>
                  <div className="pt-2 text-slate-500 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-purple-400 flex items-center gap-1">
                      <BrainCircuit className="w-3.5 h-3.5" /> PyTorch / YOLO RAG Ready
                    </span>
                    <span className="text-cyan-400">UTF-8</span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-4 sm:-left-6 glass-card px-4 py-2.5 rounded-2xl border border-purple-500/40 shadow-xl flex items-center gap-3 bg-slate-900/90"
              >
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">AI &amp; RAG Systems</div>
                  <div className="text-[10px] text-purple-300">LLMs &amp; Vector Databases</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-5 -right-4 sm:-right-6 glass-card px-4 py-2.5 rounded-2xl border border-cyan-500/40 shadow-xl flex items-center gap-3 bg-slate-900/90"
              >
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">MERN Stack</div>
                  <div className="text-[10px] text-cyan-300">Full-Stack Scalability</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
