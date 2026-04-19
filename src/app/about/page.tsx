import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Target, Award, Star, ShieldCheck, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[500px] flex items-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              alt="Artisanal kitchen background" 
              className="w-full h-full object-cover grayscale opacity-20" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeGsW-PErne8ctFbttwIM7t0G_szv7uCIK2Msix1zpvu-iyI7JJF6x7btaPkXJNljPoAkBIbnO3t5EhMdRPm072kZXtDKbOIoGUfY6aUglpCm0Du3vOX2ptiI8ckt41RmMOJN4n2DoictYKudWZYGRUcJBRGpgBoJpS3RNyP9ml47ycUUM0d0yKTlrxUwR5dh39C6NeYnIRJbp4d8SKz5M0yeMCMPm8hjeZiJnpBMjenXn1n0XrCiLdVU0IhiF1NobZOviA1N1t6zO"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <span className="text-primary font-headline uppercase tracking-[0.3em] text-[10px] font-extrabold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface max-w-2xl leading-[1.1] mb-8">
              Legacy of <span className="text-primary">Culinary Excellence</span> in Deesa.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-medium">
              Since 1999, Bharat Kitchenware has been more than just a store. We are a part of your family&apos;s heritage, bringing quality and innovation to every kitchen in our community.
            </p>
          </div>
        </section>

        {/* Values Bento Grid */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-surface-container-low p-10 rounded-[3rem] border border-outline-variant/10">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Target className="text-primary" size={28} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed font-medium">
                To empower home cooks and professional chefs with tools that inspire creativity and stand the test of time.
              </p>
            </div>
            <div className="bg-primary text-on-primary p-10 rounded-[3rem] shadow-2xl shadow-primary/20 scale-105">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm">
                <Award size={28} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Quality First</h3>
              <p className="text-on-primary/80 leading-relaxed font-medium">
                Every product in our catalog is rigorously tested for durability, safety, and performance before it reaches your home.
              </p>
            </div>
            <div className="bg-surface-container-low p-10 rounded-[3rem] border border-outline-variant/10">
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                <HeartHandshake className="text-secondary" size={28} />
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Community Focused</h3>
              <p className="text-on-surface-variant leading-relaxed font-medium">
                Deeply rooted in Deesa, we prioritize local artisans and long-term relationships with our valued customers.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="py-16 bg-surface-container-highest">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-4xl font-headline font-extrabold text-primary mb-1">25+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Years Legacy</p>
            </div>
            <div>
              <p className="text-4xl font-headline font-extrabold text-primary mb-1">50k+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Happy Families</p>
            </div>
            <div>
              <p className="text-4xl font-headline font-extrabold text-primary mb-1">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Authentic Quality</p>
            </div>
            <div>
              <p className="text-4xl font-headline font-extrabold text-primary mb-1">1k+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Unique Products</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
