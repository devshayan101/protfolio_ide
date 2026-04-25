import { contactData } from '@/data/mockData';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen pt-24 pb-20 px-6 lg:pl-24 lg:pr-8 relative">
      <div className="absolute inset-0 grid-bg opacity-[0.03] pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8 md:mb-16 border-l-4 border-primary pl-4 md:pl-6">
          <p className="font-mono text-primary text-sm mb-2">{contactData.subheading}</p>
          <h2 className="font-display text-2xl sm:text-4xl lg:text-h1 uppercase leading-none break-words">
            {contactData.heading} <span className="text-primary">PROJECT</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-editor-bg border border-editor-border terminal-shadow overflow-hidden">
            <div className="bg-[#21262D] border-b border-editor-border px-4 py-2 flex items-center justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-window-red" />
                <div className="w-3 h-3 rounded-full bg-window-yellow" />
                <div className="w-3 h-3 rounded-full bg-window-green" />
              </div>
              <div className="font-mono text-xs text-gray-400">contact.py — project_root</div>
              <div className="w-12" />
            </div>
            <div className="p-4 md:p-6 font-mono text-sm md:text-base flex">
              <div className="hidden md:block text-gray-600 text-right pr-4 select-none border-r border-editor-border mr-6">
                01<br />02<br />03<br />04<br />05<br />06<br />07<br />08<br />09<br />10<br />11<br />12<br />13
              </div>
              <div className="flex-grow space-y-6">
                <div>
                  <span className="text-emerald-500">def</span>{' '}
                  <span className="text-primary">send_message</span>(identity, query):
                </div>
                <div className="pl-4">
                  <label className="block text-tertiary mb-1">&quot;{contactData.form.aliasLabel}&quot;</label>
                  <div className="flex items-center text-on-surface">
                    <span className="mr-2 text-gray-500">$</span>
                    <input
                      className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-gray-700 outline-none"
                      placeholder="user_name..."
                      type="text"
                    />
                  </div>
                </div>
                <div className="pl-4">
                  <label className="block text-tertiary mb-1">&quot;{contactData.form.emailLabel}&quot;</label>
                  <div className="flex items-center text-on-surface">
                    <span className="mr-2 text-gray-500">$</span>
                    <input
                      className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-gray-700 outline-none"
                      placeholder="admin@domain.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="pl-4">
                  <label className="block text-tertiary mb-1">&quot;{contactData.form.messageLabel}&quot;</label>
                  <div className="flex items-start text-on-surface">
                    <span className="mr-2 mt-1 text-gray-500">&gt;</span>
                    <textarea
                      className="bg-transparent border-none focus:ring-0 w-full p-0 text-on-surface placeholder:text-gray-700 resize-none outline-none"
                      placeholder="System payload details..."
                      rows={4}
                    />
                  </div>
                </div>
                <div className="pl-4">
                  <button className="bg-primary text-on-primary px-6 py-2 font-bold flex items-center group transition-transform active:scale-95">
                    <span>{contactData.form.submitLabel}</span>
                    <span className="ml-2 blinking-cursor" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div className="bg-editor-bg border border-editor-border p-6">
              <h3 className="font-mono text-primary text-xs uppercase mb-4 tracking-widest">Global_Status</h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-editor-border pb-2">
                  <span className="text-gray-500 text-xs">AVAILABILITY</span>
                  <span className="text-secondary text-xs">{contactData.status.availability}</span>
                </div>
                <div className="flex justify-between border-b border-editor-border pb-2">
                  <span className="text-gray-500 text-xs">TIMEZONE</span>
                  <span className="text-on-surface text-xs">{contactData.status.timezone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-xs">RESPONSE_TIME</span>
                  <span className="text-on-surface text-xs">{contactData.status.responseTime}</span>
                </div>
              </div>
            </div>

            <div className="bg-editor-bg border border-editor-border p-6 relative group">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-mono text-primary text-xs uppercase mb-4 tracking-widest">Social_Gateways</h3>
              <div className="flex flex-col space-y-4">
                {contactData.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex items-center space-x-3 text-gray-400 hover:text-primary transition-colors group"
                  >
                    <span className="font-mono text-sm underline decoration-gray-700 group-hover:decoration-primary">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="aspect-square bg-[#0A0A0A] border border-editor-border relative overflow-hidden hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-t from-editor-bg to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-mono text-[10px] text-primary">ENCRYPTED_SIGNAL_STREAM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
