"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const slides = [
  {
    title: "Your One-Stop Kitchenware Destination",
    subtitle: "Premium Kitchen Collections",
    desc: "Quality utensils, cookware, and kitchen essentials at affordable prices. Curated for the modern Indian kitchen.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn07qKJNmOyJ087fgdK9n4A3EWwQ1M9qaG3HXi9B7iV3KO9N4m8F-zmQYImq9kc_XLsaro_nWk4zfKreeyTWlwhExdSa3XUWVREPEKcCutcj85p0oxbOGznSvQj_41Vli-BVbEFAA4aByk1Wq209XAoVKZDTMbDhxdyg-jySO8tuw5u26zZblat8gRKPN7mMaefSaf5lTKy9RqTTYlKjQ7_8h4zjqogJOvNTzuWgBOk-ky_nQHEy0EipooreWLlGYOptG0W7qxzday",
    primaryBtn: "Explore Products",
    secondaryBtn: "Our Story"
  },
  {
    title: "Timeless Artisan Copper Collections",
    subtitle: "Heritage & Wellness",
    desc: "Experience the health benefits and aesthetic beauty of hand-hammered copper vessels, crafted by master artisans.",
    img: "/copper-slide.png",
    primaryBtn: "Shop Copper",
    secondaryBtn: "Learn Benefits"
  },
  {
    title: "Modern Efficiency for Your Kitchen",
    subtitle: "Professional Grade",
    desc: "Upgrade your culinary space with sleek, high-performance appliances designed for the modern chef.",
    img: "/steel-slide.png",
    primaryBtn: "View Appliances",
    secondaryBtn: "Special Offers"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[650px] md:h-[700px] w-full overflow-hidden flex items-center bg-background pt-24 md:pt-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative w-full h-full flex items-center"
        >
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-0">
            {/* Text Content */}
            <div className="z-10 order-2 md:order-1 text-center md:text-left">
              <motion.span
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-headline font-bold text-[10px] uppercase tracking-[0.2em] mb-4 md:mb-6"
              >
                {slides[current].subtitle}
              </motion.span>
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tight"
              >
                {slides[current].title.split(" ").map((word, i) => (
                  <span key={i} className={word === "Kitchenware" || word === "Copper" || word === "Modern" ? "text-primary" : ""}>
                    {word}{" "}
                  </span>
                ))}
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-base md:text-xl text-on-surface-variant leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 font-medium"
              >
                {slides[current].desc}
              </motion.p>
              
              {/* Button Container - Added more bottom margin on mobile */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-20 md:mb-0"
              >
                <button className="bg-primary text-on-primary px-10 py-4 rounded-2xl font-headline font-bold text-sm shadow-xl hover:shadow-primary/30 transition-all active:scale-95">
                  {slides[current].primaryBtn}
                </button>
                <button className="bg-white/50 backdrop-blur-md text-on-surface px-10 py-4 rounded-2xl font-headline font-bold text-sm border border-outline-variant/30 hover:bg-surface-container-low transition-all active:scale-95">
                  {slides[current].secondaryBtn}
                </button>
              </motion.div>
            </div>

            {/* Image Section */}
            <div className="relative order-1 md:order-2 flex justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0, rotate: 2 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative bg-surface-container-lowest p-2 md:p-4 rounded-[2.5rem] shadow-2xl overflow-hidden w-full max-w-[450px]"
              >
                <img
                  alt={slides[current].title}
                  className="rounded-[2rem] w-full h-[280px] md:h-[500px] object-cover"
                  src={slides[current].img}
                />
              </motion.div>
              
              {current === 0 && (
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="hidden md:flex absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl items-center gap-4 border border-surface-container"
                >
                  <div className="w-12 h-12 bg-tertiary-fixed rounded-full flex items-center justify-center">
                    <Star className="text-on-tertiary-fixed fill-current" size={24} />
                  </div>
                  <div>
                    <p className="font-headline font-bold text-lg">4.9/5 Rating</p>
                    <p className="text-sm text-on-surface-variant">Trusted by 10k+ Families</p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls - Positioned better for mobile */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center gap-6 z-20 md:left-auto md:right-12 md:bottom-12 md:w-auto md:justify-end">
        <button
          onClick={prevSlide}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all backdrop-blur-md bg-white/20 active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-primary hover:text-white transition-all backdrop-blur-md bg-white/20 active:scale-90"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators - Horizontal for both */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 transition-all rounded-full ${current === i ? 'w-10 bg-primary' : 'w-2 bg-outline-variant/30'}`}
          />
        ))}
      </div>
      
      {/* Background Blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary-fixed/10 rounded-full blur-3xl z-0 pointer-events-none"></div>
    </section>
  );
}
