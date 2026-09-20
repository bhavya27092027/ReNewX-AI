import {
  ArrowDownCircle,
  Repeat,
  Wrench,
  Shuffle,
  Recycle,
  Lightbulb,
  Cpu,
  type LucideIcon,
} from 'lucide-react';
import { Card, SectionTitle, PrototypeBadge, DemoNote } from '../components/ui';
import { FIVE_R } from '../data';
import { useAnalysis } from '../analysisContext';

const ICONS: Record<string, LucideIcon> = {
  ArrowDownCircle,
  Repeat,
  Wrench,
  Shuffle,
  Recycle,
};

const ACCENT: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  sky: { text: 'text-sky-400', bg: 'bg-sky-500/15', border: 'border-sky-500/40', glow: 'shadow-sky-500/20' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/40', glow: 'shadow-emerald-500/20' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/15', border: 'border-amber-500/40', glow: 'shadow-amber-500/20' },
  violet: { text: 'text-violet-400', bg: 'bg-violet-500/15', border: 'border-violet-500/40', glow: 'shadow-violet-500/20' },
  cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500/15', border: 'border-cyan-500/40', glow: 'shadow-cyan-500/20' },
};

const DECISION_FACTORS = [
  'Condition',
  'Repair feasibility',
  'Remaining useful life',
  'Operational criticality',
  'Economic value',
  'Environmental impact',
];

export function DecisionEnginePage() {
  const { result } = useAnalysis();
  const recommended = result?.recommendedAction ?? 'Repair';
  const condition = result?.condition ?? 'Moderate';
  const basis = result?.decisionBasis ?? 'Localized repairable defect with feasible restoration.';

  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white">5R Decision Engine</h1>
        <p className="mt-1 text-sm text-slate-400">Circular economy decision support — Reduce, Reuse, Repair, Repurpose, Recycle</p>
      </div>

      {/* Five cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {FIVE_R.map((r, i) => {
          const Icon = ICONS[r.icon] ?? Recycle;
          const a = ACCENT[r.accent];
          const active = recommended.toLowerCase() === r.title.toLowerCase();
          return (
            <Card
              key={r.id}
              className={`animate-fade-in p-5 transition-all duration-200 ${
                active ? `${a.bg} ring-2 ring-offset-2 ring-offset-navy-850 ${ACCENT[r.accent].border.replace('border', 'ring')}` : ''
              }`}
            >
              <div style={{ animationDelay: `${i * 70}ms` }}>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.bg} ${a.text} ${active ? `shadow-lg ${a.glow}` : ''}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={`mt-3 text-lg font-bold ${active ? a.text : 'text-white'}`}>{r.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">{r.description}</p>
                {active && (
                  <div className={`mt-3 inline-flex items-center gap-1 rounded-full border ${a.border} px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${a.text}`}>
                    <Lightbulb className="h-3 w-3" /> Recommended
                  </div>
                )}
              </div>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Decision output */}
        <Card className="animate-fade-in overflow-hidden p-0 lg:col-span-3">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/40 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <Cpu className="h-5 w-5 text-sky-400" />
              <h2 className="text-base font-semibold text-white">Decision Engine Output</h2>
            </div>
            <PrototypeBadge />
          </div>
          <div className="grid grid-cols-1 gap-px bg-slate-800/60 sm:grid-cols-2">
            <div className="bg-navy-850 px-6 py-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Condition</div>
              <div className="mt-1 text-lg font-bold text-amber-300">{condition}</div>
            </div>
            <div className="bg-navy-850 px-6 py-4">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Recommended Action</div>
              <div className="mt-1 text-lg font-bold text-orange-300">{recommended.toUpperCase()}</div>
            </div>
            <div className="bg-navy-850 px-6 py-4 sm:col-span-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Decision Basis</div>
              <p className="mt-1 text-sm text-slate-200">{basis}</p>
            </div>
          </div>
          <div className="border-t border-slate-800 bg-slate-900/30 px-6 py-3">
            <p className="text-[11px] text-slate-500">Prototype demonstration output only.</p>
          </div>
        </Card>

        {/* Decision factors */}
        <Card className="animate-fade-in p-6 lg:col-span-2">
          <SectionTitle icon={<Cpu className="h-5 w-5" />} title="Decision Factors" />
          <ul className="space-y-2">
            {DECISION_FACTORS.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-2.5"
              >
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span className="text-sm text-slate-200">{f}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      <DemoNote>
        The 5R decision logic shown here is rule-based demonstration output. In the implementation
        phase it will be served via <span className="font-mono text-sky-300">POST /api/recommend</span>{' '}
        using condition, feasibility, and lifecycle inputs.
      </DemoNote>
    </div>
  );
}
