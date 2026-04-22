// app/components/MainFooter.js

import Link from 'next/link';
import Image from 'next/image';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About the Academy', href: '/about' },
  { name: 'Academic Programs', href: '/services' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Contact Us', href: '/contact' },
];

const legalLinks = [
  { name: 'Privacy Policy', href: '/policy' },
  { name: 'Terms of Use', href: '/terms' },
];

export default function MainFooter() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="bg-[#0a192f] text-white pt-16 pb-8 mt-20 border-t border-amber-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          
          {/* Column 1: Branding */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                <Image
                  src="/images/hammond.jpg" // Updated to generic logo path
                  alt="HIPA Logo"
                  fill
                  className="object-contain p-1"
                  sizes="48px"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tight leading-none text-amber-400">
                  HAMMOND
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  Prep & Academy
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Cultivating competitive excellence and global leadership in the heart of Sierra Leone. 
              Join the vanguard of 21st-century education.
            </p>
          </div>
          
          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Navigation</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-amber-400 text-sm transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Contact</h3>
            <address className="not-italic text-slate-300 text-sm space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-amber-500">📍</span>
                <span>Freetown, Sierra Leone</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-500">📞</span>
                <span>(+232) 76 XXX XXX</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-amber-500">📧</span>
                <span>admissions@hammond.edu.sl</span>
              </div>
            </address>
          </div>

          {/* Column 4: Social Presence */}
          <div>
             <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-amber-500">Connect</h3>
             <p className="text-xs text-slate-500 mb-4 italic">Follow our student achievements:</p>
             <div className="flex space-x-4">
                {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                  <a 
                    key={social}
                    href="#" 
                    aria-label={social} 
                    className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:border-amber-500 hover:text-amber-500 transition-all duration-300"
                  >
                    <span className="text-lg">
                      {social === 'Facebook' && 'fb'}
                      {social === 'Twitter' && 'tw'}
                      {social === 'Instagram' && 'ig'}
                      {social === 'LinkedIn' && 'in'}
                    </span> 
                  </a>
                ))}
             </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-500">
            &copy; {currentYear} Hammond International Preparatory & Academy. 
            <span className="block md:inline md:ml-2 italic text-slate-600">Built for Excellence.</span>
          </div>
          <ul className="flex space-x-6 text-xs text-slate-500">
             {legalLinks.map((link) => (
                <li key={link.name}>
                    <Link href={link.href} className="hover:text-amber-400 transition-colors">
                        {link.name}
                    </Link>
                </li>
             ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}