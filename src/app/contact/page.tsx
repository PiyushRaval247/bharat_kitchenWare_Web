import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, Store, ArrowRight, PhoneIncoming } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bharat Kitchenware Mall | Best Mall in Deesa",
  description: "Get in touch with Bharat Kitchenware Mall in Deesa. Visit us for the best kitchenware or contact Om Bhai for bulk orders and inquiries.",
  keywords: ["Contact Bharat Mall", "Kitchenware Deesa Contact", "Om Bhai Deesa", "Mall in Deesa Address"],
};

export default function ContactPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />

      <main className="pt-20 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Header */}
        <header className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-primary font-headline uppercase tracking-[0.3em] text-[10px] font-extrabold mb-4 block">Get In Touch</span>
          <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface mb-6">Let&apos;s Craft Your Perfect <span className="text-primary italic">Kitchen.</span></h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">Whether you&apos;re a home cook or a professional chef, our doors and lines are always open to discuss culinary excellence in Deesa.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Card */}
            <div className="bg-surface-container-low p-8 rounded-[2.5rem] border border-outline-variant/10 group transition-all duration-300 hover:bg-surface-container">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="text-primary" size={24} />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Visit Our Showroom</h3>
              <p className="text-on-surface-variant leading-relaxed mb-6 font-medium">
                Tulsi Arcade, Reliance petrol pump road,<br/>
                Deesa, Gujarat - 385535,<br/>
                India
              </p>
              <a 
                href="https://maps.google.com/?q=Tulsi+Arcade+Reliance+petrol+pump+road+deesa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary font-headline font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase text-[10px] tracking-widest"
              >
                Get Directions
                <ArrowRight size={14} />
              </a>
            </div>

            {/* Instant Support Card */}
            <div className="bg-primary-container text-on-primary-container p-8 rounded-[2.5rem] shadow-xl shadow-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                <PhoneIncoming size={24} />
              </div>
              <h3 className="font-headline text-xl font-bold mb-4">Instant Support</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">+91 99788 99006</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-[8px] font-extrabold uppercase tracking-widest">Main</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-lg">99788 99006</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded text-[8px] font-extrabold uppercase tracking-widest">WhatsApp</span>
                </div>
              </div>
              <a 
                href="https://wa.me/919978899006"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-primary py-4 rounded-2xl font-headline font-extrabold text-sm hover:bg-surface-container transition-all flex items-center justify-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            {/* Hours Card */}
            <div className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10 flex items-center gap-6">
               <div className="w-12 h-12 bg-tertiary-fixed rounded-2xl flex items-center justify-center">
                 <Clock className="text-on-tertiary-fixed" size={24} />
               </div>
               <div>
                 <p className="text-[10px] font-bold uppercase text-outline tracking-widest">Operating Hours</p>
                 <p className="font-headline font-bold text-on-surface">10:00 AM – 07:30 PM</p>
                 <p className="text-[10px] text-on-surface-variant">Monday – Saturday</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-on-surface/5 border border-outline-variant/10">
            <h3 className="font-headline text-2xl font-bold mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-headline text-[10px] font-extrabold uppercase text-outline tracking-widest ml-1">Full Name</label>
                  <input className="w-full bg-surface-container-high border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface-variant/40 outline-none font-bold" placeholder="Arjun Patel" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="font-headline text-[10px] font-extrabold uppercase text-outline tracking-widest ml-1">Email Address</label>
                  <input className="w-full bg-surface-container-high border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface-variant/40 outline-none font-bold" placeholder="arjun@email.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-headline text-[10px] font-extrabold uppercase text-outline tracking-widest ml-1">Subject</label>
                <select className="w-full bg-surface-container-high border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all outline-none font-bold">
                  <option>Bulk Order Inquiry</option>
                  <option>Product Warranty</option>
                  <option>Custom Kitchen Consultation</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-headline text-[10px] font-extrabold uppercase text-outline tracking-widest ml-1">Message</label>
                <textarea className="w-full bg-surface-container-high border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-surface-container-lowest transition-all placeholder:text-on-surface-variant/40 outline-none font-bold" placeholder="Tell us about your requirements..." rows={4}></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 rounded-2xl font-headline font-extrabold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/20">
                Dispatch Message
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-20">
          <div className="relative w-full h-[450px] rounded-[3rem] overflow-hidden shadow-inner border border-outline-variant/10 group">
            <div className="absolute inset-0 bg-neutral-200 animate-pulse"></div>
            <img 
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125 opacity-70 group-hover:grayscale-0 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxDRjrp9qIuPGA9iej0iUSGqkfSDb5obWgJCD7ApJuYtyM4Z07jUOkmU_wRnQpR0IhNz3kTTj15ZQm3aRC2lDYtfF2PJ1jfCeq3o2BMrtBtvmLpS7KuUyzpc-QoAzWYjuToGBbfRKMkinss_VfOm-jNivyBdn6ZYQuidaLsACrRInl6QrK-iCMaq7ZGlMIpGP0MD5CCcux5zJov3S2XKIaqiPikLHtvHHgSZdszflSaZrFNrGLkp-qwIX70NVR3y3Cf_uXV_zKnEny" 
              alt="Deesa Location Map"
            />
            {/* Floating Info Overlay */}
            <div className="absolute bottom-8 left-8 bg-surface-container-lowest/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl max-w-xs border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center">
                  <Store className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-headline font-extrabold text-sm uppercase tracking-tight">Bharat Kitchenware</p>
                  <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Flagship Store</p>
                </div>
              </div>
              <p className="text-xs text-on-surface-variant leading-relaxed mb-4 font-bold">GST: 24AHMPT3449F1Z3</p>
              <button className="text-primary text-[10px] font-extrabold uppercase tracking-[0.2em] flex items-center gap-1 border-b-2 border-primary pb-1">
                Open in Google Maps
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
