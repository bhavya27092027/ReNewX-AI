import { ShieldCheck, Activity } from 'lucide-react';

export function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-slate-800/80 bg-navy-950/80 px-6 backdrop-blur-md">
      <div className="min-w-0">
        <div className="flex items-center gap-2.5">
          <h1 className="truncate text-lg font-bold tracking-tight text-white">{title}</h1>
          <span className="hidden rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-300 sm:inline-flex">
            Prototype • Demo Mode
          </span>
        </div>
        <p className="truncate text-xs text-slate-400">{subtitle}</p>
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span className="text-xs font-medium text-slate-300">System Ready</span>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5">
          <Activity className="h-4 w-4 text-sky-400" />
          <span className="text-xs font-medium text-slate-300">Pipeline Online</span>
        </div>
      </div>
    </header>
  );
}
