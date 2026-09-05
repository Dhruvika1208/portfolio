import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  ArrowRight,
  Sparkles,
  User
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, CodechefIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { profileLinks } from '../data/profileLinks';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imgError, setImgError] = useState(false);

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

            {/* Social Icons (GitHub, LinkedIn, LeetCode, CodeChef ONLY) */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Connect with me:</span>
              <div className="flex items-center gap-3">
                <a
                  href={profileLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-purple-400 hover:bg-purple-500/10 hover:scale-110 transition-all shadow-sm"
                  aria-label="Visit Dhruvika Gannamani's GitHub profile"
                  title="GitHub"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={profileLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10 hover:scale-110 transition-all shadow-sm"
                  aria-label="Visit Dhruvika Gannamani's LinkedIn profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={profileLinks.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-400 hover:bg-amber-500/10 hover:scale-110 transition-all shadow-sm"
                  aria-label="Visit Dhruvika Gannamani's LeetCode profile"
                  title="LeetCode"
                >
                  <LeetcodeIcon className="w-5 h-5" />
                </a>
                <a
                  href={profileLinks.codechef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-amber-500 hover:border-amber-500 hover:bg-amber-500/10 hover:scale-110 transition-all shadow-sm"
                  aria-label="Visit Dhruvika Gannamani's CodeChef profile"
                  title="CodeChef"
                >
                  <CodechefIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Profile Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center py-6"
          >
            <div className="hero-image-container">
              <div className="hero-image-glow">
                {!imgError ? (
                  <img
                    src="/images/dhruvika-profile.jpg"
                    alt="Dhruvika Gannamani"
                    className="hero-profile-image"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="hero-placeholder-avatar">
                    <div className="w-20 h-20 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center mb-2 shadow-inner">
                      <span className="text-3xl font-extrabold font-mono text-cyan-400">DG</span>
                    </div>
                    <span className="text-sm font-bold text-white tracking-wide">Dhruvika Gannamani</span>
                    <span className="text-[11px] text-purple-300 font-mono mt-0.5">Developer Profile</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
