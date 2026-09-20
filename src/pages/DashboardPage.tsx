import {
  Boxes,
  AlertTriangle,
  Wrench,
  Recycle,
  Image as ImageIcon,
  ScanSearch,
  Gauge,
  Lightbulb,
  ChevronRight,
  type LucideIcon,
} from 'lucide-react';
import { Card, SectionTitle } from '../components/ui';
import { SUMMARY_CARDS, PIPELINE_STEPS } from '../data';

const CARD_ICONS: Record<string, LucideIcon> = {
  Boxes,
  AlertTriangle,
  Wrench,
  Recycle,
};

const STEP_ICONS: Record<string, LucideIcon> = {
  Image: ImageIcon,
  ScanSearch,
  Gauge,
  Recycle,
  Lightbulb,
};

const ACCENTS: Record<string, { text: string; bg: string; ring: string }> = {
  blue: { text: 'text-sky-400', bg: 'bg-sky-500/15', ring: 'ring-sky-500/20' },
  amber: { text: 'text-amber-400', bg: 'bg-amber-500/15', ring: 'ring-amber-500/20' },
  orange: { text: 'text-orange-400', bg: 'bg-orange-500/15', ring: 'ring-orange-500/20' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/15', ring: 'ring-emerald-500/20' },
};

export function DashboardPage({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Industrial Asset Intelligence
        </h1>
        <p className="mt-1 text-sm text-slate-400">
          AI-powered condition assessment and circular decision support
        </p>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {SUMMARY_CARDS.map((card, i) => {
          const Icon = CARD_ICONS[card.icon] ?? Boxes;
          const a = ACCENTS[card.accent];
          return (
            <Card key={card.label} className="animate-fade-in p-5" >
              <div style={{ animationDelay: `${i * 60}ms` }} className="flex items-center justify-between">
                <div>
                  <div className={`text-3xl font-bold ${a.text}`}>{card.value}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-slate-400">
                    {card.label}
                  </div>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${a.bg} ring-1 ${a.ring}`}>
                  <Icon className={`h-6 w-6 ${a.text}`} />
                </div>
              </div>
              <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full ${
                    card.accent === 'blue' ? 'bg-sky-400' : card.accent === 'amber' ? 'bg-amber-400' : card.accent === 'orange' ? 'bg-orange-400' : 'bg-emerald-400'
                  }`}
                  style={{ width: `${30 + card.value * 4}%` }}
                />
              </div>
            </Card>
          );
        })}
      </div>

      {/* Pipeline visualization */}
      <Card className="animate-fade-in p-6">
        <SectionTitle
          icon={<ScanSearch className="h-5 w-5" />}
          title="Processing Pipeline"
          subtitle="End-to-end flow from image input to circular recommendation"
        />
        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {PIPELINE_STEPS.map((step, i) => {
            const Icon = STEP_ICONS[step.icon] ?? ImageIcon;
            return (
              <div key={step.label} className="flex flex-1 items-center gap-3 lg:flex-col">
                <div className="flex w-full flex-1 flex-col items-center rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-5 text-center transition-all duration-200 hover:border-sky-500/40 hover:bg-slate-900/80">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-2.5 text-xs font-semibold text-slate-200">{step.label}</div>
                </div>
                {i < PIPELINE_STEPS.length - 1 && (
                  <ChevronRight className="h-5 w-5 shrink-0 rotate-90 text-slate-600 lg:rotate-0" />
                )}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Project description + quick action */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="animate-fade-in p-6 lg:col-span-2">
          <SectionTitle
            icon={<Lightbulb className="h-5 w-5" />}
            title="Project Overview"
          />
          <p className="text-sm leading-relaxed text-slate-300">
            ReNewX AI integrates computer vision-based defect detection, asset condition
            assessment, and 5R circular decision support to help extend industrial asset life
            and reduce unnecessary waste.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Computer Vision', 'Deep Learning', 'YOLO', 'Circular Economy', '5R Strategy'].map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-700 bg-slate-800/50 px-3 py-1 text-[11px] font-medium text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Card>

        <Card className="animate-fade-in flex flex-col justify-between p-6">
          <div>
            <h3 className="text-base font-semibold text-white">Run an Analysis</h3>
            <p className="mt-1 text-sm text-slate-400">
              Upload an asset image to walk through the full demo pipeline.
            </p>
          </div>
          <button
            onClick={() => onNavigate('analysis')}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:shadow-lg hover:shadow-sky-500/25"
          >
            Start Asset Analysis
            <ChevronRight className="h-4 w-4" />
          </button>
        </Card>
      </div>
    </div>
  );
}
