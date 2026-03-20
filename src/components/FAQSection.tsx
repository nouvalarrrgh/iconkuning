import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import cloudFooter from "@/assets/cloud.svg";
import bintangBg from "@/assets/bintang.svg";
import SectionTitle from "./SectionTitle";

const faqs = [
  {
    question: "Apa itu ICON.LAB?",
    answer: "ICON.LAB adalah acara tahunan yang diselenggarakan oleh HIMA ILKOM sebagai wadah pengembangan minat dan kreativitas di bidang teknologi dan informatika.",
  },
  {
    question: "ICON.LAB ada acara apa saja?",
    answer: "ICON.LAB memiliki rangkaian acara yang seru tentunya, yaitu Game Development, Lomba KTI, dan Mobile Legend.",
  },
  {
    question: "Siapa saja yang boleh ikut ICON.LAB?",
    answer: "ICON.LAB membuka peluang bagi baik bagi pelajar dan mahasiswa sesuai dengan ketentuan masing-masing lomba.",
  },
  {
    question: "ICON.LAB diadakan setiap tahun atau hanya tahun ini saja?",
    answer: "ICON.LAB dilaksanakan setiap tahunnya.",
  },
  {
    question: "Apakah ICON.LAB dilaksanakan secara offline?",
    answer: "Lomba dalam ICON.LAB dilaksanakan secara hybrid, dimana babak final dilaksanakan secara offline.",
  },
  {
    question: "Dimana saya bisa mendapatkan informasi terbaru?",
    answer: "Informasi terbaru terkait ICON.LAB dapat dilihat melalui website dan Instagram resmi.",
  },
  {
    question: "Jika ada pertanyaan lain, harus ke mana?",
    answer: "Tenang saja, pertanyaan lain terkait ICON.LAB dapat menghubungi panitia melalui kontak yang tersedia di website atau melalui akun Instagram resmi.",
  },
  {
    question: "Apakah seluruh anggota harus membuat akun?",
    answer: "Tidak perlu, yang membuat akun hanyalah ketua tim.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref, isVisible } = useScrollReveal();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden" ref={ref}>
      <img src={bintangBg} alt="Stars" className="absolute inset-0 w-full h-full object-cover [transform:scaleX(-1)] z-0 pointer-events-none opacity-20" />
      <img src={cloudFooter} className="absolute bottom-0 w-full h-auto object-cover z-0 pointer-events-none opacity-40 mix-blend-screen" alt="Cloud Footer" />
      
      <div className="relative max-w-5xl mx-auto px-6 z-10">
        <motion.div
          className="mb-12 flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="font-display text-[10px] text-retro-cyan text-glow-cyan tracking-[0.4em]">[ HELP MENU ]</span>
          <SectionTitle text="FAQ" type="orange" />

          <div className="pixel-card alert-card mt-8 w-full">
            <div className="card-header">TUTORIAL.MAN</div>
            <div className="card-body">
              <p className="intro-text">
                Punya pertanyaan seputar teknis lomba atau pendaftaran? Cek kumpulan solusi cepat di bawah ini!
              </p>
            </div>
          </div>
        </motion.div>

        <div className="pixel-card w-full">
           <div className="card-header">FAQ_LIST.SYS</div>
           <div className="card-body p-0">
              <div className="flex flex-col">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b-2 border-gray-100 last:border-b-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className={`w-full flex justify-between items-center text-left p-6 transition-colors ${openIndex === index ? 'bg-orange-50' : 'hover:bg-gray-50'}`}
                    >
                      <span className="flex-1 mr-3 flex items-start gap-4">
                        <span className="text-retro-yellow font-display text-[12px] mt-1">[?]</span>
                        <span className={`font-sans font-bold text-lg leading-relaxed ${openIndex === index ? 'text-orange-700' : 'text-gray-800'}`}>
                          {faq.question}
                        </span>
                      </span>
                      <span className={`text-orange-500 font-display text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>

                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="px-6 pb-6 pt-0 ml-14"
                      >
                        <div className="flex gap-4">
                          <span className="text-retro-green font-display text-[12px] mt-1">[►]</span>
                          <p className="font-sans text-gray-600 text-lg leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;