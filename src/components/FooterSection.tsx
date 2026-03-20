import { Youtube, Instagram, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FooterSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <footer id="contact" className="pt-20 pb-8 border-t-2 border-retro-cyan/20 relative overflow-hidden bg-[#0a0520]" ref={ref}>
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-retro-magenta/20 to-transparent pointer-events-none" />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl sm:text-4xl tracking-widest mb-2 flex items-baseline">
              <span className="text-retro-blue text-glow-blue">I</span>
              <span className="text-retro-red text-glow-red">C</span>
              <span className="text-retro-orange text-glow-orange">O</span>
              <span className="text-retro-green text-glow-green">N</span>
              <span className="text-white text-glow ml-2">.LAB</span>
            </h2>
            <h3 className="font-display text-sm sm:text-base text-white mb-6 tracking-wider">
              HIMA ILKOM UNNES
            </h3>
            <p className="font-sans text-sm text-gray-400 leading-relaxed mb-8 max-w-sm">
              Acara IT tahunan unggulan yang diselenggarakan oleh HIMA ILKOM UNNES, menghadirkan para pionir untuk berinovasi, berkompetisi, dan berkolaborasi.
            </p>

            <h4 className="font-display text-[10px] text-white mb-4">
              DIPERSEMBAHKAN OLEH
            </h4>
            <div className="flex items-center gap-4">
               {/* Placeholder logos */}
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 text-[8px] text-black font-bold">UNNES</div>
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 text-[8px] text-black font-bold">HIMA</div>
               <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 text-[8px] text-black font-bold">ICN</div>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm text-white mb-6 uppercase">Acara</h4>
            <ul className="space-y-4">
              {["Game Development", "Lomba KTI", "Mobile Legend", "Workshop"].map((item) => (
                <li key={item}>
                  <a href="#competitions" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm text-white mb-6 uppercase">Lainnya</h4>
            <ul className="space-y-4">
              <li><a href="#" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">Sponsorship</a></li>
              <li><a href="#faq" className="font-sans font-bold text-sm text-gray-300 hover:text-retro-cyan transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm text-white mb-6 uppercase">Sosial Media</h4>
            <div className="flex items-center gap-3 mb-8">
              <a href="#" className="w-9 h-9 bg-[#FF0000] rounded-sm flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Youtube size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 rounded-sm flex items-center justify-center text-white hover:scale-110 transition-transform">
                <Instagram size={18} />
              </a>
            </div>
            <h4 className="font-display text-sm text-white mb-6 uppercase">Kontak</h4>
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
