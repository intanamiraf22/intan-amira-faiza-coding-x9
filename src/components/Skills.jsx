// src/components/Skills.jsx

import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    icon: "🗣️",
    title: "Bahasa",
    color: "bg-sky-100 dark:bg-sky-900/30",
    skills: [
      { name: "Bahasa Indonesia", level: 90 },
      { name: "Bahasa Inggris", level: 100 },
      { name: "Bahasa Arab", level: 85 },
      { name: "Bahasa Jepang", level: 70 },
    ],
  },
  {
    icon: "🌍",
    title: "IPS",
    color: "bg-sky-100/80 dark:bg-sky-900/20",
    skills: [
      { name: "Sosiologi", level: 95 },
      { name: "Ekonomi", level: 90 },
      { name: "Geografi", level: 96 },
      { name: "Sejarah", level: 90 },
    ],
  },
  {
    icon: "🧠",
    title: "IPA",
    color: "bg-sky-100/60 dark:bg-sky-900/10",
    skills: [
      { name: "Biologi", level: 90 },
      { name: "Kimia", level: 95 },
      { name: "Fisika", level: 85 },
      { name: "Matematika", level: 90 },
    ],
  },
];

// Komponen satu progress bar dengan animasi
function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-sky-700 dark:text-sky-300">
          {name}
        </span>
        <span className="text-sm text-sky-500 dark:text-sky-400">
          {level}%
        </span>
      </div>
      <div className="w-full h-2 bg-sky-100 dark:bg-sky-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-sky-400 dark:bg-sky-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

// Komponen satu card kategori
function SkillCard({ category, animate }) {
  return (
    <div
      className="
        bg-white dark:bg-sky-800
        border border-sky-300 dark:border-sky-700
        rounded-2xl shadow-sm p-6
        hover:shadow-md transition-shadow duration-300
      "
    >
      {/* Header Card */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${category.color}`}
        >
          {category.icon}
        </div>
        <h3 className="text-lg font-bold text-sky-700 dark:text-sky-300">
          {category.title}
        </h3>
      </div>

      {/* Skill Bars */}
      {category.skills.map((skill) => (
        <SkillBar
          key={skill.name}
          name={skill.name}
          level={skill.level}
          animate={animate}
        />
      ))}
    </div>
  );
}

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animasi saat section masuk viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="keahlian"
      ref={sectionRef}
      className="
        py-24 px-6
        bg-gradient-to-br from-white via-sky-50 to-sky-100/20
        dark:from-sky-950 dark:via-sky-900 dark:to-sky-950/10
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Header ── */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sky-500 dark:text-sky-400 tracking-widest uppercase mb-2">
            Keahlian
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-700 dark:text-sky-300 mb-4">
            Kemampuan Akademis
          </h2>
          <div className="w-16 h-1 bg-sky-500 dark:bg-sky-400 rounded-full mx-auto" />
        </div>

        {/* ── Grid 3 Card ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(40px)",
                transitionDelay: `${i * 150}ms`,
              }}
            >
              <SkillCard category={category} animate={animate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}