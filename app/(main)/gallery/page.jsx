"use client";

import { useState } from "react";
import Image from "next/image";

const galleryItems = [
  {
    type: "image",
    src: "/images/sports1.jpg",
    alt: "Athletics Event",
    category: "Sports",
    title: "Annual Sports Meet",
    description: "Students demonstrating competitive excellence and physical discipline."
  },
  {
    type: "image",
    src: "/images/sports2.jpg",
    alt: "Basketball Session",
    category: "Sports",
    title: "Basketball Leadership",
    description: "Fostering teamwork and strategic thinking on the court."
  },
  {
    type: "image",
    src: "/images/thanksgiving1.jpg",
    alt: "Academy Celebration",
    category: "Events",
    title: "Community Thanksgiving",
    description: "Our annual gathering celebrating the HIPA family and shared success."
  },
  {
    type: "video",
    src: "/videos/fieldtrip.mp4",
    alt: "Research Trip",
    category: "Excursions",
    title: "Museum Research Trip",
    description: "Bridging the gap between classroom theory and real-world history."
  },
  {
    type: "image",
    src: "/images/debate1.jpg",
    alt: "Oratory Competition",
    category: "Academic",
    title: "Inter-Academy Debate",
    description: "Developing the voices of tomorrow's global leaders."
  },
  {
    type: "video",
    src: "/videos/debate.mp4",
    alt: "Debate Highlights",
    category: "Academic",
    title: "Oratory Highlights",
    description: "Video highlights from our high-stakes academic debates."
  },
];

const categories = ["All", "Academic", "Sports", "Events", "Excursions"];

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalItem, setModalItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white py-20 px-6 font-sans antialiased text-slate-900">
      
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
          Visual Heritage
        </span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0a192f] mb-6">
          The Academy <span className="text-amber-500">In Action</span>
        </h1>
        <div className="w-20 h-1 bg-amber-500 mx-auto mb-10"></div>
      </div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-[#0a192f] text-white shadow-xl scale-105"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
            onClick={() => setModalItem(item)}
          >
            <div className="relative overflow-hidden cursor-pointer">
              {item.type === "image" ? (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={500}
                  height={300}
                  className="object-cover w-full h-72 transform group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="relative h-72">
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    muted
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <span className="bg-white/90 p-3 rounded-full text-xl shadow-lg">▶</span>
                  </div>
                </div>
              )}
              {/* Category Badge */}
              <div className="absolute top-4 left-4 bg-[#0a192f]/80 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider">
                {item.category}
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 border-t border-slate-50">
              <h3 className="text-lg font-serif font-bold text-[#0a192f] mb-2 group-hover:text-amber-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Lightbox */}
      {modalItem && (
        <div
          className="fixed inset-0 bg-[#0a192f]/95 backdrop-blur-md flex items-center justify-center z-50 p-4 md:p-10"
          onClick={() => setModalItem(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video lg:h-[60vh]">
              {modalItem.type === "image" ? (
                <Image
                  src={modalItem.src}
                  alt={modalItem.alt}
                  fill
                  className="object-cover"
                />
              ) : (
                <video
                  src={modalItem.src}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                />
              )}
            </div>
            <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <span className="text-amber-600 font-bold uppercase text-xs tracking-widest">{modalItem.category}</span>
                <h3 className="text-3xl font-serif font-bold text-[#0a192f] mt-1 mb-3">{modalItem.title}</h3>
                <p className="text-slate-600 max-w-xl">{modalItem.description}</p>
              </div>
              <button
                onClick={() => setModalItem(null)}
                className="px-10 py-3 bg-[#0a192f] text-white font-bold rounded-xl hover:bg-slate-800 transition-all shadow-lg whitespace-nowrap"
              >
                Return to Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}