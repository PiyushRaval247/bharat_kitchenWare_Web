import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";


export default function Home() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed overflow-x-hidden">
      <Navbar />

      <main>
        {/* Dynamic Hero Slider */}
        <HeroSlider />

        {/* Categories Section (Bento Grid) */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-12 gap-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-headline font-bold mb-3 md:mb-4">Featured Collections</h2>
              <p className="text-on-surface-variant text-sm md:text-base">Elevate your culinary craft with our signature ranges.</p>
            </div>
            <button className="text-primary font-bold flex items-center gap-2 group text-sm">
              View All Categories 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[600px]">
            {/* Utensils */}
            <div className="md:col-span-2 md:row-span-1 relative rounded-3xl md:rounded-[2rem] overflow-hidden group aspect-[16/10] md:aspect-auto">
              <img alt="Utensils" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGfKuwZFnJmr246N4-cRqQXMvadvuXMD2gtikAbGLVLsK8E5GW6KWlTZBhJ2yhJHyDmHGby8PA45d20MdDTVaWaTnzXNmLexoHGhFKd3zk-FiUZJqe0AAOoaZwZ_q68RWtHxb9ocwmU_VYFzqza_3HrLaF0DghS5wlxWJW1njKr8U3X_0UYx4RQ7hRDoUK4K_yyyMGUvj4Ri_GNanFVpy4EZzCnisR8ckjPKlztoC5Nd4xeNnOzl09jQDcwlyQPQgf1reAo2gNoS9V"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                <h3 className="text-white text-xl md:text-2xl font-headline font-bold mb-1 md:mb-2">Utensils</h3>
                <p className="text-white/80 text-xs md:text-sm">Essential tools for every dish.</p>
              </div>
            </div>
            {/* Cookware */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-3xl md:rounded-[2rem] overflow-hidden group aspect-[16/10] md:aspect-auto">
              <img alt="Cookware" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyU3jJ93RDK6wcNXJ4-M5ljzWwIL34hQ-eNt27ZIjErJ_G3npC2GrReJhCeIcPNYC0mipSad49I2AlyuMWk8RS5WuyFKH7pNnJhlPyXaXjbpFkag4CloUVOGUaguQq33j5d662KVV4fLI4PcS8eL7XiBQUpvUtEHXZ5Ngnn9gMnT327MMLvDGl71RgjtGQn8BTJ5QSaKBeu1EJrOkf4uyNGiO_y-c5ecM7fvgpDqPj_pnxPsDu7tOCC210ilZX6bcikZmiVJHixkSW"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <h3 className="text-white text-2xl md:text-3xl font-headline font-bold mb-1 md:mb-2">Premium Cookware</h3>
                <p className="text-white/80 text-sm md:text-base mb-4 md:mb-6">Designed for durability and even heating.</p>
                <button className="bg-white text-primary px-5 py-2 md:px-6 md:py-2 rounded-full font-bold text-xs md:text-sm">Shop Now</button>
              </div>
            </div>
            {/* Storage */}
            <div className="md:col-span-1 md:row-span-1 relative rounded-3xl md:rounded-[2rem] overflow-hidden group aspect-square md:aspect-auto">
              <img alt="Storage" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlu7Xb1N8RK9kNRhddV1EkxVxAcOGeVpG1c4ZlZR94UOVxUJrurHRtw8d5sq8XOOoBzATLxP-NBL-UetId5gwbcFtpfcGKUXuAi7kgeGNSoLYd5ghy5X-6TD3lQlfOMaXq1Q0SMJC57z1kKOE1zgh0HuCLi7xbEQSnbL91GfCCD0Cjy4Hd5Io0RVDcu7GNTqvW_34InEHMumMFAH3CnqQpfcIxH6Xw9MlIutXNjlWJW_VicZwz7a8r587uHLoItx5mkcUYdsd4hRDO"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-lg md:text-xl font-headline font-bold">Storage</h3>
              </div>
            </div>
            {/* Appliances */}
            <div className="md:col-span-1 md:row-span-1 relative rounded-3xl md:rounded-[2rem] overflow-hidden group aspect-square md:aspect-auto">
              <img alt="Appliances" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt8Kb_R08pCN2qwlsvEZTpeS4woRvdSQm3G8v7TV7POIOQCaTZ0aOc4m9JcuMhMUo_qfYK3fJ5WQ3khB4E05zcJad0EXow7gQxpjzHXwGUXEFquclT9cXSRgDYQzdMTJA_6Qxio91XSoVZ3m0Qv7cW3ZCK7jaLKQy8CrDp4lxfEWe_qoo3VmmCmQ6pD8-N0cG5OVS1ctEozHm5jV09k3NZTUSOBswdFyYpCYtV5SqFjIQZx-xSKDNV6eFQJ2WnD-jya6L2OET-01Xt"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-lg md:text-xl font-headline font-bold">Appliances</h3>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-16 md:py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <img alt="Showroom" className="rounded-2xl h-48 md:h-64 w-full object-cover shadow-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeGsW-PErne8ctFbttwIM7t0G_szv7uCIK2Msix1zpvu-iyI7JJF6x7btaPkXJNljPoAkBIbnO3t5EhMdRPm072kZXtDKbOIoGUfY6aUglpCm0Du3vOX2ptiI8ckt41RmMOJN4n2DoictYKudWZYGRUcJBRGpgBoJpS3RNyP9ml47ycUUM0d0yKTlrxUwR5dh39C6NeYnIRJbp4d8SKz5M0yeMCMPm8hjeZiJnpBMjenXn1n0XrCiLdVU0IhiF1NobZOviA1N1t6zO"/>
                <img alt="Artisan kitchenware" className="rounded-2xl h-48 md:h-64 w-full object-cover shadow-lg mt-6 md:mt-8" src="/artisan-kitchen.png"/>
              </div>
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/50 rounded-full blur-3xl"></div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-xs font-bold text-tertiary uppercase tracking-widest mb-3 md:mb-4">Our Heritage</h2>
              <h2 className="text-3xl md:text-5xl font-headline font-bold mb-6 md:mb-8 leading-tight">Blending Tradition with Modern Utility</h2>
              <p className="text-base md:text-lg text-on-surface-variant mb-6 md:mb-8 leading-relaxed">
                Bharat Kitchenware has been the heart of Deesa for over 25 years. We believe every meal starts with the right foundation. Our selection is carefully curated to bring you the finest materials.
              </p>
              <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10">
                <li className="flex items-center gap-3 font-semibold text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  Direct Sourcing from Master Artisans
                </li>
                <li className="flex items-center gap-3 font-semibold text-sm md:text-base">
                  <span className="material-symbols-outlined text-primary text-xl" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  Guaranteed Lifetime Durability
                </li>
              </ul>
              <button className="w-full sm:w-auto bg-secondary text-on-secondary px-8 py-3.5 rounded-full font-headline font-bold hover:shadow-xl hover:shadow-secondary/20 transition-all">
                Learn More About Us
              </button>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-headline font-bold mb-4">A Legacy of Trust</h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-fixed rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 rotate-3 group-hover:rotate-0 transition-transform">
                <span className="material-symbols-outlined text-on-primary-fixed text-2xl md:text-3xl">history</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-primary mb-1 md:mb-2">25+</h3>
              <p className="font-bold text-base md:text-lg mb-2 md:mb-4">Years of Service</p>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">Providing high-quality kitchen essentials in Deesa since 1999.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow text-center md:scale-105 border border-primary/10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-secondary-fixed rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 -rotate-3">
                <span className="material-symbols-outlined text-on-secondary-fixed text-2xl md:text-3xl">family_history</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-secondary mb-1 md:mb-2">50k+</h3>
              <p className="font-bold text-base md:text-lg mb-2 md:mb-4">Happy Customers</p>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">A thriving community of chefs and home cooks who trust our selection.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl md:rounded-[2.5rem] shadow-sm hover:shadow-xl transition-shadow text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-tertiary-fixed rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-4 md:mb-6 rotate-6">
                <span className="material-symbols-outlined text-on-tertiary-fixed text-2xl md:text-3xl">verified</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-headline font-extrabold text-tertiary mb-1 md:mb-2">100%</h3>
              <p className="font-bold text-base md:text-lg mb-2 md:mb-4">Authentic Quality</p>
              <p className="text-on-surface-variant text-xs md:text-sm leading-relaxed">Every product undergoes rigorous quality checks before reaching your hands.</p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-7xl mx-auto px-6 mb-16 md:mb-24">
          <div className="bg-primary-container rounded-3xl md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-center text-on-primary-container">
            <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-white/10 rounded-full -mr-10 md:-mr-20 -mt-10 md:-mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 md:w-64 h-32 md:h-64 bg-black/10 rounded-full -ml-10 md:-ml-20 -mb-10 md:-mb-20 blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-6 md:mb-8 relative z-10 max-w-2xl mx-auto leading-tight">Ready to Upgrade Your Kitchen Experience?</h2>
            <p className="text-base md:text-xl text-on-primary-container/80 mb-8 md:mb-10 max-w-xl mx-auto relative z-10">Visit our flagship showroom in Deesa or explore our digital catalog today.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <button className="bg-white text-primary px-8 py-3.5 md:px-10 md:py-4 rounded-full font-headline font-extrabold text-base md:text-lg shadow-lg hover:bg-surface-container transition-all">
                Explore Full Range
              </button>
              <button className="bg-primary text-white border-2 border-white/30 px-8 py-3.5 md:px-10 md:py-4 rounded-full font-headline font-extrabold text-base md:text-lg hover:bg-white/10 transition-all">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
