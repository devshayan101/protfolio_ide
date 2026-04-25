import { aboutData } from '@/data/mockData';

const lineNumbers = Array.from({ length: 30 }, (_, i) =>
  String(i + 1).padStart(2, '0')
);

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen pt-24 pb-20 px-6 lg:pl-24 lg:pr-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <article className="lg:col-span-8 bg-editor-bg border border-editor-border overflow-hidden terminal-window">
            <div className="bg-[#0A0A0A] px-4 py-2 flex items-center gap-4 border-b border-editor-border">
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-mono text-xs text-on-surface">about.md</span>
            </div>
            <div className="flex">
              <div className="bg-[#0A0A0A] py-8 px-4 text-right font-mono text-xs text-gray-600 border-r border-editor-border hidden md:block">
                {lineNumbers.map((n) => (
                  <div key={n} className="mb-1">{n}</div>
                ))}
              </div>
              <div className="p-4 md:p-8 flex-1 space-y-8 md:space-y-12">
                <div>
                  <h2 className="font-display text-2xl md:text-4xl text-primary mb-4 border-b border-editor-border pb-2 flex items-center">
                    <span className="text-gray-600 mr-2 md:mr-4 font-mono text-lg md:text-xl">#</span> Background
                  </h2>
                  <p className="font-body text-body-md text-on-surface leading-relaxed">
                    Driven by the intersection of <span className="text-secondary-fixed">efficient systems</span> and{' '}
                    <span className="text-tertiary">human-centric design</span>. My journey started in the terminal,
                    building automation scripts for small workflows, which evolved into architecting scalable
                    cloud-native applications. I specialize in turning complex technical debt into clean,
                    maintainable codebases.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-4xl text-primary mb-4 border-b border-editor-border pb-2 flex items-center">
                    <span className="text-gray-600 mr-2 md:mr-4 font-mono text-lg md:text-xl">#</span> Philosophy
                  </h2>
                  <div className="bg-[#0A0A0A] p-6 border-l-4 border-primary italic font-mono text-sm text-gray-400">
                    &ldquo;{aboutData.philosophy}&rdquo;
                  </div>
                  <p className="font-body text-body-md text-on-surface leading-relaxed mt-6">
                    I believe in <span className="text-primary">Extreme Simplicity</span>. Whether it is choosing a tech stack
                    or designing a UI component, the goal is always to minimize the cognitive load for the end-user
                    and the maintaining developer.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl md:text-4xl text-primary mb-4 border-b border-editor-border pb-2 flex items-center">
                    <span className="text-gray-600 mr-2 md:mr-4 font-mono text-lg md:text-xl">#</span> Beyond the Code
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutData.hobbies.map((hobby) => (
                      <div
                        key={hobby.title}
                        className="bg-[#0A0A0A] border border-editor-border p-4 group hover:border-primary transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary font-mono text-xs uppercase">{hobby.title}</span>
                        </div>
                        <div className="w-full h-32 bg-surface-container mb-2 border border-editor-border" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-editor-bg border border-editor-border overflow-hidden terminal-window">
              <div className="bg-[#0A0A0A] px-4 py-2 border-b border-editor-border flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-gray-500">Quick_Stats.json</span>
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="p-6 space-y-6">
                {Object.entries(aboutData.quickStats).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between border-b border-editor-border pb-4 last:border-0 last:pb-0">
                    <div className="font-mono text-xs text-gray-400 uppercase">{key.replace(/([A-Z])/g, '_$1').toUpperCase()}</div>
                    <div className="font-display text-3xl text-primary-container">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-editor-bg border border-editor-border overflow-hidden terminal-window">
              <div className="aspect-video relative overflow-hidden bg-surface-container">
                <div className="absolute inset-0 bg-gradient-to-t from-editor-bg to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-xs text-primary-container">@system_admin</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-primary mb-2">Available for Ops</h3>
                <p className="font-mono text-xs text-gray-500 mb-6 leading-relaxed">{aboutData.availability}</p>
                <a
                  href="#contact"
                  className="w-full bg-primary hover:bg-primary-fixed-dim text-[#0A0A0A] font-mono text-xs py-3 transition-all duration-150 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  INIT_CONTACT
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
