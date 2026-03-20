import { Youtube, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FooterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer id="contact" className="pt-20 pb-8 border-t-8 border-retro-cyan relative overflow-hidden bg-[#050214]" ref={ref}>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-retro-magenta/20 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #ffffff11 1px, transparent 1px), linear-gradient(to bottom, #ffffff11 1px, transparent 1px)`, backgroundSize: '50px 50px' }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Branding */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-4xl tracking-widest mb-4 flex items-baseline">
              <span className="text-retro-blue text-glow-blue">I</span>
              <span className="text-retro-red text-glow-red">C</span>
              <span className="text-retro-orange text-glow-orange">O</span>
              <span className="text-retro-green text-glow-green">N</span>
              <span className="text-white text-glow-white ml-2">.LAB</span>
            </h2>
            <h3 className="font-display text-lg text-white mb-6 tracking-widest text-glow-white">
              HIMA ILKOM UNNES
            </h3>
            
            <div className="pixel-card bg-white/5 border-white/20 p-4 mb-8 max-w-sm" style={{ border: '2px solid rgba(255,255,255,0.2)', boxShadow: '4px 4px 0 rgba(0,0,0,0.5)' }}>
               <p className="font-sans text-sm text-gray-400 leading-relaxed">
                 Acara IT tahunan unggulan yang diselenggarakan oleh HIMA ILKOM UNNES, menghadirkan para pionir untuk berinovasi, berkompetisi, dan berkolaborasi.
               </p>
            </div>

            <h4 className="font-display text-[10px] text-white/60 mb-4 tracking-widest">
              DIPERSEMBAHKAN OLEH
            </h4>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white flex items-center justify-center p-1">
                <div className="text-[8px] font-bold text-black text-center">UNNES</div>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white flex items-center justify-center p-2 text-black font-bold">
                HIMA
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white flex items-center justify-center p-1.5 text-black font-bold">
                ICN
              </div>
            </div>
          </div>

          {/* Column 2: Acara */}
          <div>
            <h4 className="font-display text-sm text-retro-cyan mb-8 uppercase tracking-widest text-glow-cyan">Acara</h4>
            <ul className="space-y-4">
              {["Game Development", "Lomba KTI", "Mobile Legend", "Workshop"].map((item) => (
                <li key={item}>
                  <a href="#acara" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Lainnya */}
          <div>
            <h4 className="font-display text-sm text-retro-cyan mb-8 uppercase tracking-widest text-glow-cyan">Lainnya</h4>
            <ul className="space-y-4">
              <li><a href="#tentang-kami" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">Tentang Kami</a></li>
              <li><a href="#sponsorship" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">Sponsorship</a></li>
              <li><a href="#faq" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Social & Contact */}
          <div>
            <h4 className="font-display text-sm text-retro-magenta mb-8 uppercase tracking-widest text-glow-magenta">Sosial Media</h4>
            <div className="flex items-center gap-3 mb-8">
              <a href="#" className="w-10 h-10 bg-[#FF0000] border-2 border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 border-2 border-white/20 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                <Instagram size={20} />
              </a>
            </div>

            <h4 className="font-display text-sm text-retro-magenta mb-6 uppercase tracking-widest text-glow-magenta">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li><a href="mailto:iconlabilkomunnes@gmail.com" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">iconlab@gmail.com</a></li>
              <li><a href="tel:+6281369274302" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">+62 81369274302</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="font-display text-[10px] text-gray-500 tracking-widest uppercase">
            © 2026 HIMA ILKOM — GAME OVER? NEVER.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSection;
