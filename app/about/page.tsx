'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Target, 
  Heart, 
  Quote, 
  Trophy, 
  Users, 
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Globe
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold text-foreground mb-12 tracking-tight leading-none"
          >
            A Decade of <br /><span className="text-muted-foreground italic">Financial Clarity.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl text-muted-foreground font-light leading-relaxed italic"
          >
            "Accounting isn't just about balancing the books; it's about providing the clear data needed to build the future of Indian commerce."
          </motion.p>
        </div>

        {/* Core Methodology */}
        <div className="grid lg:grid-cols-2 gap-24 mb-48 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-foreground tracking-tight">The Petkar <br />Standard.</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
              Since our inception, we've focused on one core metric: our clients' sustained financial growth. We replace ambiguity with precision.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-border">
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-foreground">10+</h4>
                <p className="text-xs uppercase tracking-[0.2em] font-extrabold text-muted-foreground">Years Experience</p>
              </div>
              <div className="space-y-2">
                <h4 className="text-4xl font-bold text-foreground">5k+</h4>
                <p className="text-xs uppercase tracking-[0.2em] font-extrabold text-muted-foreground">Businesses Enabled</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] rotate-2 transform transition-transform group-hover:rotate-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="md:aspect-[4/5] bg-card border border-border rounded-[2rem] overflow-hidden relative shadow-2xl shadow-black/5 dark:shadow-black/40">
              <div className="absolute inset-0 bg-secondary flex items-center justify-center text-foreground/40 text-6xl font-black tracking-tight">
                DP
              </div>
              <img 
                src="/dhanraj-petkar.png" 
                alt="DHANRAJ DEWAJI PETKAR" 
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
                className="w-full h-full object-cover object-[50%_18%] saturate-0 contrast-110 brightness-95 sepia-[0.18] group-hover:saturate-100 group-hover:sepia-0 group-hover:contrast-105 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-90" />
              <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none" />
              <div className="absolute bottom-12 left-12 right-12 text-left">
                <Quote className="h-10 w-10 text-primary mb-6 opacity-40 shadow-2xl" />
                <p className="text-xl font-bold text-foreground mb-4 italic leading-relaxed">
                  "The goal is 100% compliance so that entrepreneurs can focus 100% on their product."
                </p>
                <div className="flex flex-col">
                   <span className="text-foreground font-black text-lg">DHANRAJ DEWAJI PETKAR</span>
                   <span className="text-muted-foreground text-xs uppercase tracking-widest font-extrabold mt-1">Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mb-48">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary/40 mb-24 text-center">Executive Leadership</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* CEO Card */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-primary/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-card/80 border border-border rounded-[2rem] overflow-hidden relative shadow-2xl p-8 md:p-10 group-hover:border-primary/30 transition-all h-full flex flex-col backdrop-blur-xl">
               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary/15 to-transparent" />
               <div className="mb-8 relative flex items-center justify-between">
                 <div className="h-16 w-16 rounded-2xl bg-secondary border border-border flex items-center justify-center shadow-inner">
                   <ShieldCheck className="h-8 w-8 text-primary/70" strokeWidth={1.5} />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary/45">Leadership</span>
               </div>
               <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2 tracking-tight">DHANRAJ DEWAJI PETKAR</h3>
               <span className="text-[11px] font-black uppercase tracking-[0.28em] text-muted-foreground mb-6">Chief Executive Officer</span>
               <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 italic">
                  Leading the strategic vision and long-term organizational architecture of Petkar Accounting & Co.
                </p>
               <div className="mt-auto w-full grid grid-cols-2 gap-4 pt-8 border-t border-border/80">
                 <div>
                      <p className="text-xs font-black text-primary/30 uppercase tracking-widest mb-1">Impact</p>
                   <p className="text-base font-bold text-foreground">Strategic</p>
                   </div>
                 <div className="border-l border-border pl-4">
                      <p className="text-xs font-black text-primary/30 uppercase tracking-widest mb-1">Focus</p>
                   <p className="text-base font-bold text-foreground">Vision</p>
                   </div>
                </div>
              </div>
            </div>

            {/* CFO Card */}
            <div className="relative group">
              <div className="absolute -inset-3 bg-primary/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="bg-card/80 border border-border rounded-[2rem] overflow-hidden relative shadow-2xl p-8 md:p-10 group-hover:border-primary/30 transition-all h-full flex flex-col backdrop-blur-xl">
               <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/40 via-primary/15 to-transparent" />
               <div className="mb-8 relative flex items-center justify-between">
                 <div className="h-16 w-16 rounded-2xl border border-border overflow-hidden bg-secondary flex items-center justify-center shadow-inner">
                   <div className="absolute h-16 w-16 bg-secondary flex items-center justify-center text-foreground/40 text-xs font-black tracking-wider">
                     SP
                   </div>
                   <img
                     src="/sahil-petkar.png"
                     alt="SAHIL DHANRAJ PETKAR"
                     onError={(e) => {
                       e.currentTarget.style.display = 'none';
                     }}
                     className="h-full w-full object-cover object-[50%_18%] saturate-0 contrast-110 brightness-95 sepia-[0.18] group-hover:saturate-100 group-hover:sepia-0 group-hover:contrast-105 transition-all duration-700"
                   />
                 </div>
                 <span className="text-[10px] font-black uppercase tracking-[0.35em] text-primary/45">Finance</span>
               </div>
               <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2 tracking-tight">SAHIL DHANRAJ PETKAR</h3>
               <span className="text-[11px] font-black uppercase tracking-[0.28em] text-muted-foreground mb-6">Chief Financial Officer</span>
               <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 italic">
                  Driving clinical precision in financial operations and regulatory compliance frameworks.
                </p>
               <div className="mt-auto w-full grid grid-cols-2 gap-4 pt-8 border-t border-border/80">
                 <div>
                      <p className="text-xs font-black text-primary/30 uppercase tracking-widest mb-1">Metric</p>
                   <p className="text-base font-bold text-foreground">Growth</p>
                   </div>
                 <div className="border-l border-border pl-4">
                      <p className="text-xs font-black text-primary/30 uppercase tracking-widest mb-1">Domain</p>
                   <p className="text-base font-bold text-foreground">Precision</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-48">
          <h2 className="text-sm uppercase tracking-[0.4em] font-black text-muted-foreground text-center mb-24">Core Values & DNA</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            <ValueCard 
               icon={<ShieldCheck className="h-8 w-8 text-primary/70" />}
               title="Integrity First"
               description="Ethical standards are the foundation of our advisory, ensuring long-term audit safety."
            />
            <ValueCard 
               icon={<Globe className="h-8 w-8 text-primary/70" />}
               title="Strategic Impact"
               description="We look beyond today's tax bill to tomorrow's growth potential."
            />
            <ValueCard 
               icon={<Target className="h-8 w-8 text-primary/70" />}
               title="Zero Error"
               description="A culture of forensic precision across every financial disclosure."
            />
          </div>
        </div>

        {/* Mission Vision */}
        <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-card/40 p-16 md:p-24 rounded-3xl border border-border hover:border-foreground/20 transition-all group overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="h-14 w-14 bg-background border border-border rounded-xl flex items-center justify-center text-primary/70 mb-10 group-hover:shadow-2xl transition-all">
                 <Trophy className="h-7 w-7" />
               </div>
               <h3 className="text-3xl font-bold text-foreground mb-6">Our Vision</h3>
               <p className="text-xl text-muted-foreground font-light leading-relaxed">
                 Becoming the gold standard for digital-first financial advisory in the Indian ecosystem.
               </p>
            </div>
            <div className="bg-card/40 p-16 md:p-24 rounded-3xl border border-border hover:border-foreground/20 transition-all group overflow-hidden relative mt-12 md:mt-0">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="h-14 w-14 bg-background border border-border rounded-xl flex items-center justify-center text-primary/70 mb-10 group-hover:shadow-2xl transition-all">
                 <Heart className="h-7 w-7" />
               </div>
               <h3 className="text-3xl font-bold text-foreground mb-6">Our Mission</h3>
               <p className="text-xl text-muted-foreground font-light leading-relaxed">
                 Eliminating financial ambiguity for businesses through precision accounting and relentless advocacy.
               </p>
            </div>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group relative">
      <div className="mb-10 inline-block h-16 w-16 bg-card border border-border rounded-2xl p-4 flex items-center justify-center shadow-2xl shadow-black/5 dark:shadow-black/40 transform transition-transform group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight group-hover:text-foreground/80 transition-colors">{title}</h3>
      <p className="text-lg text-muted-foreground font-light leading-relaxed group-hover:text-muted-foreground/80 transition-colors">{description}</p>
    </div>
  );
}
