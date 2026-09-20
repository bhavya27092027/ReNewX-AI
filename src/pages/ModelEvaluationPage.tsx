import {
  BarChart3,
  Target,
  TrendingUp,
  Grid3x3,
  Image as ImageIcon,
  Gauge,
} from 'lucide-react';
import { Card, SectionTitle, DemoNote } from '../components/ui';

const YOLO_METRICS = ['Precision', 'Recall', 'F1-score', 'mAP@0.5', 'mAP@0.5:0.95'];
const COND_METRICS = ['Accuracy', 'Precision', 'Recall', 'F1-score'];

export function ModelEvaluationPage() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white">Model Evaluation</h1>
        <p className="mt-1 text-sm text-slate-400">Performance metrics and evaluation artifacts</p>
      </div>

      {/* Section A */}
      <Card className="animate-fade-in p-6">
        <SectionTitle
          icon={<Target className="h-5 w-5" />}
          title="Section A — YOLO Defect Detection Evaluation"
          subtitle="Object detection performance metrics"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {YOLO_METRICS.map((m) => (
            <div
              key={m}
              className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-4 text-center"
            >
              <div className="text-xs font-medium text-slate-400">{m}</div>
              <div className="mt-2 text-2xl font-bold text-slate-600">--</div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2.5 text-xs text-amber-300">
          <Target className="h-4 w-4" />
          Actual values will be populated after model training.
        </div>

        {/* Chart placeholders */}
        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <PlaceholderChart icon={<TrendingUp className="h-5 w-5" />} title="Training & Validation Curves" />
          <PlaceholderChart icon={<Target className="h-5 w-5" />} title="Precision-Recall Curve" />
          <PlaceholderConfusion title="Confusion Matrix" />
          <PlaceholderChart icon={<ImageIcon className="h-5 w-5" />} title="Detection Examples" />
        </div>
      </Card>

      {/* Section B */}
      <Card className="animate-fade-in p-6">
        <SectionTitle
          icon={<Gauge className="h-5 w-5" />}
          title="Section B — Condition Assessment Evaluation"
          subtitle="Classification performance metrics"
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {COND_METRICS.map((m) => (
            <div
              key={m}
              className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-4 text-center"
            >
              <div className="text-xs font-medium text-slate-400">{m}</div>
              <div className="mt-2 text-2xl font-bold text-slate-600">--</div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-sm font-semibold text-white">Confusion Matrix — Good / Moderate / Poor</h3>
          <div className="overflow-hidden rounded-xl border border-slate-800">
            <div className="grid grid-cols-4 bg-slate-900/60 text-xs font-semibold text-slate-400">
              <div className="border-b border-r border-slate-800 px-3 py-2.5" />
              <div className="border-b border-r border-slate-800 px-3 py-2.5 text-center">Good</div>
              <div className="border-b border-r border-slate-800 px-3 py-2.5 text-center">Moderate</div>
              <div className="border-b border-slate-800 px-3 py-2.5 text-center">Poor</div>
            </div>
            {['Good', 'Moderate', 'Poor'].map((row) => (
              <div key={row} className="grid grid-cols-4 text-xs">
                <div className="border-b border-r border-slate-800 bg-slate-900/40 px-3 py-3 font-semibold text-slate-300">
                  {row}
                </div>
                {[0, 1, 2].map((c) => (
                  <div
                    key={c}
                    className="border-b border-r border-slate-800 px-3 py-3 text-center font-mono text-slate-600"
                  >
                    --
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-2.5 text-xs text-amber-300">
            <Grid3x3 className="h-4 w-4" />
            Awaiting trained-model evaluation.
          </div>
        </div>
      </Card>

      <DemoNote>
        No experimental results have been fabricated. All metric fields are intentionally left
        empty (--) and will be populated after the models are trained and evaluated.
      </DemoNote>
    </div>
  );
}

function PlaceholderChart({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300">
        <span className="text-sky-400">{icon}</span>
        {title}
      </div>
      <div className="grid-bg flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-950/50">
        <div className="text-center">
          <BarChart3 className="mx-auto h-8 w-8 text-slate-700" />
          <p className="mt-2 text-xs text-slate-600">Chart will appear after training</p>
        </div>
      </div>
    </div>
  );
}

function PlaceholderConfusion({ title }: { title: string }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-300">
        <span className="text-sky-400"><Grid3x3 className="h-5 w-5" /></span>
        {title}
      </div>
      <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-slate-700 bg-slate-950/50">
        <div className="text-center">
          <Grid3x3 className="mx-auto h-8 w-8 text-slate-700" />
          <p className="mt-2 text-xs text-slate-600">Confusion matrix after evaluation</p>
        </div>
      </div>
    </div>
  );
}
