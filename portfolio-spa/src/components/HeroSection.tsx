import { developerProfile, skillTags, heroMeta } from '@/data/mockData';

const lineNumbers = Array.from({ length: 50 }, (_, i) => String(i + 1).padStart(2, '0'));

export default function HeroSection() {
  const { tagline, terminalData } = developerProfile;

  return (
    <section id="hero" className="min-h-screen grid-bg relative pt-12 md:pt-14 overflow-hidden">
      <div className="scanline-overlay absolute inset-0 z-10 opacity-30 pointer-events-none" />

      {/* Full-height line numbers */}
      <div className="absolute left-0 top-12 md:top-14 bottom-0 w-12 md:w-16 hidden sm:flex flex-col items-end pt-24 pr-3 md:pr-4 border-r border-[#30363D]/30 pointer-events-none z-10">
        {lineNumbers.map((n) => (
          <span key={n} className="block text-[10px] md:text-xs font-mono text-gray-700 h-6 leading-6">
            {n}
          </span>
        ))}
      </div>

      <div className="relative z-20 flex flex-col min-h-screen">
        <div className="container mx-auto px-6 sm:pl-16 md:pl-20 lg:pl-24 py-12 md:py-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 flex-grow">
          {/* Left content */}
          <div className="max-w-2xl w-full">
            {/* Available for Work badge */}
            <div className="inline-flex items-center gap-2 bg-[#0D1117] border border-[#30363D] px-3 py-1.5 mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] md:text-xs text-emerald-500 uppercase tracking-wider">
                Available for Work
              </span>
            </div>

            {/* Terminal prompt + Heading */}
            <div className="flex items-center gap-2 mb-2 md:mb-4">
              <span className="font-mono text-sm md:text-base text-gray-500">➜</span>
              <span className="font-mono text-sm md:text-base text-secondary">~</span>
              <span className="font-mono text-sm md:text-base text-primary">whoami</span>
            </div>

            <div className="mb-4 md:mb-6">
              <div className="overflow-hidden">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-h1 text-on-background leading-tight animate-reveal-up" style={{ animationDelay: '0.1s' }}>
                  Full Stack
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="font-display text-4xl sm:text-6xl lg:text-h1 text-primary leading-tight animate-reveal-up terminal-cursor" style={{ animationDelay: '0.2s' }}>
                  Engineer
                </h1>
              </div>
            </div>

            {/* Description with $ prompt */}
            <div className="flex items-start gap-2 mb-8 md:mb-10">
              <span className="font-mono text-sm text-gray-500 mt-1">$</span>
              <p className="font-body text-body-md sm:text-body-lg text-outline max-w-lg">
                {tagline}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="bg-primary-container text-on-primary-container px-6 py-3 sm:px-8 sm:py-4 font-mono text-label-caps flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all"
              >
                View Work
                <span className="opacity-50 animate-blink">_</span>
              </a>
              <a
                href="#contact"
                className="border border-outline text-on-background px-6 py-3 sm:px-8 sm:py-4 font-mono text-sm flex items-center gap-2 hover:bg-surface-variant transition-colors"
              >
                <span className="text-primary">$</span>
                Start a Project
              </a>
            </div>
          </div>

          {/* Right: Terminal Window */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-lg bg-editor-bg border border-editor-border overflow-hidden terminal-window">
              <div className="bg-editor-header px-4 py-2 flex items-center justify-between border-b border-editor-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-window-red" />
                  <div className="w-3 h-3 rounded-full bg-window-yellow" />
                  <div className="w-3 h-3 rounded-full bg-window-green" />
                </div>
                <div className="text-gray-500 font-mono text-[10px]">dev_data.json</div>
                <div className="w-12" />
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-x-auto">
                <div className="flex gap-4">
                  <div className="text-gray-600 select-none text-right w-6">
                    01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10<br />11<br />12
                  </div>
                  <div className="text-tertiary">
                    <span>{'{'}</span><br />
                    <span className="pl-4">"identity": {'{'}</span><br />
                    <span className="pl-8">"name": "{terminalData.identity.name}",</span><br />
                    <span className="pl-8">"role": "{terminalData.identity.role}",</span><br />
                    <span className="pl-8">"xp": {terminalData.identity.xp},</span><br />
                    <span className="pl-4">{'}'},</span><br />
                    <span className="pl-4">"stack": [</span><br />
                    {terminalData.stack.map((tech, i) => (
                      <span key={tech} className="pl-8 text-secondary">
                        "{tech}"{i < terminalData.stack.length - 1 ? ',' : ''}<br />
                      </span>
                    ))}
                    <span className="pl-4">]</span><br />
                    <span>{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area: Scroll CTA + Skill tags + Meta */}
        <div className="container mx-auto px-6 sm:pl-16 md:pl-20 lg:pl-24 pb-8 md:pb-12">
          {/* Skill tags */}
          <div className="flex flex-wrap gap-3 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 mb-8 md:mb-12">
            {skillTags.map((tag) => (
              <span key={tag.label} className={`px-3 py-1 border border-editor-border font-mono text-xs ${tag.color}`}>
                {tag.label}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            {/* Scroll to explore */}
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-primary transition-colors group"
            >
              <span className="font-mono text-xs uppercase tracking-wider">Scroll to explore</span>
              <svg
                className="w-5 h-5 animate-bounce-down"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            {/* Meta info */}
            <div className="flex flex-wrap gap-4 md:gap-6 font-mono text-[10px] md:text-xs text-gray-500 uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">Location</span>
                <span className="text-on-surface-variant">{heroMeta.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-gray-600">Timezone</span>
                <span className="text-on-surface-variant">{heroMeta.timezone}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary">{heroMeta.version}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
