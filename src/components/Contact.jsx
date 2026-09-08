import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Sparkles, CheckCircle2, Copy, Check, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [fieldErrors, setFieldErrors] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear field-specific error as user types
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateForm = () => {
    const errors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFieldErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Gracefully handle unconfigured or missing environment variables
    if (!serviceId || !templateId || !publicKey || serviceId === 'YOUR_SERVICE_ID' || serviceId === 'your_service_id_here') {
      console.error("EmailJS configuration is missing.");
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
      return;
    }

    const templateParams = {
      from_name: formData.name.trim(),
      from_email: formData.email.trim(),
      reply_to: formData.email.trim(),
      to_email: 'dhruvikagannamani@gmail.com',
      message: formData.message.trim(),
      subject: `New Portfolio Contact — ${formData.name.trim()}`
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // On SUCCESS: Show subtle success message & reset form inputs
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('EmailJS Send Error:', err);
      // On FAILURE: Show generic friendly message & PRESERVE entered information
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again or email me directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Glow background */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-cyan-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="gradient-text-purple-cyan">Talk</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, and innovative ideas.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          
          {/* Left Column: Direct Contact Details & Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-card rounded-3xl p-8 border border-white/10 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>

              {/* Email Box */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-2">
                <span className="text-xs text-slate-400 font-mono">Direct Email Address:</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-mono font-bold text-cyan-300 hover:underline truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white hover:bg-purple-600/20 transition-all flex-shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {copiedEmail && (
                  <p className="text-[11px] text-emerald-400 font-mono">✓ Email copied to clipboard!</p>
                )}
              </div>

              {/* Social Channels */}
              <div className="space-y-3 pt-2">
                <span className="text-xs text-slate-400 font-mono uppercase tracking-wider block">
                  Connect on Socials:
                </span>
                
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-500/10 text-slate-200 hover:text-cyan-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <LinkedinIcon className="w-5 h-5 text-cyan-400" />
                    <div>
                      <div className="text-sm font-bold">LinkedIn</div>
                      <div className="text-xs text-slate-400 font-mono">dhruvikagannamani</div>
                    </div>
                  </div>
                  <span className="text-xs text-cyan-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl glass-card border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 text-slate-200 hover:text-purple-300 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <GithubIcon className="w-5 h-5 text-purple-400" />
                    <div>
                      <div className="text-sm font-bold">GitHub</div>
                      <div className="text-xs text-slate-400 font-mono">Dhruvika1208</div>
                    </div>
                  </div>
                  <span className="text-xs text-purple-400 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Modern Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 border border-white/10 space-y-5 shadow-xl">
              
              {/* Name Field */}
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-900/80 border ${
                    fieldErrors.name ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-purple-500'
                  } text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm transition-all`}
                />
                {fieldErrors.name && (
                  <p className="text-xs text-rose-400 font-mono mt-1">{fieldErrors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-900/80 border ${
                    fieldErrors.email ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-cyan-500'
                  } text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 text-sm transition-all`}
                />
                {fieldErrors.email && (
                  <p className="text-xs text-rose-400 font-mono mt-1">{fieldErrors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Dhruvika, I would love to discuss an opportunity..."
                  className={`w-full px-4 py-3 rounded-2xl bg-slate-900/80 border ${
                    fieldErrors.message ? 'border-rose-500/60 focus:border-rose-500' : 'border-white/10 focus:border-purple-500'
                  } text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm transition-all resize-none`}
                />
                {fieldErrors.message && (
                  <p className="text-xs text-rose-400 font-mono mt-1">{fieldErrors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2 font-mono">
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Message (Subtle, below the button) */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-mono flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    <span>✓ Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="p-3.5 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono flex items-center gap-2.5"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                    <span>{errorMessage || 'Something went wrong. Please try again or email me directly.'}</span>
                  </motion.div>
                )}
              </AnimatePresence>

            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
