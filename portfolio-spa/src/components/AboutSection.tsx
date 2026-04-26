import { aboutData } from '@/data/mockData';

const lineNumbers = Array.from({ length: 40 }, (_, i) =>
  String(i + 1).padStart(2, '0')
);

const quickStatLabels: Record<string, string> = {
  expYears: 'EXP_YEARS',
  coffeeUnits: 'COFFEE_UNITS',
  projDeployed: 'PROJ_DEPLOYED',
  commitsYtd: 'COMMITS_YTD',
};

const quickStatColors: Record<string, string> = {
  expYears: 'text-primary-container',
  coffeeUnits: 'text-tertiary',
  projDeployed: 'text-secondary-fixed',
  commitsYtd: 'text-primary',
};

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen pt-24 pb-20 px-6 lg:pl-24 lg:pr-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* System Status Header */}
        <div className="bg-editor-bg border border-editor-border overflow-hidden terminal-window">
          <div className="bg-[#0A0A0A] px-4 py-2 flex items-center justify-between border-b border-editor-border">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">system_status.log</div>
            <div className="w-12" />
          </div>
          <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 font-mono">
            {Object.entries(aboutData.systemStatus).map(([key, value]) => (
              <div key={key} className="space-y-1">
                <div className="text-[10px] text-gray-500 uppercase">{key.replace(/([A-Z])/g, '_$1').toUpperCase()}</div>
                <div className="text-primary-container text-sm">{value}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Editor Content */}
          <article className="lg:col-span-8 bg-editor-bg border border-editor-border overflow-hidden terminal-window">
            <div className="bg-[#0A0A0A] px-4 py-2 flex items-center gap-4 border-b border-editor-border">
              <svg className="w-4 h-4 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-mono text-xs text-on-surface">about.md</span>
            </div>
            <div className="flex">
              {/* Line Numbers */}
              <div className="bg-[#0A0A0A] py-8 px-4 text-right font-mono text-xs text-gray-600 border-r border-editor-border hidden md:block leading-6">
                {lineNumbers.map((n) => (
                  <div key={n} className="h-6">{n}</div>
                ))}
              </div>
              {/* Content */}
              <div className="p-4 md:p-8 flex-1 space-y-12">
                {/* Background */}
                <div>
                  <h2 className="font-display text-2xl md:text-4xl text-primary-container mb-4 border-b border-editor-border pb-2 flex items-center">
                    <span className="text-gray-600 mr-2 md:mr-4 font-mono text-lg md:text-xl">#</span> Background
                  </h2>
                  <p className="font-body text-body-md text-on-surface leading-relaxed">
                    {aboutData.background}
                  </p>
                </div>

                {/* Modular Blocks */}
                <div className="space-y-6">
                  {/* Philosophy */}
                  <div className="bg-background border border-editor-border p-6 group hover:border-primary-container transition-all relative">
                    <div className="absolute top-2 right-4 font-mono text-[10px] text-gray-600 uppercase tracking-widest">philosophy.tsx</div>
                    <div className="font-mono text-xs text-gray-500 mb-2">// 01</div>
                    <h3 className="font-display text-2xl text-on-surface mb-2">Philosophy</h3>
                    <div className="font-mono text-xs text-primary-container mb-4">{aboutData.philosophy.tag}</div>
                    <p className="font-body text-body-md text-gray-400 text-sm leading-relaxed">
                      {aboutData.philosophy.body}
                    </p>
                  </div>

                  {/* Expertise */}
                  <div className="bg-background border border-editor-border p-6 group hover:border-primary-container transition-all relative">
                    <div className="absolute top-2 right-4 font-mono text-[10px] text-gray-600 uppercase tracking-widest">expertise.tsx</div>
                    <div className="font-mono text-xs text-gray-500 mb-2">// 02</div>
                    <h3 className="font-display text-2xl text-on-surface mb-2">Expertise</h3>
                    <div className="font-mono text-xs text-secondary-fixed mb-4">{aboutData.expertise.tag}</div>
                    <p className="font-body text-body-md text-gray-400 text-sm leading-relaxed">
                      {aboutData.expertise.body}
                    </p>
                  </div>

                  {/* Approach */}
                  <div className="bg-background border border-editor-border p-6 group hover:border-primary-container transition-all relative">
                    <div className="absolute top-2 right-4 font-mono text-[10px] text-gray-600 uppercase tracking-widest">approach.tsx</div>
                    <div className="font-mono text-xs text-gray-500 mb-2">// 03</div>
                    <h3 className="font-display text-2xl text-on-surface mb-2">Approach</h3>
                    <div className="font-mono text-xs text-tertiary mb-4">{aboutData.approach.tag}</div>
                    <p className="font-body text-body-md text-gray-400 text-sm leading-relaxed">
                      {aboutData.approach.body}
                    </p>
                  </div>
                </div>

                {/* Beyond the Code */}
                <div>
                  <h2 className="font-display text-2xl md:text-4xl text-primary-container mb-4 border-b border-editor-border pb-2 flex items-center">
                    <span className="text-gray-600 mr-2 md:mr-4 font-mono text-lg md:text-xl">#</span> Beyond the Code
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutData.hobbies.map((hobby) => (
                      <div
                        key={hobby.title}
                        className="bg-background border border-editor-border p-4 group hover:border-primary-container transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          {hobby.icon === 'camera' && (
                            <svg className="w-4 h-4 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          )}
                          {hobby.icon === 'keyboard' && (
                            <svg className="w-4 h-4 text-primary-container" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v12h16V6H4zm2 2h2v2H6V8zm4 0h2v2h-2V8zm4 0h2v2h-2V8zm4 0h2v2h-2V8zM6 12h2v2H6v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM8 16h8v2H8v-2z" />
                            </svg>
                          )}
                          <span className="font-mono text-xs uppercase">{hobby.title}</span>
                        </div>
                        <img
                          src={hobby.imageSrc}
                          alt={hobby.imageAlt}
                          className="w-full h-32 object-cover mb-2 grayscale group-hover:grayscale-0 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal Echo */}
                <div className="flex items-center font-mono text-xs text-primary-container">
                  <span className="mr-2">$</span> echo &ldquo;Let&apos;s build something.&rdquo;{' '}
                  <span className="ml-2 w-2 h-4 bg-primary-container animate-blink" />
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Stats */}
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
                    <div className="font-mono text-xs text-gray-400">{quickStatLabels[key]}</div>
                    <div className={`font-display text-3xl ${quickStatColors[key]}`}>{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile / Availability */}
            <div className="bg-editor-bg border border-editor-border overflow-hidden terminal-window">
              <div className="aspect-video relative overflow-hidden bg-surface-container">
                <img
                  src={aboutData.availabilityImage}
                  alt={aboutData.availabilityImageAlt}
                  className="w-full h-full object-cover grayscale opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-editor-bg to-transparent" />
                <div className="absolute bottom-4 left-4 font-mono text-xs text-primary-container">@system_admin</div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-primary-container mb-2">Available for Ops</h3>
                <p className="font-mono text-xs text-gray-500 mb-6 leading-relaxed">{aboutData.availability}</p>
                <a
                  href="#contact"
                  className="w-full bg-primary-container hover:bg-primary text-[#0A0A0A] font-mono text-xs py-3 transition-all duration-150 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  INIT_CONTACT
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">_</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
