import { footerData } from '@/data/mockData';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 w-full h-8 flex justify-between items-center px-6 z-50 bg-[#0A0A0A] border-t border-[#30363D] font-mono text-[10px] uppercase tracking-widest">
      <div className="flex gap-4 items-center">
        <span className="text-emerald-500">{footerData.copyright}</span>
        <span className="hidden md:inline text-gray-600 hover:text-emerald-400 transition-colors cursor-help">
          Uptime: {footerData.uptime}
        </span>
      </div>
      <div className="flex gap-4">
        <span className="hidden md:inline text-gray-600 hover:text-emerald-400 transition-colors cursor-help">
          Branch: {footerData.branch}
        </span>
        <span className="hidden md:inline text-gray-600 hover:text-emerald-400 transition-colors cursor-help">
          Latency: {footerData.latency}
        </span>
        <div className="flex items-center gap-2 text-emerald-500">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          {footerData.status}
        </div>
      </div>
    </footer>
  );
}
