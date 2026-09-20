import {
  Info,
  Tag,
  Layers,
  Globe,
  Recycle,
  Rocket,
  Camera,
} from 'lucide-react';
import { Card, SectionTitle } from '../components/ui';
import { Logo } from '../components/Logo';

const RESEARCH = [
  'Computer Vision',
  'Deep Learning',
  'Industrial Inspection',
  'Asset Condition Assessment',
  'Circular Economy',
  'Decision Support',
];

const FIVE_R = ['Reduce', 'Reuse', 'Repair', 'Repurpose', 'Recycle'];

const FUTURE = [
  'Train YOLO defect detector',
  'Evaluate detection performance',
  'Train condition-assessment model',
  'Implement 5R decision engine',
  'Integrate trained models',
  'Perform end-to-end evaluation',
];

export function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white">About Project</h1>
        <p className="mt-1 text-sm text-slate-400">Project overview, scope, and roadmap</p>
      </div>

      {/* Hero */}
      <Card className="animate-fade-in overflow-hidden p-0">
        <div className="relative grid-bg border-b border-slate-800 px-6 py-8">
          <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-400 shadow-lg shadow-sky-500/25">
              <Camera className="h-8 w-8 text-slate-900" strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-white">ReNew<span className="text-gradient">X</span> AI</h2>
                <Logo collapsed />
              </div>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-300">
                An AI-Driven Framework for Industrial Asset Condition Assessment and 5R Decision
                Support in a Circular Economy
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-slate-800/60 sm:grid-cols-2">
          <Field icon={<Tag className="h-4 w-4 text-sky-400" />} label="Project" value="ReNewX AI" />
          <Field icon={<Globe className="h-4 w-4 text-cyan-400" />} label="Domain" value="Artificial Intelligence & Deep Learning" />
        </div>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* Research areas */}
        <Card className="animate-fade-in p-6">
          <SectionTitle icon={<Layers className="h-5 w-5" />} title="Research Areas" />
          <div className="flex flex-wrap gap-2">
            {RESEARCH.map((r) => (
              <span
                key={r}
                className="rounded-lg border border-slate-700 bg-slate-800/50 px-3 py-2 text-xs font-medium text-slate-200"
              >
                {r}
              </span>
            ))}
          </div>
        </Card>

        {/* 5R */}
        <Card className="animate-fade-in p-6">
          <SectionTitle icon={<Recycle className="h-5 w-5" />} title="5R Circular Strategy" />
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {FIVE_R.map((r, i) => (
              <div
                key={r}
                className="flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-500/15 text-xs font-bold text-emerald-400">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-slate-200">{r}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Future implementation */}
      <Card className="animate-fade-in p-6">
        <SectionTitle
          icon={<Rocket className="h-5 w-5" />}
          title="Future Implementation"
          subtitle="Roadmap for the full implementation phase"
        />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {FUTURE.map((step, i) => (
            <div
              key={step}
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3.5"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sm font-bold text-sky-400">
                {i + 1}
              </div>
              <span className="text-sm text-slate-200">{step}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="animate-fade-in p-6">
        <SectionTitle icon={<Info className="h-5 w-5" />} title="Prototype Notice" />
        <p className="text-sm leading-relaxed text-slate-400">
          This application is a frontend prototype demonstrating the intended workflow and user
          interface of the ReNewX AI framework. Detection, condition assessment, and decision
          outputs shown here are illustrative demonstration data — not the results of trained
          models. All metrics will be populated after model training and evaluation in the
          implementation phase.
        </p>
      </Card>
    </div>
  );
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-navy-850 px-6 py-4">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {icon} {label}
      </div>
      <div className="mt-1.5 text-base font-semibold text-white">{value}</div>
    </div>
  );
}
