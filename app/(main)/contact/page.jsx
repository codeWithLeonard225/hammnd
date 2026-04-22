// app/(main)/contact/page.js

import Link from 'next/link';

export const metadata = {
  title: "Contact Our Admissions Office | Hammond International Preparatory & Academy",
  description:
    "Connect with the HIPA administration. Find our Freetown campus address, direct lines for admissions, and official office hours.",
};

export default function ContactPage() {
  return (
    <div className="contact-page-content font-sans antialiased text-slate-900">
      
      {/* 1. HERO HEADER */}
      <section className="bg-[#0a192f] py-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-500 blur-[120px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-amber-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Get In Touch</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Connect with the <span className="text-amber-400">Academy</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you are a prospective parent or a community partner, our 
            administrative team is here to assist with your inquiries.
          </p>
        </div>
      </section>

      {/* 2. QUICK CONTACT CARDS */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Email */}
          <div className="group p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <span className="text-3xl">✉️</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#0a192f] mb-3">Email Enquiries</h3>
            <p className="text-slate-500 text-sm mb-6">Our team typically responds within 24 business hours.</p>
            <Link href="mailto:admissions@hammond.edu.sl" className="text-amber-600 font-bold hover:underline decoration-2 underline-offset-4">
              admissions@hammond.edu.sl
            </Link>
          </div>

          {/* Phone */}
          <div className="group p-10 bg-[#0a192f] border border-slate-800 rounded-3xl shadow-xl text-center text-white">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 transition-colors">
              <span className="text-3xl">📞</span>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Direct Admissions</h3>
            <p className="text-slate-400 text-sm mb-6">Speak directly with our registrar for enrollment help.</p>
            <Link href="tel:+23276XXXXXXX" className="text-amber-400 text-lg font-bold">
              (+232) 76 XXX XXX
            </Link>
          </div>
          
          {/* Office Hours */}
          <div className="group p-10 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
              <span className="text-3xl">⏰</span>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#0a192f] mb-3">Campus Hours</h3>
            <div className="text-slate-600 text-sm space-y-1">
              <p className="font-semibold">Mon — Fri: 8:00 AM - 4:00 PM</p>
              <p>Weekends: By Appointment Only</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE SECTION: FORM & LOCATION */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* CONTACT FORM */}
          <div className="bg-white p-10 md:p-12 rounded-[2rem] shadow-2xl border border-slate-100">
            <h2 className="text-3xl font-serif font-bold text-[#0a192f] mb-8">
              Send an Official Enquiry
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Inquiry Type</label>
                <select className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-amber-500 outline-none appearance-none cursor-pointer">
                    <option>Admissions & Enrollment</option>
                    <option>Curriculum & Academics</option>
                    <option>Career Opportunities</option>
                    <option>Media & Partnerships</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Your Message</label>
                <textarea rows="5" placeholder="How can we assist you today?" className="w-full p-4 bg-slate-50 border-none rounded-xl focus:ring-2 focus:ring-amber-500 outline-none transition-all resize-none"></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#0a192f] hover:bg-slate-800 text-white font-bold py-5 rounded-xl transition shadow-lg shadow-slate-200"
              >
                Dispatch Message
              </button>
            </form>
          </div>
          
          {/* LOCATION DETAILS */}
          <div className="flex flex-col h-full">
            <div className="bg-amber-500 p-12 text-[#0a192f] rounded-[2rem] shadow-xl mb-10 relative overflow-hidden group">
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <h3 className="text-2xl font-serif font-bold mb-4">Our Main Campus</h3>
              <p className="text-lg leading-relaxed mb-8 opacity-90">
                <strong>Hammond International Academy</strong>
                <br />
                14 School Road, Regent Village, 
                <br />
                Freetown, Sierra Leone
              </p>
              <Link
                href="https://maps.google.com" 
                target="_blank"
                className="inline-flex items-center bg-[#0a192f] text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition shadow-lg"
              >
                Open in Google Maps <span className="ml-2">↗</span>
              </Link>
            </div>
            
            {/* Embedded Map */}
            <div className="flex-grow min-h-[400px] w-full rounded-[2rem] shadow-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-4 border-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.52!2d-13.2!3d8.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjQnMDAuMCJOIDEzwrAxMicwMC4wIlc!5e0!3m2!1sen!2ssl!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="HIPA Campus Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}