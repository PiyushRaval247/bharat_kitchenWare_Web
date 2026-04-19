"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  Tags, 
  Image as ImageIcon, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit3,
  Search,
  CheckCircle2
} from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function AdminDashboard() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("products");
  const router = useRouter();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        router.push("/admin/login");
      } else {
        setSession(session);
        setLoading(false);
      }
    });
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-surface-container-low flex">
      {/* Sidebar */}
      <aside className="w-64 bg-surface-container-lowest border-r border-outline-variant/10 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <LayoutDashboard size={24} />
          </div>
          <span className="font-headline font-extrabold text-lg text-on-surface uppercase tracking-tight">Admin Console</span>
        </div>

        <nav className="flex-1 space-y-2">
          <TabButton 
            active={activeTab === "products"} 
            onClick={() => setActiveTab("products")}
            icon={<Package size={20} />}
            label="Products"
          />
          <TabButton 
            active={activeTab === "categories"} 
            onClick={() => setActiveTab("categories")}
            icon={<Tags size={20} />}
            label="Categories"
          />
          <TabButton 
            active={activeTab === "hero"} 
            onClick={() => setActiveTab("hero")}
            icon={<ImageIcon size={20} />}
            label="Hero Slider"
          />
        </nav>

        <button 
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-error hover:bg-error/5 rounded-xl transition-all font-bold text-sm"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-headline font-extrabold text-on-surface">
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Management
            </h1>
            <p className="text-on-surface-variant mt-1">Control your storefront content in real-time.</p>
          </div>
          <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-headline font-bold flex items-center gap-2 shadow-xl shadow-primary/10 hover:scale-105 transition-all">
            <Plus size={20} />
            Add New {activeTab === "categories" ? "Category" : activeTab === "hero" ? "Slide" : "Product"}
          </button>
        </header>

        {activeTab === "products" && <ProductList />}
        {activeTab === "categories" && <CategoryList />}
        {activeTab === "hero" && <HeroManager />}
      </main>
    </div>
  );
}

function TabButton({ active, onClick, icon, label }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl font-bold transition-all text-sm ${
        active 
        ? "bg-primary text-on-primary shadow-lg shadow-primary/10" 
        : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

function ProductList() {
  const [search, setSearch] = useState("");
  // Mock data for UI demonstration until Supabase is connected
  const mockProducts = [
    { id: 1, title: "Heritage Steel Series", category: "Steel", price: "₹2,499", stock: 124 },
    { id: 2, title: "Artisan Copper Bowl", category: "Copper", price: "₹1,850", stock: 45 },
    { id: 3, title: "Pro Mixer Grinder", category: "Appliances", price: "₹4,999", stock: 28 },
  ];

  return (
    <div className="bg-surface-container-lowest rounded-[2rem] border border-outline-variant/10 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-outline-variant/5 flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" size={20} />
          <input 
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-surface-container-low border-none rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 transition-all outline-none"
          />
        </div>
      </div>
      <table className="w-full text-left">
        <thead className="bg-surface-container-low text-xs font-bold uppercase text-outline tracking-widest">
          <tr>
            <th className="px-8 py-4">Product Name</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4">Price</th>
            <th className="px-6 py-4">Stock</th>
            <th className="px-8 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-outline-variant/5">
          {mockProducts.map((p) => (
            <tr key={p.id} className="hover:bg-surface-container/30 transition-colors">
              <td className="px-8 py-5 font-bold text-on-surface">{p.title}</td>
              <td className="px-6 py-5">
                <span className="px-3 py-1 bg-surface-container-high rounded-full text-xs font-bold text-on-surface-variant">
                  {p.category}
                </span>
              </td>
              <td className="px-6 py-5 font-medium">{p.price}</td>
              <td className="px-6 py-5">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${p.stock < 50 ? 'bg-orange-400' : 'bg-green-400'}`}></div>
                  <span className="font-bold text-sm">{p.stock}</span>
                </div>
              </td>
              <td className="px-8 py-5 text-right">
                <div className="flex items-center justify-end gap-2">
                  <button className="p-2 text-on-surface-variant hover:text-primary hover:bg-primary/5 rounded-lg transition-all">
                    <Edit3 size={18} />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error/5 rounded-lg transition-all">
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CategoryList() {
  const categories = ["Steel", "Copper", "Appliances", "Plastic", "Crockery"];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((c, i) => (
        <div key={i} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 flex justify-between items-center group hover:border-primary/20 transition-all">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
              <Tags size={24} />
            </div>
            <span className="font-bold text-on-surface text-lg">{c}</span>
          </div>
          <button className="opacity-0 group-hover:opacity-100 p-2 text-error hover:bg-error/5 rounded-lg transition-all">
            <Trash2 size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}

function HeroManager() {
  const mockSlides = [
    { id: 1, title: "Main Hero", active: true },
    { id: 2, title: "Artisan Copper", active: true },
    { id: 3, title: "Appliances", active: false },
  ];
  return (
    <div className="space-y-6">
      {mockSlides.map((s) => (
        <div key={s.id} className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/10 flex items-center gap-6">
          <div className="w-32 h-20 bg-surface-container-high rounded-xl flex items-center justify-center">
            <ImageIcon size={24} className="text-outline-variant" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-on-surface">{s.title}</h3>
            <div className="flex items-center gap-2 mt-1">
              {s.active ? (
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-green-600 tracking-widest bg-green-50 px-2 py-0.5 rounded">
                  <CheckCircle2 size={10} /> Active
                </span>
              ) : (
                <span className="text-[10px] font-bold uppercase text-outline tracking-widest bg-surface-container px-2 py-0.5 rounded">
                  Hidden
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
             <button className="bg-surface-container text-on-surface px-4 py-2 rounded-xl font-bold text-xs hover:bg-surface-container-highest transition-all">Toggle Visibility</button>
             <button className="bg-primary/5 text-primary p-2 rounded-lg hover:bg-primary/10 transition-all"><Edit3 size={18} /></button>
             <button className="bg-error/5 text-error p-2 rounded-lg hover:bg-error/10 transition-all"><Trash2 size={18} /></button>
          </div>
        </div>
      ))}
    </div>
  );
}
