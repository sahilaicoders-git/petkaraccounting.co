'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Fingerprint, 
  Phone, 
  Mail,
  Zap,
  Lock
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ITRPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    pan: '',
    phone: '',
    email: '',
    name: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/itr-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background min-h-screen pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 md:pb-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[60%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">
          
          {/* Content Side */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] sm:tracking-widest"
            >
              <Zap className="h-3 w-3 fill-current" />
              Express ITR Filing 2024-25
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.1]"
            >
              Zero-Stress <br />
              <span className="text-muted-foreground">Tax Compliance.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-xl"
            >
              Don't wrestle with portals. Just provide your basic details, and our CA-led team will handle the entire forensic filing process for you.
            </motion.p>


            <div className="space-y-4 sm:space-y-6 pt-2 sm:pt-4">
              <FeatureItem icon={<CheckCircle2 className="h-5 w-5 text-emerald-500" />} text="Maximum Legal Tax Savings" />
              <FeatureItem icon={<CheckCircle2 className="h-5 w-5 text-emerald-500" />} text="CA-Verified Accuracy Guarantee" />
              <FeatureItem icon={<CheckCircle2 className="h-5 w-5 text-emerald-500" />} text="Audit Protection Included" />
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 rounded-[24px] sm:rounded-[40px] blur-2xl opacity-50" />
            
            <div className="relative bg-card/80 backdrop-blur-3xl border border-border p-5 sm:p-7 md:p-12 rounded-[24px] sm:rounded-[40px] shadow-2xl">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-5 sm:space-y-6 md:space-y-8"
                  >
                    <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">Quick Filing Portal</h3>
                       <p className="text-muted-foreground text-sm">Secure data transmission encrypted by AES-256</p>
                    </div>

                      <div className="space-y-4 sm:space-y-5 md:space-y-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                        <div className="relative group">
                          <input 
                            required
                            type="text"
                            placeholder="John Doe"
                            className="w-full bg-background/50 border border-border rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">PAN Number</label>
                        <div className="relative group">
                          <Fingerprint className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground group-focus-within:text-indigo-400 transition-colors" />
                          <input 
                            required
                            type="text"
                            placeholder="ABCDE1234F"
                            maxLength={10}
                            className="w-full bg-background/50 border border-border rounded-2xl pl-14 sm:pl-16 pr-5 sm:pr-6 py-3.5 sm:py-4 text-foreground text-sm sm:text-base uppercase placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-mono tracking-widest"
                            value={formData.pan}
                            onChange={(e) => setFormData({...formData, pan: e.target.value.toUpperCase()})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Phone</label>
                          <div className="relative group">
                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-indigo-400" />
                            <input 
                              required
                              type="tel"
                              placeholder="+91 00000 00000"
                              className="w-full bg-background/50 border border-border rounded-2xl pl-14 sm:pl-16 pr-5 sm:pr-6 py-3.5 sm:py-4 text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-mono"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                          <div className="relative group">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-indigo-400" />
                            <input 
                              required
                              type="email"
                              placeholder="tax@example.com"
                              className="w-full bg-background/50 border border-border rounded-2xl pl-14 sm:pl-16 pr-5 sm:pr-6 py-3.5 sm:py-4 text-foreground text-sm sm:text-base placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 sm:py-5 bg-primary text-primary-foreground text-sm sm:text-base font-black rounded-[20px] shadow-2xl shadow-primary/10 hover:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isSubmitting ? 'Securing Data...' : 'Initiate Filing'}
                      {!isSubmitting && <ArrowRight className="h-5 w-5" />}
                    </button>

                    <div className="flex items-center justify-center gap-4 pt-4 text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                      <span className="flex items-center gap-1.5"><Lock className="h-3 w-3" /> SSL SECURE</span>
                      <span className="flex items-center gap-1.5"><ShieldCheck className="h-3 w-3" /> CA VERIFIED</span>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 sm:py-10 md:py-12"
                  >
                    <div className="h-20 w-20 sm:h-24 sm:w-24 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6 sm:mb-8 md:mb-10 shadow-emerald-500/10 shadow-2xl">
                        <CheckCircle2 className="h-12 w-12" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">Request Initiated</h3>
                    <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed mb-8 sm:mb-10">
                      Our CA team has received your details for PAN <span className="text-indigo-500 font-mono font-bold uppercase tracking-widest">{formData.pan}</span>. We will reach out to you within 4 hours.
                    </p>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest font-bold underline underline-offset-8"
                    >
                      File another?
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-4 group">
       <div className="h-9 w-9 sm:h-10 sm:w-10 flex items-center justify-center bg-card border border-border rounded-xl group-hover:bg-secondary transition-colors">
         {icon}
       </div>
       <span className="text-base sm:text-lg text-muted-foreground group-hover:text-foreground transition-colors font-light italic">{text}</span>
    </div>
  );
}
