import Link from "next/link";
import { Mail, MessageCircle, MapPin, Clock, Tag } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest pt-16 md:pt-20 pb-10 border-t border-outline-variant/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 mb-16">
          <div className="col-span-1 sm:col-span-2 md:col-span-4 text-center md:text-left">
            <Link href="/" className="flex flex-col items-center md:items-start mb-6 group">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain mb-2" />
              <div className="flex flex-col">
                <span className="text-xl font-headline font-extrabold tracking-tight text-primary uppercase leading-none">
                  Bharat
                </span>
                <span className="text-[10px] font-headline font-bold text-on-surface uppercase tracking-widest">
                  Kitchenware
                </span>
              </div>
            </Link>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6 max-w-sm mx-auto md:mx-0 font-medium">
              Curating culinary excellence in Deesa for over 25 years. Your trusted destination for artisanal kitchenware and modern appliances.
            </p>
            <div className="flex items-center gap-2 text-[10px] font-extrabold text-primary bg-primary/5 px-4 py-2 rounded-xl w-fit mx-auto md:mx-0 border border-primary/10 tracking-widest uppercase">
              <Tag size={12} />
              GST: 24AHMPT3449F1Z3
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <h4 className="font-headline font-bold text-xs mb-6 tracking-[0.2em] uppercase text-on-surface">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold text-on-surface-variant">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 text-center md:text-left">
            <h4 className="font-headline font-bold text-xs mb-6 tracking-[0.2em] uppercase text-on-surface">Information</h4>
            <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span className="font-bold">Tulsi Arcade, Reliance petrol pump road, Deesa.</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Clock size={18} className="text-primary shrink-0" />
                <span className="font-bold">10:00 AM – 07:30 PM</span>
              </li>
              <li className="flex justify-center md:justify-start">
                <span className="font-bold text-[9px] uppercase tracking-widest px-3 py-1 bg-surface-container rounded-full border border-outline-variant/10 text-on-surface-variant">Shopping & Retail</span>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 md:col-span-3 text-center md:text-left">
            <h4 className="font-headline font-bold text-xs mb-6 tracking-[0.2em] uppercase text-on-surface">Support</h4>
            <ul className="space-y-4 text-sm font-medium text-on-surface-variant">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MessageCircle size={18} className="text-primary shrink-0" />
                <a href="https://wa.me/919106198615" target="_blank" rel="noopener noreferrer" className="hover:text-primary font-bold tracking-tight">
                  +91 91061 98615
                </a>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:aryathakkar153@gmail.com" className="hover:text-primary font-bold truncate max-w-[200px] md:max-w-none">
                  aryathakkar153@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-headline font-extrabold uppercase tracking-[0.25em] text-on-surface-variant/40">
          <p>© 2026 Bharat Kitchenware Mall. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
