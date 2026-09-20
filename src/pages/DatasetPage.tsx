import { Database, Layers, FolderTree, CheckSquare, Split } from 'lucide-react';
import { Card, SectionTitle, DemoNote } from '../components/ui';

const SPLITS = [
  { label: 'Training', color: 'sky' },
  { label: 'Validation', color: 'emerald' },
  { label: 'Testing', color: 'amber' },
];

const STEPS = [
  'Image preprocessing',
  'Annotation',
  'Quality checking',
  'Train / Validation / Test separation',
];

export function DatasetPage() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white">Dataset Information</h1>
        <p className="mt-1 text-sm text-slate-400">Industrial asset defect dataset overview</p>
      </div>

      <Card className="animate-fade-in p-6">
        <SectionTitle
          icon={<Database className="h-5 w-5" />}
          title="Dataset"
          subtitle="Industrial Asset Defect Dataset"
        />
        <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
              <FolderTree className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">Industrial Asset Defect Dataset</div>
              <div className="text-xs text-slate-400">Image collection for defect detection & condition assessment</div>
            </div>
          </div>
        </div>
      </Card>

      <Card className="animate-fade-in p-6">
        <SectionTitle icon={<Split className="h-5 w-5" />} title="Dataset Split" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SPLITS.map((s) => (
            <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-5 text-center">
              <div className="text-xs font-medium uppercase tracking-wider text-slate-400">{s.label}</div>
              <div className="mt-2 text-2xl font-bold text-slate-600">[To be populated]</div>
            </div>
          ))}
          <div className="rounded-xl border border-sky-500/30 bg-sky-500/10 px-5 py-5 text-center">
            <div className="text-xs font-medium uppercase tracking-wider text-sky-300">Total</div>
            <div className="mt-2 text-2xl font-bold text-sky-400">[To be populated]</div>
          </div>
        </div>
      </Card>

      <Card className="animate-fade-in p-6">
        <SectionTitle icon={<Layers className="h-5 w-5" />} title="Preparation Workflow" />
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div key={step} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-xs font-bold text-sky-400">
                {i + 1}
              </div>
              <span className="text-sm text-slate-200">{step}</span>
            </div>
          ))}
        </div>
      </Card>

      <DemoNote>
        Dataset preparation will include image preprocessing, annotation, quality checking and
        train/validation/test separation. Counts will be populated once the dataset is curated.
      </DemoNote>
    </div>
  );
}
