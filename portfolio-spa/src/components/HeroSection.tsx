import { developerProfile, skillTags } from '@/data/mockData';

export default function HeroSection() {
  const { tagline, terminalData } = developerProfile;

  return (
    <section id="hero" className="min-h-screen grid-bg relative pt-12">
      <div className="scanline-overlay absolute inset-0 z-10 opacity-30" />
      <div className="container mx-auto px-6 lg:px-12 py-24 flex flex-col lg:flex-row items-center justify-between gap-16 relative z-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-secondary font-mono text-code-md">&lt;developer_profile&gt;</span>
          </div>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-h1 text-on-background mb-8 leading-tight">
            Full Stack <br />
            <span className="text-primary terminal-cursor">Engineer</span>
          </h1>
          <p className="font-body text-body-md sm:text-body-lg text-outline mb-12 max-w-lg">
            {tagline}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="bg-primary-container text-on-primary-container px-6 py-3 sm:px-8 sm:py-4 font-mono text-label-caps flex items-center gap-3 hover:brightness-110 active:scale-95 transition-all"
            >
              VIEW WORK
              <span className="opacity-50 animate-blink">_</span>
            </a>
            <button className="border border-outline text-on-background px-6 py-3 sm:px-8 sm:py-4 font-mono text-label-caps hover:bg-surface-variant transition-colors">
              GET_RESUME.PDF
            </button>
          </div>
        </div>

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
                  <span>{'{'}</span>
                  <br />
                  <span className="pl-4">"identity": {'{'}</span>
                  <br />
                  <span className="pl-8">"name": "{terminalData.identity.name}",</span>
                  <br />
                  <span className="pl-8">"role": "{terminalData.identity.role}",</span>
                  <br />
                  <span className="pl-8">"xp": {terminalData.identity.xp},</span>
                  <br />
                  <span className="pl-4">{'}'},</span>
                  <br />
                  <span className="pl-4">"stack": [</span>
                  <br />
                  {terminalData.stack.map((tech, i) => (
                    <span key={tech} className="pl-8 text-secondary">
                      "{tech}"{i < terminalData.stack.length - 1 ? ',' : ''}
                      <br />
                    </span>
                  ))}
                  <span className="pl-4">]</span>
                  <br />
                  <span>{'}'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 pb-24 relative z-20">
        <div className="flex flex-wrap gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {skillTags.map((tag) => (
            <span
              key={tag.label}
              className={`px-3 py-1 border border-editor-border font-mono text-xs ${tag.color}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
