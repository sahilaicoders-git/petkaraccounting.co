'use client';

import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  PieChart, 
  ShieldCheck, 
  TrendingUp, 
  ArrowUpRight,
  Scale,
  Users
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const homeServices = [
  {
    id: 'itr',
    title: 'ITR Excellence',
    icon: <FileText className="h-10 w-10 text-primary/70" />,
    description: 'High-stakes tax filing for individuals and corporate entities. We transform complex tax codes into clear, actionable filings.',
    features: ['Strategic Deduction Planning', 'Audit-Ready Documentation', 'Capital Gains Management'],
    href: '/file-itr',
    color: 'indigo'
  },
  {
    id: 'gst',
    title: 'GST Intelligence',
    icon: <ShieldCheck className="h-10 w-10 text-primary/70" />,
    description: 'Automated reconciliation and monthly compliance workflows. Stay ahead of every deadline with proactive notice monitoring.',
    features: ['Monthly Reconciliation', 'ITC Optimization', 'Regulatory Liaison'],
    color: 'emerald'
  },
  {
    id: 'accounting',
    title: 'Revenue Strategy',
    icon: <PieChart className="h-10 w-10 text-primary/70" />,
    description: 'Beyond bookkeeping. We provide the strategic financial architecture that growth-stage businesses demand.',
    features: ['Cash Flow Forecasting', 'MIS Reporting', 'Financial Modeling'],
    color: 'blue'
  }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[88vh] flex items-center justify-center pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-[20%] left-[10%] w-[20%] h-[20%] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border rounded-full text-muted-foreground text-[10px] sm:text-xs font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] mb-8 sm:mb-12 shadow-2xl shadow-indigo-500/10"
          >
            <div className="h-1.5 w-1.5 h bg-indigo-500 rounded-full animate-pulse" />
            Accounting & Strategic Advisory
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-9xl font-bold text-foreground mb-6 sm:mb-10 tracking-tight leading-[0.95]"
          >
            Precision in <br />
            <span className="text-muted-foreground">ITR Filing.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto mb-10 sm:mb-16 leading-relaxed"
          >
            Professional ITR filing starting at ₹999. High accuracy, maximum tax savings, and zero-friction compliance for individuals and firms.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md sm:max-w-none mx-auto"
          >
            <Link 
              href="/file-itr" 
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-primary text-primary-foreground text-base sm:text-lg font-extrabold rounded-2xl hover:translate-y-[-4px] transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/5"
            >
              File ITR Now
              <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
            </Link>
            <Link 
              href="#services-deep-dive" 
              className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-secondary border border-border text-foreground text-base sm:text-lg font-bold rounded-2xl hover:opacity-80 transition-all shadow-xl shadow-black/5"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Visual Image Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto border border-border bg-card p-1 sm:p-2 md:p-4 lg:p-6 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] relative">
            <div className="absolute inset-0 bg-primary/5 opacity-30 backdrop-blur-3xl" />
            <div className="relative aspect-[4/3] md:aspect-[21/9] w-full overflow-hidden border border-border rounded-2xl sm:rounded-3xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=75&w=1800&auto=format&fit=crop"
                alt="Strategic Accounting"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
              />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent flex items-end p-4 sm:p-6 md:p-12">
                 <div className="max-w-xl">
                    <p className="text-[10px] sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary/60 mb-2 sm:mb-4 italic">Strategic Oversight</p>
                    <h3 className="text-lg sm:text-2xl md:text-5xl font-bold text-foreground tracking-tight italic">Translating Complexity into Clarity.</h3>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="py-14 sm:py-24 border-y border-border bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 text-center md:text-left">
            <StatItem label="Active Clients" value="500+" delay={0.1} />
            <StatItem label="Accuracy Rate" value="99.9%" delay={0.2} />
            <StatItem label="Forms Filed" value="10k+" delay={0.3} />
            <StatItem label="Years Depth" value="10+" delay={0.4} />
          </div>
        </div>
      </section>
      {/* Deep-Dive Services (Scrolling Detail) */}
      <section id="services-deep-dive" className="py-24 sm:py-32 md:py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20 md:mb-32 text-center md:text-left">
             <h2 className="text-[10px] sm:text-sm font-black uppercase tracking-[0.28em] sm:tracking-[0.5em] text-primary/40 mb-3 sm:mb-4">Core Frameworks</h2>
             <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground tracking-tighter">Strategic Depth.<br /><span className="text-muted-foreground italic">Scroll to Explore.</span></h3>
          </div>

          <div className="space-y-10 sm:space-y-16 md:space-y-48">
            {homeServices.map((service, idx) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "p-5 sm:p-8 md:p-16 rounded-[1.75rem] sm:rounded-[2.5rem] md:rounded-[4rem] border border-border bg-card/50 flex flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 items-center md:sticky md:top-32 backdrop-blur-3xl shadow-2xl overflow-hidden",
                  idx % 2 === 1 ? "md:flex-row-reverse" : ""
                )}
              >
                 {/* Decorative background number */}
                  <div className="absolute -right-4 sm:-right-6 md:-right-10 -bottom-4 sm:-bottom-6 md:-bottom-10 text-[6rem] sm:text-[9rem] md:text-[20rem] font-black text-foreground/[0.03] select-none pointer-events-none italic">
                    {idx + 1}
                 </div>

                  <div className="w-full md:w-1/2 space-y-5 sm:space-y-6 md:space-y-8 relative z-10">
                   <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-2xl sm:rounded-3xl bg-secondary border border-border flex items-center justify-center shadow-inner">
                     {service.icon}
                   </div>
                   <h4 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground tracking-tight">{service.title}</h4>
                   <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
                      {service.description}
                   </p>
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {service.features.map(feature => (
                      <div key={feature} className="flex items-center gap-3 text-foreground font-medium italic text-sm sm:text-base">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary opacity-60" />
                        <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                   </div>
                   <div className="pt-2 sm:pt-4 md:pt-6">
                      <Link 
                        href={service.href || "/contact"} 
                        className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform"
                      >
                         Learn Our Protocol <ArrowRight className="h-4 w-4" />
                      </Link>
                   </div>
                 </div>
                 <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-[4/3] rounded-[1.2rem] sm:rounded-[1.8rem] md:rounded-[2.5rem] overflow-hidden border border-border bg-card flex items-center justify-center relative group">
                    <Image
                      src={idx === 0
                        ? "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=70&w=1200&auto=format&fit=crop"
                        : idx === 1
                          ? "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=70&w=1200&auto=format&fit=crop"
                          : "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=70&w=1200&auto=format&fit=crop"}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                      className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-primary/5 group-hover:opacity-0 transition-opacity pointer-events-none" />
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Scroll Section */}
      <section id="about-scroll" className="py-20 sm:py-28 md:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 sm:mb-20 text-center md:text-left">
            <p className="text-[10px] sm:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.5em] text-primary/40 mb-3 sm:mb-4">About Us</p>
            <h3 className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground tracking-tight">
              Built on Trust.<br /><span className="text-muted-foreground italic">Driven by Precision.</span>
            </h3>
          </div>

          <div className="space-y-8 sm:space-y-12 md:space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid lg:grid-cols-2 gap-5 sm:gap-8 md:gap-10 items-stretch"
            >
              <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-border bg-card/60 p-6 sm:p-8 md:p-14 backdrop-blur-2xl">
                <h4 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Who We Are</h4>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                  Petkar Accounting & Co. helps individuals and businesses simplify taxation, compliance, and accounting.
                  We combine modern systems with disciplined advisory so financial decisions are faster and safer.
                </p>
              </div>
              <div className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-border bg-card/60 p-6 sm:p-8 md:p-14 backdrop-blur-2xl">
                <h4 className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">Leadership</h4>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed mb-4 sm:mb-5">
                  Founder & CEO: <span className="text-foreground font-bold">Dhanraj Dewaji Petkar</span>
                </p>
                <p className="text-base sm:text-lg text-muted-foreground font-light leading-relaxed">
                  CFO: <span className="text-foreground font-bold">Sahil Dhanraj Petkar</span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[3rem] border border-border bg-secondary/40 p-6 sm:p-8 md:p-14"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-black text-primary/50 mb-3">Mission</p>
                  <p className="text-muted-foreground font-light leading-relaxed">Deliver low-cost, high-accuracy compliance services with transparent communication.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-black text-primary/50 mb-3">Vision</p>
                  <p className="text-muted-foreground font-light leading-relaxed">Be the most trusted digital-first accounting and ITR advisory partner for growth-focused clients.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] font-black text-primary/50 mb-3">Why Clients Stay</p>
                  <p className="text-muted-foreground font-light leading-relaxed">Fast responses, audit-ready filings, and measurable impact on compliance confidence.</p>
                </div>
              </div>
              <div className="pt-6 sm:pt-10 mt-6 sm:mt-10 border-t border-border">
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-transform">
                  View Full About Page <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-secondary/50 border border-border p-8 sm:p-12 md:p-32 rounded-[1.6rem] sm:rounded-[2.4rem] md:rounded-[3.5rem] relative overflow-hidden text-center backdrop-blur-2xl">
            <div className="absolute inset-0 bg-indigo-500/5 blur-[100px]" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-4xl md:text-7xl font-bold text-foreground mb-5 sm:mb-8 md:mb-10 tracking-tight leading-none">
                Bring your business into <br /><span className="text-primary italic opacity-70">Clear Focus.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-muted-foreground font-light mb-8 sm:mb-10 md:mb-16 leading-relaxed">
                Join 500+ businesses who have streamlined their financial operations with Petkar Accounting & Co.
              </p>
              <Link href="/contact" className="inline-flex w-full sm:w-auto justify-center px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-primary text-primary-foreground text-base sm:text-lg md:text-xl font-extrabold rounded-2xl hover:translate-y-[-4px] transition-all shadow-2xl shadow-primary/10 group">
                 Launch Consultation <ArrowRight className="inline-block ml-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatItem({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-1 sm:space-y-2 group"
    >
      <h3 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground tracking-tight group-hover:text-primary/70 transition-colors">
        {value}
      </h3>
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] sm:tracking-[0.3em] font-extrabold text-muted-foreground">
        {label}
      </p>
    </motion.div>
  );
}

function HighlightCard({ title, subtitle, color }: { title: string; subtitle: string; color: string }) {
  const colorMap: any = {
    indigo: "from-indigo-500/10 border-indigo-500/10",
    emerald: "from-emerald-500/10 border-emerald-500/10",
    blue: "from-blue-500/10 border-blue-500/10",
  };
  
  return (
    <div className={cn(
      "p-12 rounded-3xl border bg-card relative overflow-hidden group hover:border-foreground/10 transition-all duration-500 shadow-sm hover:shadow-2xl",
      colorMap[color]
    )}>
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700",
        colorMap[color].split(' ')[0]
      )} />
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
        <p className="text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
