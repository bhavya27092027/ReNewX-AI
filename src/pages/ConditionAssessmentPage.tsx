import {
  Gauge,
  CheckCircle2,
  AlertCircle,
  XCircle,
  TrendingUp,
} from 'lucide-react';
import { Card, SectionTitle, PrototypeBadge, DemoNote } from '../components/ui';
import { useAnalysis } from '../analysisContext';

const CONDITIONS = [
  {
    name: 'Good',
    icon: CheckCircle2,
    color: 'emerald',
    desc: 'No significant defects; asset fully operational.',
  },
  {
    name: 'Moderate',
    icon: AlertCircle,
    color: 'amber',
    desc: 'Localised defects present; repairable and manageable.',
  },
  {
    name: 'Poor',
    icon: XCircle,
    color: 'red',
    desc: 'Severe or widespread damage; recovery or disposal advised.',
  },
];

const FACTORS = [
  { label: 'Detected defect', value: 'Corrosion' },
  { label: 'Defect severity', value: 'Moderate' },
  { label: 'Number of defects', value: '2' },
  { label: 'Asset age / usage', value: 'Mid-life' },
  { label: 'Asset criticality', value: 'High' },
];

const ACCENT: Record<string, { text: string; bg: string; border: string; ring: string }> = {
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/40', ring: 'ring-emerald-500/30' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/15', border: 'border-amber-500/40', ring: 'ring-amber-500/30' },
  red: { text: 'text-red-400', bg: 'bg-red-500/15', border: 'border-red-500/40', ring: 'ring-red-500/30' },
};

export function ConditionAssessmentPage() {
  const { result } = useAnalysis();
  const current = result?.condition ?? 'Moderate';

  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white">Condition Assessment</h1>
        <p className="mt-1 text-sm text-slate-400">Asset condition classification — Good / Moderate / Poor</p>
      </div>

      {/* Condition classes */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {CONDITIONS.map((c, i) => {
          const Icon = c.icon;
          const a = ACCENT[c.color];
          const active = current === c.name;
          return (
            <Card
              key={c.name}
              className={`animate-fade-in p-5 transition-all duration-200 ${active ? `${a.bg} ring-2 ${a.ring}` : ''}`}
            >
              <div style={{ animationDelay: `${i * 80}ms` }} className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${a.bg} ${a.text}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className={`text-base font-bold ${active ? a.text : 'text-slate-200'}`}>{c.name}</div>
                  {active && <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Current</div>}
                </div>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-400">{c.desc}</p>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
        {/* Factors */}
        <Card className="animate-fade-in p-6 lg:col-span-3">
          <SectionTitle
            icon={<TrendingUp className="h-5 w-5" />}
            title="Assessment Factors"
            subtitle="Inputs considered for condition classification"
          />
          <div className="space-y-2">
            {FACTORS.map((f) => (
              <div
                key={f.label}
                className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3"
              >
                <span className="text-sm text-slate-400">{f.label}</span>
                <span className="text-sm font-semibold text-slate-200">{f.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Assessment result */}
        <Card className="animate-fade-in flex flex-col p-6 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <SectionTitle icon={<Gauge className="h-5 w-5" />} title="Condition Assessment" />
            <PrototypeBadge text="Prototype" />
          </div>

          <div className="flex flex-1 flex-col items-center justify-center rounded-xl border border-amber-500/30 bg-amber-500/10 py-8">
            <Gauge className="h-10 w-10 text-amber-400" />
            <div className="mt-3 text-3xl font-bold text-amber-300">{current}</div>
            <div className="mt-1 text-xs text-slate-400">Assessed condition</div>
          </div>

          {/* Visual score indicator */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs">
              <span className="text-slate-400">Condition score</span>
              <span className="font-mono text-amber-300">58 / 100</span>
            </div>
            <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500"
                style={{ width: '58%' }}
              />
            </div>
            <div className="mt-1.5 flex justify-between text-[10px] text-slate-500">
              <span>Good</span>
              <span>Moderate</span>
              <span>Poor</span>
            </div>
          </div>
          <p className="mt-3 text-center text-[11px] text-slate-500">Prototype assessment visualization</p>
        </Card>
      </div>

      <DemoNote>
        The final implementation will use the trained condition-assessment model and the detected
        defect information to classify asset condition via{' '}
        <span className="font-mono text-sky-300">POST /api/condition</span>.
      </DemoNote>
    </div>
  );
}
