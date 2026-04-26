import { useState } from 'react';
import { navLinks } from '@/data/mockData';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#30363D]">
        <div className="flex items-center justify-between w-full px-4 md:px-6 h-12 md:h-14">
          <a href="#hero" className="flex items-center gap-1.5 font-mono text-sm md:text-base group">
            <span className="text-gray-500">$</span>
            <span className="text-primary">md.shayan</span>
            <span className="text-gray-500">@</span>
            <span className="text-on-surface-variant">dev</span>
            <span className="text-gray-500">:</span>
            <span className="text-secondary">~</span>
            <span className="text-gray-500">$</span>
            <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-blink" />
          </a>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <div key={link.href} className="relative nav-link-wrapper">
                    <a href={link.href} className={`relative flex items-center gap-1.5 px-3 py-2 font-mono text-sm tracking-wide transition-colors duration-200 ${isActive ? 'text-primary' : 'text-gray-500 hover:text-primary'}`}>
                      <span className="text-gray-600 opacity-50">./</span>
                      <span>{link.label}</span>
                    </a>
                    {isActive && <span className="absolute -bottom-0.5 left-3 right-3 h-px bg-primary origin-left" />}
                  </div>
                );
              })}
            </div>

            <div className="hidden md:flex items-center gap-2 bg-[#0D1117] border border-[#30363D] px-3 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-wider">Available for Work</span>
            </div>

            <button className="md:hidden relative z-50 p-2 -mr-2 font-mono text-gray-400 hover:text-primary transition-colors duration-200" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className={`font-mono text-2xl tracking-wide transition-colors ${isActive ? 'text-primary' : 'text-gray-400 hover:text-primary'}`}>
                <span className="text-gray-600 opacity-50 mr-2">./</span>
                {link.label}
              </a>
            );
          })}
          <div className="flex items-center gap-2 bg-[#0D1117] border border-[#30363D] px-4 py-2 mt-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs text-emerald-500 uppercase tracking-wider">Available for Work</span>
          </div>
        </div>
      )}
    </>
  );
}
