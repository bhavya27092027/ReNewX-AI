import { Camera } from 'lucide-react';

export function Logo({ collapsed = false }: { collapsed?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg shadow-sky-500/20">
        <Camera className="h-5 w-5 text-slate-900" strokeWidth={2.5} />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-navy-900 bg-emerald-400" />
      </div>
      {!collapsed && (
        <div className="leading-tight">
          <div className="text-base font-bold tracking-tight text-white">
            ReNew<span className="text-gradient">X</span> AI
          </div>
          <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-slate-400">
            Asset Intelligence
          </div>
        </div>
      )}
    </div>
  );
}
