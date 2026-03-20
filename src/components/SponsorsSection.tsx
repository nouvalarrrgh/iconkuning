import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import cloudBg from "@/assets/icon/cloud.svg";
import bintangBg from "@/assets/bintang.svg";
import SectionTitle from "./SectionTitle";

const sponsors = [
  { name: "HIMA ILKOM", tier: "ORGANIZER" },
  { name: "UNNES", tier: "UNIVERSITY" },
  { name: "ICON LAB", tier: "LABORATORY" },
];

const SponsorsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const renderCards = (items: typeof sponsors) =>
    items.map((s, i) => (
      <div
        key={`${s.name}-${i}`}
        className="pixel-card w-48 md:w-64 h-36 md:h-48 flex flex-col justify-center items-center overflow-hidden flex-shrink-0 p-4 transition-all duration-300"
        style={{ border: '4px solid #333', boxShadow: '6px 6px 0 rgba(0,0,0,0.2)' }}
      >
        <div className="w-14 h-14 flex items-center justify-center border-2 border-gray-300/20 mb-3 text-gray-500 bg-gray-50">
          <span className="font-display text-sm">{s.name.slice(0, 2).toUpperCase()}</span>
        </div>
        <span className="font-display text-[10px] text-gray-800 tracking-widest">{s.name}</span>
        {s.tier && <span className="text-xs text-retro-yellow mt-2 font-display">{s.tier}</span>}
      </div>
    ));

  return (
    <section id="sponsorship" className="py-24 relative overflow-hidden" ref={ref}>
      <img src={bintangBg} alt="Stars" className="absolute inset-0 w-full h-full object-cover [transform:scaleX(-1)] z-0 pointer-events-none opacity-20" />
      <img src={cloudBg} className="absolute top-16 right-0 w-48 md:w-64 [transform:scaleX(-1)] z-0 opacity-30 mix-blend-screen pointer-events-none" alt="Cloud" />
      <img src={cloudBg} className="absolute bottom-16 left-0 w-48 md:w-64 z-0 opacity-30 mix-blend-screen pointer-events-none" alt="Cloud" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <motion.div
          className="text-center mb-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display text-[10px] text-retro-magenta text-glow-magenta tracking-[0.4em]">[ PARTY MEMBERS ]</span>
          <SectionTitle text="SPONSOR & PARTNER" type="red" />
          
          <div className="pixel-card alert-card max-w-2xl mt-8">
            <div className="card-header">FRIEND_LIST.DB</div>
            <div className="card-body">
              <p className="intro-text">
                Terima kasih kepada para sponsor yang telah mendukung terselenggaranya acara ini. Bersama kita membangun masa depan teknologi!
              </p>
            </div>
          </div>

          <div className="my-10 flex justify-center">
            <Link
              to="/sponsorship"
              className="inline-block px-10 py-4 border-4 border-retro-orange text-retro-orange font-display text-[11px] tracking-widest hover:bg-retro-orange hover:text-white transition-all shadow-[6px_6px_0_rgba(0,0,0,0.2)]"
            >
              ► AJUKAN KERJA SAMA
            </Link>
          </div>
        </motion.div>

        {/* Sponsor Marquee */}
        <div className="overflow-hidden">
          <div className="flex gap-5 animate-marquee w-max">
            {renderCards(sponsors)}
            {renderCards(sponsors)}
            {renderCards(sponsors)}
          </div>
        </div>

        {/* Media Partner Marquee */}
        <motion.div
          className="mt-20 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
           <span className="font-display text-[10px] text-retro-cyan text-glow-cyan tracking-[0.4em]">[ ALLIES ]</span>
           <SectionTitle text="MEDIA PARTNER" type="blue" />
        </motion.div>

        <div className="overflow-hidden mt-10">
          <div className="flex gap-5 animate-marquee-reverse w-max">
             {renderCards(sponsors)}
             {renderCards(sponsors)}
             {renderCards(sponsors)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
