import Link from 'next/link';
import { Calculator, Mail, Phone, MapPin, Globe, Share2, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-20" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Brand */}
          <div className="md:col-span-5 space-y-8">
            <Link href="/" className="flex items-center gap-3 space-x-0 group inline-flex">
              <div className="relative">
                <div className="absolute -inset-1.5 bg-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center justify-center h-10 w-10 bg-zinc-900 border border-white/10 rounded-lg text-white">
                  <Calculator className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-bold text-lg tracking-tight text-white leading-none">
                  Petkar Accounting
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold mt-1">
                  & Company
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 text-lg font-light leading-relaxed max-w-sm">
              Modern financial advisory for the digital age. Precision in every byte, growth in every balance sheet.
            </p>
            <div className="flex gap-4">
              <SocialBtn icon={<Share2 className="h-4 w-4" />} />
              <SocialBtn icon={<Globe className="h-4 w-4" />} />
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <FooterGroup title="Services">
              <FooterLink href="/services#itr">ITR Filing</FooterLink>
              <FooterLink href="/services#gst">GST Solutions</FooterLink>
              <FooterLink href="/services#accounting">Accounting</FooterLink>
              <FooterLink href="/services#audit">Statutory Audit</FooterLink>
            </FooterGroup>
            
            <FooterGroup title="Contact">
              <li className="flex flex-col gap-1 text-zinc-500 group">
                <span className="text-zinc-300 font-medium group-hover:text-indigo-400 transition-colors">Mumbai Office</span>
                <span className="text-sm font-light">Business Hub, MK Rd</span>
              </li>
              <li className="flex flex-col gap-1 text-zinc-500 group">
                <span className="text-zinc-300 font-medium group-hover:text-indigo-400 transition-colors">Direct Line</span>
                <span className="text-sm font-light">+91 98765 43210</span>
              </li>
            </FooterGroup>

            <FooterGroup title="Firm">
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Support</FooterLink>
              <FooterLink href="/privacy">Privacy</FooterLink>
            </FooterGroup>
          </div>
        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm font-light">
            © {new Date().getFullYear()} Petkar Accounting & Co. All rights reserved.
          </p>
          <div className="flex gap-8 text-zinc-600 text-sm font-light">
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <a href="#" className="h-10 w-10 flex items-center justify-center rounded-xl bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all">
      {icon}
    </a>
  );
}

function FooterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <h4 className="text-xs uppercase tracking-[0.3em] font-extrabold text-zinc-600">{title}</h4>
      <ul className="space-y-4">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-zinc-500 hover:text-white transition-all inline-flex items-center gap-1 group font-light">
        {children}
        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-50 group-hover:translate-y-0 transition-all" />
      </Link>
    </li>
  );
}
