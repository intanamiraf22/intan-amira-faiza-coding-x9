// src/components/About.jsx

import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { PiBookOpenTextBold } from "react-icons/pi";
import { TbMedal, TbPencil, TbRocket } from "react-icons/tb";

const stats = [
  {
    icon: <PiBookOpenTextBold size={28} />,
    value: "100+",
    label: "Tugas Selesai",
  },
  { icon: <TbMedal size={28} />, value: "5+", label: "Juara Kelas" },
  { icon: <TbPencil size={28} />, value: "50+", label: "Tinta Pulpen" },
  { icon: <TbRocket size={28} />, value: "9+", label: "Pengalaman Belajar" },
];

export default function About() {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateY(0)" : "translateY(30px)",
    transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms`,
  });

  const fadeLeft = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateX(0)" : "translateX(-50px)",
    transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
  });

  const fadeRight = (delay = 0) => ({
    opacity: animate ? 1 : 0,
    transform: animate ? "translateX(0)" : "translateX(50px)",
    transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
  });

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="
        py-24 px-6
        bg-gradient-to-br from-sky-50 via-cyan-50 to-sky-100/30
        dark:from-sky-950 dark:via-cyan-950 dark:to-sky-950/20
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-14" style={fadeUp(100)}>
          <p className="text-sm font-semibold text-sky-500 dark:text-sky-400 tracking-widest uppercase mb-2">
            Tentang Saya
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-700 dark:text-sky-300 mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-16 h-1 bg-sky-500 dark:bg-sky-400 rounded-full mx-auto" />
        </div>

        {/* ── Konten Utama ── */}
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* KIRI — Ilustrasi Card */}
          <div
            className="w-full md:w-[45%] flex-shrink-0"
            style={fadeLeft(250)}
          >
            <div
              className="
                relative rounded-2xl overflow-visible
                bg-sky-100 dark:bg-sky-900/30
                min-h-[420px] flex items-center justify-center
              "
            >
              <img
                src="/images/cute-girl-working-laptop-with-coffee-cup-illustration.png"
                alt="Ilustrasi"
                className="w-52 sm:w-64 object-contain drop-shadow-lg"
                onError={(e) => {
                  e.target.src =
                    "https://placehold.co/300x300/ccfbf1/0d9488?text=Ilustrasi";
                }}
              />

              {/* Badge pojok kanan bawah */}
              <div
                className="
                  absolute -bottom-4 right-6
                  bg-white dark:bg-sky-800
                  border border-sky-300 dark:border-sky-700
                  rounded-xl px-5 py-3 shadow-lg
                "
                style={fadeUp(600)}
              >
                <p className="text-xl font-bold text-sky-700 dark:text-sky-300 leading-tight">
                  9+ Tahun
                </p>
                <p className="text-xs text-sky-500 dark:text-sky-400">
                  Pengalaman Belajar
                </p>
              </div>
            </div>
          </div>

          {/* KANAN — Deskripsi + Stats */}
          <div
            className="w-full md:flex-1 flex flex-col gap-4 md:mt-0 mt-8"
            style={fadeRight(300)}
          >
            {/* Accordion Deskripsi */}
            <div
              className="
                bg-white dark:bg-sky-800
                border border-sky-300 dark:border-sky-700
                rounded-2xl shadow-sm overflow-hidden
              "
            >
              <button
                onClick={() => setOpen(!open)}
                className="
                  w-full flex items-center justify-between
                  px-6 py-5 text-left
                  hover:bg-sky-50 dark:hover:bg-sky-700/50
                  transition-colors duration-200
                "
              >
                <span className="text-xl font-bold text-sky-700 dark:text-sky-300">
                  Deskripsi
                </span>
                <span className="text-sky-500 dark:text-sky-400">
                  {open ? (
                    <FiChevronUp size={22} />
                  ) : (
                    <FiChevronDown size={22} />
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 flex flex-col gap-3">
                  <p className="text-sky-600 dark:text-sky-400 text-sm leading-relaxed">
                    Nama saya Intan Amira Faiza. Saya lahir di Banda Aceh pada tanggal 22 Agustus 2009. Saat ini saya sedang menduduki bangku kelas 10 di Man 1 Banda Aceh. Saya tinggal di daerah Ateukjawo, Banda Aceh.
                  </p>
                  <p className="text-sky-600 dark:text-sky-400 text-sm leading-relaxed">
                    Saya adalah seorang remaja perempuan yang di kenal aktif dan memiliki banyak impian besar untuk masa depan. Saya juga termasuk remaja yang mjudah bergaul dan memiliki pengetahuan yang baik.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Stats 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="
                    bg-white dark:bg-sky-800
                    border border-sky-300 dark:border-sky-700
                    rounded-2xl shadow-sm p-6
                    flex flex-col items-center justify-center gap-2
                    hover:shadow-md transition-shadow duration-200
                  "
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateY(0)" : "translateY(30px)",
                    transition: `opacity 0.6s ease-out ${450 + i * 100}ms, transform 0.6s ease-out ${450 + i * 100}ms`,
                  }}
                >
                  <span className="text-sky-500 dark:text-sky-400">
                    {stat.icon}
                  </span>
                  <p className="text-2xl font-bold text-sky-700 dark:text-sky-300">
                    {stat.value}
                  </p>
                  <p className="text-xs text-sky-500 dark:text-sky-400 text-center">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}