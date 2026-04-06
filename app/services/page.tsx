'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FileText, 
  ShieldCheck, 
  PieChart, 
  BarChart3, 
  Receipt, 
  Users, 
  ArrowUpRight,
  TrendingUp,
  Scale
} from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'itr',
    title: 'ITR Filing',
    icon: <FileText className="h-6 w-6 text-indigo-400" />,
    description: 'Precision tax filing with maximized legal deductions.',
    size: 'lg',
    gradient: 'from-indigo-500/10 to-transparent',
    href: '/file-itr'
  },
  {
    id: 'gst',
    title: 'GST Solutions',
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    description: 'End-to-end compliance and automated reconciliation.',
    size: 'md',
    gradient: 'from-emerald-500/10 to-transparent'
  },
  {
    id: 'accounting',
    title: 'Accounting',
    icon: <PieChart className="h-6 w-6 text-blue-400" />,
    description: 'Real-time financial visibility for scaling businesses.',
    size: 'md',
    gradient: 'from-blue-500/10 to-transparent'
  },
  {
    id: 'audit',
    title: 'Statutory Audit',
    icon: <Scale className="h-6 w-6 text-purple-400" />,
    description: 'Rigorous internal and external auditing standards.',
    size: 'lg',
    gradient: 'from-purple-500/10 to-transparent'
  },
  {
    id: 'growth',
    title: 'Strategic Advisory',
    icon: <TrendingUp className="h-6 w-6 text-amber-400" />,
    description: 'Data-driven insights to accelerate your revenue.',
    size: 'md',
    gradient: 'from-amber-500/10 to-transparent'
  },
  {
    id: 'payroll',
    title: 'Payroll Management',
    icon: <Users className="h-6 w-6 text-rose-400" />,
    description: 'Seamless employee compensation and tax compliance.',
    size: 'md',
    gradient: 'from-rose-500/10 to-transparent'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-7xl font-bold tracking-tight text-foreground mb-5 sm:mb-8"
          >
            Sophisticated Solutions for <span className="text-muted-foreground">Modern Business.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
          >
            We blend traditional forensic precision with modern technology to keep your business ahead of the regulatory curve.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-auto md:auto-rows-[300px]">
          {services.map((service, index) => {
            const Wrapper = service.href ? Link : motion.div;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group relative rounded-2xl sm:rounded-3xl border border-border bg-card p-6 sm:p-8 md:p-10 overflow-hidden hover:border-foreground/20 transition-all duration-500 shadow-sm hover:shadow-2xl dark:shadow-none min-h-[230px] md:min-h-0",
                  service.size === 'lg' ? 'md:col-span-2' : 'md:col-span-1'
                )}
              >
                {/* @ts-ignore */}
                <Wrapper href={service.href || "#"} className="h-full w-full block">
                  {/* Background Image Placeholder with Beige Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-[url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale" />
                  
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="h-12 w-12 rounded-xl bg-secondary border border-border flex items-center justify-center mb-auto group-hover:border-foreground/20 transition-colors">
                      {service.icon}
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">{service.title}</h3>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground font-light group-hover:text-foreground transition-colors leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 sm:mt-24 md:mt-32 pt-10 sm:pt-14 md:pt-24 border-t border-border text-center">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-5 sm:mb-8">Ready for a Strategic Upgrade?</h2>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-7 sm:px-10 md:px-12 py-3.5 sm:py-5 md:py-6 bg-primary text-primary-foreground text-sm sm:text-base font-extrabold rounded-2xl hover:translate-y-[-4px] transition-all shadow-xl shadow-primary/10"
            >
              Consult an Expert Today
            </Link>
        </div>
      </div>
    </div>
  );
}
