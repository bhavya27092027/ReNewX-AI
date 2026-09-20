import {
  LayoutDashboard,
  ScanSearch,
  Crosshair,
  Gauge,
  Recycle,
  BarChart3,
  Database,
  Workflow,
  Info,
  FlaskConical,
  type LucideIcon,
} from 'lucide-react';
import { NAV_ITEMS } from '../data';
import { Logo } from './Logo';

const ICONS: Record<string, LucideIcon> = {
  LayoutDashboard,
  ScanSearch,
  Crosshair,
  Gauge,
  Recycle,
  BarChart3,
  Database,
  Workflow,
  Info,
};

interface SidebarProps {
  current: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ current, onNavigate }: SidebarProps) {
  return (
    <aside className="flex h-screen w-64 shrink-0 flex-col border-r border-slate-800/80 bg-navy-900">
      <div className="flex h-16 items-center border-b border-slate-800/80 px-5">
        <Logo />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          Navigation
        </div>
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const Icon = ICONS[item.icon] ?? LayoutDashboard;
            const active = current === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                    active
                      ? 'bg-gradient-to-r from-sky-500/20 to-cyan-400/5 text-sky-300 shadow-sm'
                      : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                  }`}
                >
                  <Icon
                    className={`h-[18px] w-[18px] transition-transform duration-200 ${
                      active ? 'text-sky-400' : 'text-slate-500 group-hover:text-slate-300'
                    }`}
                  />
                  <span>{item.label}</span>
                  {active && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400/50" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="border-t border-slate-800/80 p-4">
        <div className="flex items-center gap-2.5 rounded-lg bg-slate-800/40 px-3 py-2.5">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-amber-500/15">
            <FlaskConical className="h-4 w-4 text-amber-400" />
          </div>
          <div className="leading-tight">
            <div className="text-xs font-semibold text-amber-300">Prototype Mode</div>
            <div className="text-[10px] text-slate-500">Demo — no live ML</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
