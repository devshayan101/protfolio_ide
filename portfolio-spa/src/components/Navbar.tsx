import { useState } from 'react';
import { navLinks } from '@/data/mockData';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] border-b border-[#30363D]">
      <div className="flex items-center justify-between w-full px-4 h-12">
        <div className="flex items-center gap-6">
          <span className="text-blue-400 font-bold font-mono text-sm tracking-tight whitespace-nowrap">
            root@portfolio:~$
          </span>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`font-mono text-sm tracking-tight transition-colors pb-1 ${isActive
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-[#161B22]'
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-gray-400 hover:text-white p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden sm:flex items-center gap-4">
            <svg
              className="w-5 h-5 text-gray-500 hover:text-gray-300 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <svg
              className="w-5 h-5 text-gray-500 hover:text-gray-300 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-[#30363D] px-4 py-3 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block font-mono text-sm tracking-tight px-3 py-2 transition-colors ${isActive
                    ? 'text-blue-400 bg-[#161B22] border-l-2 border-blue-400'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-[#161B22]'
                  }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}
