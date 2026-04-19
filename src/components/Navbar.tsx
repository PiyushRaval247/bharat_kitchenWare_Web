"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-white/95 backdrop-blur-xl py-2 shadow-lg" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Bharat Kitchenware Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-headline font-extrabold tracking-tighter text-primary uppercase leading-none">
              Bharat
            </span>
            <span className="text-[10px] md:text-xs font-headline font-bold text-on-surface uppercase tracking-widest">
              Kitchenware
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-headline font-bold text-[10px] tracking-[0.2em] text-on-surface-variant">
          <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
          <Link href="/products" className="hover:text-primary transition-colors">PRODUCTS</Link>
          <Link href="/about" className="hover:text-primary transition-colors">ABOUT</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">CONTACT</Link>
        </div>

        {/* Desktop Action */}
        <div className="hidden md:block">
          <a 
            href="https://wa.me/919106198615" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-on-primary px-7 py-3 rounded-full text-[10px] font-headline font-extrabold tracking-[0.15em] hover:bg-primary/90 transition-all transform hover:scale-105 shadow-xl shadow-primary/20 flex items-center gap-2"
          >
            <MessageCircle size={16} />
            WHATSAPP
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-on-surface hover:bg-surface-container rounded-xl transition-all"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-outline-variant/10 shadow-2xl py-8 px-6 space-y-6 flex flex-col items-center animate-in fade-in slide-in-from-top-4">
          <Link onClick={() => setIsMenuOpen(false)} href="/" className="text-xl font-headline font-bold text-on-surface hover:text-primary">HOME</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/products" className="text-xl font-headline font-bold text-on-surface hover:text-primary">PRODUCTS</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/about" className="text-xl font-headline font-bold text-on-surface hover:text-primary">ABOUT</Link>
          <Link onClick={() => setIsMenuOpen(false)} href="/contact" className="text-xl font-headline font-bold text-on-surface hover:text-primary">CONTACT</Link>
          
          <a 
            href="https://wa.me/919106198615" 
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full bg-primary text-on-primary py-5 rounded-2xl text-sm font-headline font-extrabold tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
          >
            <MessageCircle size={20} />
            CHAT ON WHATSAPP
          </a>
        </div>
      )}
    </nav>
  );
}
