import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Filter, ShoppingBag, ArrowUpRight } from "lucide-react";

const products = [
  { id: 1, title: "Artisan Copper Handi", price: "₹2,850", cat: "Copper", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCyU3jJ93RDK6wcNXJ4-M5ljzWwIL34hQ-eNt27ZIjErJ_G3npC2GrReJhCeIcPNYC0mipSad49I2AlyuMWk8RS5WuyFKH7pNnJhlPyXaXjbpFkag4CloUVOGUaguQq33j5d662KVV4fLI4PcS8eL7XiBQUpvUtEHXZ5Ngnn9gMnT327MMLvDGl71RgjtGQn8BTJ5QSaKBeu1EJrOkf4uyNGiO_y-c5ecM7fvgpDqPj_pnxPsDu7tOCC210ilZX6bcikZmiVJHixkSW" },
  { id: 2, title: "Heritage Steel Set", price: "₹4,200", cat: "Steel", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGfKuwZFnJmr246N4-cRqQXMvadvuXMD2gtikAbGLVLsK8E5GW6KWlTZBhJ2yhJHyDmHGby8PA45d20MdDTVaWaTnzXNmLexoHGhFKd3zk-FiUZJqe0AAOoaZwZ_q68RWtHxb9ocwmU_VYFzqza_3HrLaF0DghS5wlxWJW1njKr8U3X_0UYx4RQ7hRDoUK4K_yyyMGUvj4Ri_GNanFVpy4EZzCnisR8ckjPKlztoC5Nd4xeNnOzl09jQDcwlyQPQgf1reAo2gNoS9V" },
  { id: 3, title: "Pro Mixer Grinder", price: "₹5,499", cat: "Appliances", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt8Kb_R08pCN2qwlsvEZTpeS4woRvdSQm3G8v7TV7POIOQCaTZ0aOc4m9JcuMhMUo_qfYK3fJ5WQ3khB4E05zcJad0EXow7gQxpjzHXwGUXEFquclT9cXSRgDYQzdMTJA_6Qxio91XSoVZ3m0Qv7cW3ZCK7jaLKQy8CrDp4lxfEWe_qoo3VmmCmQ6pD8-N0cG5OVS1ctEozHm5jV09k3NZTUSOBswdFyYpCYtV5SqFjIQZx-xSKDNV6eFQJ2WnD-jya6L2OET-01Xt" },
  { id: 4, title: "Artisan Tawa", price: "₹1,250", cat: "Cast Iron", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn07qKJNmOyJ087fgdK9n4A3EWwQ1M9qaG3HXi9B7iV3KO9N4m8F-zmQYImq9kc_XLsaro_nWk4zfKreeyTWlwhExdSa3XUWVREPEKcCutcj85p0oxbOGznSvQj_41Vli-BVbEFAA4aByk1Wq209XAoVKZDTMbDhxdyg-jySO8tuw5u26zZblat8gRKPN7mMaefSaf5lTKy9RqTTYlKjQ7_8h4zjqogJOvNTzuWgBOk-ky_nQHEy0EipooreWLlGYOptG0W7qxzday" },
  { id: 5, title: "Designer Storage Set", price: "₹1,999", cat: "Storage", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlu7Xb1N8RK9kNRhddV1EkxVxAcOGeVpG1c4ZlZR94UOVxUJrurHRtw8d5sq8XOOoBzATLxP-NBL-UetId5gwbcFtpfcGKUXuAi7kgeGNSoLYd5ghy5X-6TD3lQlfOMaXq1Q0SMJC57z1kKOE1zgh0HuCLi7xbEQSnbL91GfCCD0Cjy4Hd5Io0RVDcu7GNTqvW_34InEHMumMFAH3CnqQpfcIxH6Xw9MlIutXNjlWJW_VicZwz7a8r587uHLoItx5mkcUYdsd4hRDO" },
  { id: 6, title: "Copper Water Dispenser", price: "₹3,450", cat: "Copper", img: "/copper-slide.png" },
];

export default function ProductsPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />

      <main className="pt-20 pb-16">
        {/* Page Header */}
        <header className="px-6 max-w-7xl mx-auto mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-primary font-headline uppercase tracking-[0.3em] text-[10px] font-extrabold mb-4 block">Store Catalog</span>
              <h1 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tight text-on-surface">Curated Collections.</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={18} />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="bg-surface-container-low border-none rounded-2xl py-3 pl-12 pr-6 focus:ring-2 focus:ring-primary/20 outline-none font-bold text-sm w-full md:w-64"
                />
              </div>
              <button className="bg-surface-container-low p-3 rounded-2xl hover:bg-surface-container-high transition-colors">
                <Filter size={20} className="text-on-surface-variant" />
              </button>
            </div>
          </div>
        </header>

        {/* Categories Pills */}
        <section className="px-6 max-w-7xl mx-auto mb-12 flex gap-3 overflow-x-auto scrollbar-hide">
          {["All Products", "Copper", "Steel", "Appliances", "Storage", "Cast Iron"].map((c, i) => (
            <button key={i} className={`px-6 py-2 rounded-full text-xs font-headline font-extrabold tracking-widest whitespace-nowrap transition-all ${i === 0 ? 'bg-primary text-on-primary' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'}`}>
              {c.toUpperCase()}
            </button>
          ))}
        </section>

        {/* Product Grid */}
        <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group bg-surface-container-low rounded-[2.5rem] overflow-hidden border border-outline-variant/10 hover:shadow-2xl hover:shadow-primary/5 transition-all">
              <div className="relative aspect-square overflow-hidden bg-white">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-headline font-extrabold tracking-widest text-primary shadow-lg uppercase">
                    {p.cat}
                  </span>
                </div>
                <button className="absolute bottom-6 right-6 w-12 h-12 bg-primary text-on-primary rounded-2xl flex items-center justify-center translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all shadow-xl shadow-primary/20">
                  <ShoppingBag size={20} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline font-bold text-xl text-on-surface group-hover:text-primary transition-colors">{p.title}</h3>
                  <ArrowUpRight size={18} className="text-outline-variant group-hover:text-primary transition-colors" />
                </div>
                <p className="text-2xl font-headline font-extrabold text-on-surface-variant">{p.price}</p>
              </div>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
