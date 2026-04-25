import { capabilitiesData } from '@/data/mockData';

const iconPaths: Record<string, string> = {
  terminal: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  database: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  cloud: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z',
};

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="min-h-screen pt-24 pb-20 px-6 lg:pl-24 lg:pr-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-h1 text-primary tracking-tighter opacity-90">{capabilitiesData.heading}</h2>
          <p className="font-mono text-code-md text-on-surface-variant mt-2 max-w-2xl">{capabilitiesData.description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {capabilitiesData.panels.map((panel) => (
            <div key={panel.filename} className="md:col-span-4 bg-editor-bg border border-editor-border overflow-hidden">
              <div className="flex items-center justify-between px-3 py-2 bg-[#0A0A0A] border-b border-editor-border">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[10px] text-gray-500 uppercase tracking-widest">{panel.filename}</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={iconPaths[panel.icon]} />
                  </svg>
                  <h3 className="font-display text-code-md font-bold text-on-surface uppercase tracking-wider">{panel.title}</h3>
                </div>
                <ul className="space-y-2 font-mono text-xs">
                  {panel.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-on-surface-variant">
                      <span className="text-blue-400">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="text-secondary">{item.split(' ')[0]}</span>{' '}
                      {item.split(' ').slice(1).join(' ')}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div className="md:col-span-12 h-64 bg-editor-bg border border-editor-border overflow-hidden relative group">
            <div className="absolute inset-0 bg-surface-container opacity-20 transition-opacity group-hover:opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-8">
              <div className="bg-[#0A0A0A]/80 border border-editor-border p-6 backdrop-blur-md">
                <h3 className="font-display text-h2 text-primary text-center tracking-tight mb-2 uppercase">Core System Architecture</h3>
                <div className="flex justify-center gap-8 font-mono text-[10px] text-on-surface-variant">
                  <span>[ NODE_01: ACTIVE ]</span>
                  <span>[ LOAD: 14% ]</span>
                  <span>[ STATUS: OPTIMAL ]</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-12 flex flex-col md:flex-row justify-between items-center bg-primary border border-editor-border p-6 text-on-primary gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-xs uppercase font-bold text-on-primary-container">{capabilitiesData.cta.label}</span>
              <h4 className="font-display text-h2 uppercase tracking-tighter">{capabilitiesData.cta.heading}</h4>
            </div>
            <a
              href="#contact"
              className="bg-[#0A0A0A] text-primary px-8 py-4 font-mono font-bold text-sm transition-all hover:shadow-[0_0_15px_rgba(162,201,255,0.4)] active:scale-95 group whitespace-nowrap"
            >
              {capabilitiesData.cta.button} <span className="blinking-cursor" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
