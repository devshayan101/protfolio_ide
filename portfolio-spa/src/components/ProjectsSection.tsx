import { projectsData } from '@/data/mockData';

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen pt-24 pb-20 px-6 lg:pl-24 lg:pr-8">
      <div className="max-w-[1400px] mx-auto">
        <header className="mb-12 border-l-4 border-primary pl-4 md:pl-6">
          <h2 className="font-display text-3xl sm:text-5xl lg:text-h1 text-on-background mb-2">{projectsData.heading}</h2>
          <p className="font-body text-body-md md:text-body-lg text-outline max-w-2xl">{projectsData.description}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.projects.map((project) => {
            if (project.featured) {
              return (
                <div
                  key={project.id}
                  className="md:col-span-2 lg:col-span-3 bg-editor-bg border border-editor-border flex flex-col group hover:border-primary transition-all duration-300"
                >
                  <div className="h-8 bg-editor-header border-b border-editor-border flex items-center px-4 justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-window-red" />
                      <div className="w-3 h-3 rounded-full bg-window-yellow" />
                      <div className="w-3 h-3 rounded-full bg-window-green" />
                    </div>
                    <span className="font-mono text-[10px] text-gray-500">{project.filename}</span>
                  </div>
                  <div className="flex-grow p-8 flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2 overflow-hidden border border-editor-border bg-surface-container min-h-[200px]" />
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <div className="flex items-start gap-4 mb-4">
                        <span className="font-mono text-gray-600 text-xs">{project.id}</span>
                        <h3 className="font-display text-h2 text-primary leading-none">{project.title}</h3>
                      </div>
                      <p className="font-body text-body-md text-on-surface-variant mb-6 pl-0 md:pl-8">{project.description}</p>
                      <div className="pl-0 md:pl-8">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.map((tag) => (
                            <span key={tag} className="font-mono text-xs md:text-code-md px-2 py-1 bg-[#1c242c] text-tertiary border border-editor-border">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-4">
                          <button className="bg-primary text-on-primary px-4 py-2 font-mono text-sm font-bold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                            OPEN
                          </button>
                          <button className="border border-outline text-on-background px-4 py-2 font-mono text-sm flex items-center gap-2 hover:bg-editor-bg active:scale-95 transition-all">
                            REPO
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={project.id}
                className="bg-editor-bg border border-editor-border flex flex-col group hover:border-primary transition-all duration-300"
              >
                <div className="h-8 bg-editor-header border-b border-editor-border flex items-center px-4 justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-window-red" />
                    <div className="w-3 h-3 rounded-full bg-window-yellow" />
                    <div className="w-3 h-3 rounded-full bg-window-green" />
                  </div>
                  <span className="font-mono text-[10px] text-gray-500">{project.filename}</span>
                </div>
                <div className="flex-grow p-6 flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="font-mono text-gray-600 text-xs">{project.id}</span>
                    <h3 className="font-display text-h2 text-primary leading-none">{project.title}</h3>
                  </div>
                  <p className="font-body text-body-md text-on-surface-variant mb-6 pl-0 md:pl-8 flex-grow">{project.description}</p>
                  <div className="mt-auto pl-0 md:pl-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs md:text-code-md px-2 py-1 bg-[#1c242c] text-tertiary border border-editor-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-primary text-on-primary px-4 py-2 font-mono text-sm font-bold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                        OPEN
                      </button>
                      <button className="border border-outline text-on-background px-4 py-2 font-mono text-sm flex items-center gap-2 hover:bg-editor-bg active:scale-95 transition-all">
                        REPO
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
