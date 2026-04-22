// app/(main)/services/page.js

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Academic Excellence & Programs | Hammond International Preparatory & Academy",
  description:
    "Explore the tiered academic pathways at HIPA, from Nursery foundation to Senior Secondary WASSCE excellence.",
};

const serviceCategories = [
  { 
    name: "Foundational & Primary Pathways", 
    tagline: "Building the Core",
    description: "Our early years and primary programs focus on cognitive agility, literacy, and the development of a robust moral compass.", 
    icon: "🌱",
    details: [
      "Nursery School: A play-based environment fostering social intelligence and early numeracy.",
      "Primary School: A rigorous foundation in core subjects coupled with character leadership training.",
      "Creative Arts & Literacy: Developing expressive confidence from an early age.",
    ],
    image: "/images/service-academics.jpg" 
  },
  {
    name: "Secondary Excellence (BECE & WASSCE)",
    tagline: "The Vanguard Years",
    description:
      "A results-oriented curriculum designed to exceed national standards, preparing students for competitive university entry.",
    icon: "🏛️",
    details: [
      "Junior Secondary (BECE): Specialized focus on the Basic Education Certificate Examination with critical thinking modules.",
      "Senior Secondary (WASSCE): Advanced academic streams (Arts, Sciences, Commercial) for WASSCE distinction.",
      "Career Pathing: Mentorship to align academic choices with professional goals.",
    ],
    image: "/images/service-support.jpg",
  },
  {
    name: "Digital Infrastructure & Campus Life",
    tagline: "21st Century Environment",
    description:
      "We provide a tech-forward learning environment where safety and innovation intersect to create a secure space for growth.",
    icon: "📡",
    details: [
      "Modern Classrooms: Ergonomic designs focused on collaborative and effective learning.",
      "ICT Integration: Digital literacy labs ensuring students are tech-fluent from day one.",
      "Library & Research: Extensive resource centers to support self-guided inquiry.",
      "Safe Campus: 24/7 security and a sanitized, disciplined school environment.",
    ],
    image: "/images/service-facilities.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page-content font-sans text-slate-900">
      
      {/* 1. ACADEMY HERO */}
      <section className="bg-[#0a192f] py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 transform translate-x-20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-amber-400 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Our Curriculum</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Educational <span className="text-amber-500">Pathways</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From foundational discovery to senior academic mastery, we provide a 
            structured journey toward global leadership.
          </p>
        </div>
      </section>

      {/* 2. PROGRAM SECTIONS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="space-y-32">
          {serviceCategories.map((service, index) => (
            <div
              key={service.name}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -inset-4 bg-slate-100 rounded-2xl group-hover:bg-amber-50 transition-colors duration-500"></div>
                <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <span className="text-amber-600 font-bold tracking-widest uppercase text-xs">
                    {service.tagline}
                  </span>
                </div>
                <h2 className="text-4xl font-serif font-bold text-[#0a192f] mb-6">
                  {service.name}
                </h2>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed italic border-l-4 border-amber-500 pl-6">
                  {service.description}
                </p>

                <ul className="space-y-4 mb-10">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-slate-700">
                      <span className="w-2 h-2 mt-2.5 rounded-full bg-amber-500 mr-4 flex-shrink-0"></span>
                      <span className="font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-[#0a192f] font-bold hover:text-amber-600 transition-colors group"
                >
                  Request Program Prospectus
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ADMISSIONS CALLOUT */}
      <section className="bg-slate-50 py-20 px-6 border-t border-slate-200">
        <div className="max-w-5xl mx-auto bg-[#0a192f] rounded-[2rem] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Begin the Enrollment Process
            </h2>
            <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
              Secure your child's place in the 2026 academic year. Our admissions 
              team is ready to guide you through our evaluation process.
            </p>
            <Link
              href="/admissions"
              className="bg-amber-500 hover:bg-amber-600 text-[#0a192f] text-lg font-bold px-12 py-4 rounded-full transition-all shadow-xl inline-block"
            >
              Apply Online Today
            </Link>
          </div>
          {/* Decorative Circle */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-amber-500/10 rounded-full"></div>
        </div>
      </section>
    </div>
  );
}