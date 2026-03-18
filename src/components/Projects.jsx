// src/components/Projects.jsx

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    emoji: "⭐",
    thumbnailColor:
      "from-sky-100 via-cyan-100 to-sky-200 dark:from-sky-900/40 dark:via-cyan-900/40 dark:to-sky-950/40",
    title: "Motivation",
    description:
      "Platform yang berisi kumpulan motivasi dan inspirasi untuk pelajar dengan berbagai kategori.",
    tags: ["Pengembangan Diri", "Kesehatan Mental", "Inspirasi"],
    link: "https://youtube.com/@username",
  },
  {
    emoji: "🤓",
    thumbnailColor:
      "from-sky-100/80 via-cyan-100/80 to-sky-200/80 dark:from-sky-900/30 dark:via-cyan-900/30 dark:to-sky-950/30",
    title: "Tips",
    description:
      "Platform yang berisi kumpulan tips seputar dunia pendidikan, belajar, dan pengembangan diri.",
    tags: ["Trik Belajar", "Produktivitas", "Literasi Digital"],
    link: "https://youtube.com/@username",
  },
  {
    emoji: "🤔",
    thumbnailColor:
      "from-sky-100/60 via-cyan-100/60 to-sky-200/60 dark:from-sky-900/20 dark:via-cyan-900/20 dark:to-sky-950/20",
    title: "Tricks",
    description:
      "Platform yang berisi kumpulan trik untuk mempermudah proses belajar dan meningkatkan produktivitas.",
    tags: ["Sains Data", "Monitoring", "Statistik"],
    link: "https://youtube.com/@username",
  },
];

function ProjectCard({ project, animate, delay }) {
  return (
    <div
      className="
        bg-white dark:bg-sky-800
        border border-sky-300 dark:border-sky-700
        rounded-2xl shadow-sm overflow-hidden
        hover:shadow-lg transition-all duration-300
        flex flex-col
      "
      style={{
        opacity: animate ? 1 : 0,
        transform: animate ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ease-out ${delay}ms, transform 0.7s ease-out ${delay}ms, box-shadow 0.3s ease`,
      }}
    >
      {/* Thumbnail */}
      <div
        className={`
          relative w-full h-48 flex items-center justify-center
          bg-gradient-to-br ${project.thumbnailColor}
          rounded-t-2xl
        `}
      >
        <span className="text-6xl drop-shadow-md select-none">
          {project.emoji}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1 gap-3">
        <h3 className="text-lg font-bold text-sky-700 dark:text-sky-300">
          {project.title}
        </h3>

        <p className="text-sm text-sky-500 dark:text-sky-400 leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="
                text-xs px-3 py-1 rounded-full
                border border-sky-300 dark:border-sky-700
                text-sky-500 dark:text-sky-400
                bg-sky-50 dark:bg-sky-900/50
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-1 inline-flex items-center gap-2 self-start
            px-5 py-2.5 bg-sky-500 hover:bg-sky-400
            dark:bg-sky-500 dark:hover:bg-sky-400
            text-white text-sm font-medium rounded-full
            transition-colors duration-200
          "
        >
          <span className="text-xs">▶</span>
          Tonton
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="proyek"
      ref={sectionRef}
      className="
        py-24 px-6
        bg-gradient-to-br from-white via-sky-50 to-sky-100/30
        dark:from-sky-950 dark:via-sky-900 dark:to-sky-950/20
      "
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-sky-500 dark:text-sky-400 tracking-widest uppercase mb-2">
            Literasi
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-700 dark:text-sky-300 mb-4">
            Proyek & Karya
          </h2>
          <div className="w-16 h-1 bg-sky-500 dark:bg-sky-400 rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              animate={animate}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
}