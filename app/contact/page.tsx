'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, ArrowUpRight, Globe, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'ITR Filing',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Strategic connection initiated. Our advisor will reach out shortly.');
    setFormData({ name: '', email: '', phone: '', service: 'ITR Filing', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-background min-h-screen pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 sm:mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-bold text-foreground mb-6 sm:mb-8 md:mb-10 tracking-tight leading-none"
          >
            Start a <br /><span className="text-muted-foreground italic">Strategic Dialogue.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed"
          >
            Connect with a lead advisor to discuss your firm's compliance lifecycle and revenue strategy.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 md:gap-16 items-start">
          
          {/* Contact Methods */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-10 md:space-y-12">
            <div className="flex items-center gap-6 group cursor-default">
              <div className="h-16 w-16 bg-card border border-border rounded-2xl flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/50 transition-all shadow-xl shadow-black/5 dark:shadow-black/20">
                <MessageCircle className="h-7 w-7" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-[0.3em] font-extrabold text-muted-foreground mb-1">WhatsApp Hub</h4>
                <p className="text-xl text-foreground font-bold group-hover:text-indigo-400 transition-colors">+91 7020945991</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-default">
              <div className="h-16 w-16 bg-card border border-border rounded-2xl flex items-center justify-center text-emerald-400 group-hover:border-emerald-500/50 transition-all shadow-xl shadow-black/5 dark:shadow-black/20">
                <Globe className="h-7 w-7" />
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-[0.3em] font-extrabold text-muted-foreground mb-1">Global HQ</h4>
                <p className="text-xl text-foreground font-bold max-w-xs transition-colors">Business Hub, MK Rd, Mumbai Office</p>
              </div>
            </div>

            <div className="pt-8 sm:pt-10 md:pt-12 border-t border-border">
               <h4 className="text-sm uppercase tracking-[0.3em] font-extrabold text-muted-foreground mb-8">What to Expect</h4>
               <ul className="space-y-4 sm:space-y-6">
                 <li className="flex items-center gap-4 text-muted-foreground font-light italic">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                    <span>Lead advisor assignment in 2 hours.</span>
                 </li>
                 <li className="flex items-center gap-4 text-muted-foreground font-light italic">
                    <CheckCircle2 className="h-5 w-5 text-indigo-500" />
                    <span>Confidential high-level framework audit.</span>
                 </li>
               </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 p-4 sm:p-6 md:p-10 lg:p-16 bg-card/60 border border-border rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[48px] backdrop-blur-2xl shadow-2xl shadow-black/5 dark:shadow-black/40">
            <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              <div className="space-y-4">
                 <label className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground px-1">Authority/Name</label>
                 <input 
                    type="text" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="w-full bg-transparent border-b border-border py-3.5 sm:py-4 focus:outline-none focus:border-indigo-500 transition-all text-foreground text-base sm:text-lg font-light placeholder:text-muted-foreground/30"
                    placeholder="e.g. Rahul Sharma"
                 />
              </div>
              <div className="space-y-4">
                 <label className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground px-1">Corporate Email</label>
                 <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full bg-transparent border-b border-border py-3.5 sm:py-4 focus:outline-none focus:border-indigo-500 transition-all text-foreground text-base sm:text-lg font-light placeholder:text-muted-foreground/30"
                    placeholder="email@company.com"
                 />
              </div>
              <div className="md:col-span-2 space-y-4 pt-2 sm:pt-4">
                 <label className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground px-1">Select Engagement Framework</label>
                 <select 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-border py-3.5 sm:py-4 focus:outline-none focus:border-indigo-500 transition-all text-foreground text-base sm:text-lg font-light appearance-none select-none cursor-pointer dark:bg-zinc-950"
                  >
                    <option className="bg-background">Statutory Compliance/ITR</option>
                    <option className="bg-background">GST Strategic Management</option>
                    <option className="bg-background">Financial Architecture</option>
                    <option className="bg-background">Scale Advisory</option>
                  </select>
              </div>
              <div className="md:col-span-2 space-y-4 pt-2 sm:pt-4">
                 <label className="text-[10px] uppercase tracking-[0.4em] font-black text-muted-foreground px-1">Inquiry/Context</label>
                 <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full bg-transparent border-b border-border py-3.5 sm:py-4 focus:outline-none focus:border-indigo-500 transition-all text-foreground text-base sm:text-lg font-light placeholder:text-muted-foreground/30 resize-none"
                    placeholder="Describe your current bottleneck..."
                 />
              </div>
                <div className="md:col-span-2 pt-6 sm:pt-8 md:pt-10">
                 <button 
                    type="submit" 
                  className="group w-full py-4 sm:py-5 md:py-6 bg-primary text-primary-foreground text-sm sm:text-base font-extrabold rounded-2xl hover:opacity-90 transition-all flex items-center justify-center gap-3 sm:gap-4 shadow-2xl shadow-primary/10 transform active:scale-[0.98]"
                  >
                    Initiate Connection <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
