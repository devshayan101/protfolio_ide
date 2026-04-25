const sidebarItems = [
  { icon: 'folder', label: 'Explorer' },
  { icon: 'search', label: 'Search' },
  { icon: 'git', label: 'Git' },
  { icon: 'bug', label: 'Debug' },
];

const iconPaths: Record<string, string> = {
  folder: 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z',
  search: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  git: 'M12 2a10 10 0 00-7.75 16.32L2 22l3.68-2.25A10 10 0 1012 2zm0 0',
  bug: 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
};

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-12 bottom-8 w-16 hidden lg:flex flex-col items-center py-4 z-40 bg-[#0D1117] border-r border-[#30363D]">
      <div className="flex flex-col gap-6 items-center w-full">
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-gray-400 hover:bg-[#161B22] transition-all duration-150 cursor-pointer w-full"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={iconPaths[item.icon] || iconPaths.folder}
              />
            </svg>
            <span className="font-mono text-[10px]">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex flex-col items-center gap-6 w-full">
        <div className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-gray-400 hover:bg-[#161B22] transition-all duration-150 cursor-pointer w-full">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={iconPaths.folder}
            />
          </svg>
        </div>
        <div className="flex flex-col items-center gap-1 py-2 text-gray-600 hover:text-gray-400 hover:bg-[#161B22] transition-all duration-150 cursor-pointer w-full">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
}
