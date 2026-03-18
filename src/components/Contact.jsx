// src/components/Contact.jsx

import { useEffect, useRef, useState } from "react";
import { TbMail, TbPhone, TbMapPin, TbSend } from "react-icons/tb";

const contactInfo = [
  {
    icon: <TbMail size={20} />,
    label: "Email",
    value: "intanamira.f22@gmail.com",
  },
  {
    icon: <TbPhone size={20} />,
    label: "Telepon",
    value: "+62 823-6956-1516",
  },
  {
    icon: <TbMapPin size={20} />,
    label: "Lokasi",
    value: "Banda Aceh, Indonesia",
  },
];

export default function Contact() {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    subjek: "",
    pesan: "",
  });
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ nama: "", email: "", subjek: "", pesan: "" });
  };

  const inputClass = `
    w-full px-4 py-2.5 rounded-xl text-sm
    border border-sky-200 dark:border-sky-600
    bg-white dark:bg-sky-700/50
    text-sky-900 dark:text-sky-100
    placeholder:text-sky-400 dark:placeholder:text-sky-500
    focus:outline-none focus:ring-2 focus:ring-sky-400
    dark:focus:ring-sky-500 focus:border-transparent
    transition-all duration-200
  `;

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="
        py-24 px-6
        bg-gradient-to-br from-white via-sky-50 to-sky-100/20
        dark:from-sky-950 dark:via-sky-900 dark:to-sky-950/10
      "
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{
            opacity: animate ? 1 : 0,
            transform: animate ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <p className="text-sm font-semibold text-sky-500 dark:text-sky-400 tracking-widest uppercase mb-2">
            Kontak
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-sky-700 dark:text-sky-300 mb-4">
            Hubungi Saya
          </h2>
          <div className="w-16 h-1 bg-sky-500 dark:bg-sky-400 rounded-full mx-auto" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left - Contact Info */}
          <div
            className="w-full md:w-[45%] flex flex-col gap-6 transition-all duration-700"
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(-40px)",
              transitionDelay: "150ms",
            }}
          >
            <div>
              <h3 className="text-xl font-bold text-sky-700 dark:text-sky-300 mb-3">
                Mari Berkonsultasi!
              </h3>
              <p className="text-sm text-sky-500 dark:text-sky-400 leading-relaxed">
                Ingin meningkatkan keterampilan belajar Anda? Saya siap membantu
                Anda mencapai tujuan tersebut. Jangan ragu untuk menghubungi
                saya.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {contactInfo.map((item, i) => (
                <div
                  key={item.label}
                  className="
                    flex items-center gap-4 p-4
                    bg-white dark:bg-sky-800
                    border border-sky-100 dark:border-sky-700
                    rounded-2xl shadow-sm
                    hover:shadow-md transition-shadow duration-200
                  "
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? "translateX(0)" : "translateX(-30px)",
                    transition: `opacity 0.6s ease-out ${300 + i * 100}ms, transform 0.6s ease-out ${300 + i * 100}ms, box-shadow 0.2s ease`,
                  }}
                >
                  <div
                    className="
                      w-10 h-10 flex items-center justify-center flex-shrink-0
                      rounded-xl bg-sky-50 dark:bg-sky-900/30
                      text-sky-500 dark:text-sky-400
                    "
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-sky-400 dark:text-sky-500 mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-medium text-sky-800 dark:text-sky-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="
              w-full md:flex-1
              bg-white dark:bg-sky-800
              border border-sky-100 dark:border-sky-700
              rounded-2xl shadow-sm p-6
              transition-all duration-700
            "
            style={{
              opacity: animate ? 1 : 0,
              transform: animate ? "translateX(0)" : "translateX(40px)",
              transitionDelay: "200ms",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <label className="block text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
                    Nama
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    placeholder="Nama Anda"
                    required
                    className={inputClass}
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@contoh.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
                  Subjek
                </label>
                <input
                  type="text"
                  name="subjek"
                  value={formData.subjek}
                  onChange={handleChange}
                  placeholder="Subjek pesan"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-sky-600 dark:text-sky-400 mb-1.5">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan Anda..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="
                  w-full flex items-center justify-center gap-2
                  py-3 bg-sky-500 hover:bg-sky-400
                  dark:bg-sky-500 dark:hover:bg-sky-400
                  text-white text-sm font-medium rounded-xl
                  transition-colors duration-200
                  disabled:opacity-60 disabled:cursor-not-allowed
                "
              >
                <TbSend size={17} />
                {submitted ? "Pesan Terkirim! ✓" : "Kirim Pesan"}
              </button>

              {submitted && (
                <p className="text-center text-sm text-sky-500 dark:text-sky-400 animate-pulse">
                  Terima kasih! Pesan kamu sudah diterima.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}