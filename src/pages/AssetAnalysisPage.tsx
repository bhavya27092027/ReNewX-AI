import { useCallback, useRef, useState } from 'react';
import {
  UploadCloud,
  X,
  ScanSearch,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  Gauge,
  Wrench,
  FileText,
} from 'lucide-react';
import { Card, SectionTitle, PrototypeBadge, DemoNote } from '../components/ui';
import { DEMO_PREPROCESSING_STEPS, DEMO_ANALYSIS } from '../data';
import { useAnalysis } from '../analysisContext';

export function AssetAnalysisPage({ onNavigate }: { onNavigate: (id: string) => void }) {
  const { image, setImage, result, setResult } = useAnalysis();
  const [dragOver, setDragOver] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<number | null>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.startsWith('image/')) return;
      const reader = new FileReader();
      reader.onload = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
      setResult(null);
    },
    [setImage, setResult]
  );

  const onDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const onPick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const removeImage = () => {
    setImage(null);
    setResult(null);
    if (timerRef.current) window.clearInterval(timerRef.current);
  };

  const runAnalysis = () => {
    if (!image) return;
    setAnalyzing(true);
    setStepIdx(0);
    setResult(null);
    let idx = 0;
    timerRef.current = window.setInterval(() => {
      idx += 1;
      if (idx >= DEMO_PREPROCESSING_STEPS.length) {
        if (timerRef.current) window.clearInterval(timerRef.current);
        return;
      }
      setStepIdx(idx);
    }, 750);

    window.setTimeout(() => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      setAnalyzing(false);
      setResult(DEMO_ANALYSIS);
    }, DEMO_PREPROCESSING_STEPS.length * 750 + 300);
  };

  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white">Asset Analysis</h1>
        <p className="mt-1 text-sm text-slate-400">Upload an industrial asset image to run the demo pipeline</p>
      </div>

      {/* Upload area */}
      <Card className="animate-fade-in p-6">
        <SectionTitle
          icon={<UploadCloud className="h-5 w-5" />}
          title="Upload Industrial Asset Image"
          subtitle="Drag and drop or select an image file"
        />

        {!image ? (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
            className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed px-6 py-16 transition-all duration-200 ${
              dragOver
                ? 'border-sky-400 bg-sky-500/10'
                : 'border-slate-700 bg-slate-900/40 hover:border-sky-500/50 hover:bg-slate-900/60'
            }`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-400 transition-transform duration-200 group-hover:scale-110">
              <UploadCloud className="h-8 w-8" />
            </div>
            <p className="mt-4 text-sm font-medium text-slate-200">
              Drag and drop your image here
            </p>
            <p className="mt-1 text-xs text-slate-500">or click to browse files</p>
            <p className="mt-3 text-[11px] text-slate-600">Supports JPG, PNG, WEBP</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
              <img src={image} alt="Uploaded asset" className="max-h-[360px] w-full object-contain" />
              <button
                onClick={removeImage}
                className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/80 text-slate-300 backdrop-blur transition hover:bg-red-500/80 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={runAnalysis}
                disabled={analyzing}
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all hover:shadow-lg hover:shadow-sky-500/25 disabled:opacity-60"
              >
                {analyzing ? <Loader2 className="h-4 w-4 animate-spin" /> : <ScanSearch className="h-4 w-4" />}
                {analyzing ? 'Analyzing...' : 'Analyze Asset'}
              </button>
              <button
                onClick={removeImage}
                disabled={analyzing}
                className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 disabled:opacity-50"
              >
                <X className="h-4 w-4" /> Remove
              </button>
            </div>
          </div>
        )}
        <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={onPick} />
      </Card>

      <DemoNote>
        Demo Mode — ML inference will be connected to the trained YOLO and condition-assessment
        models in the implementation phase.
      </DemoNote>

      {/* Processing animation */}
      {analyzing && (
        <Card className="animate-fade-in p-6">
          <div className="mb-4 flex items-center gap-2.5">
            <Loader2 className="h-5 w-5 animate-spin text-sky-400" />
            <h2 className="text-base font-semibold text-white">Processing Pipeline</h2>
          </div>
          <div className="space-y-3">
            {DEMO_PREPROCESSING_STEPS.map((step, i) => {
              const done = i < stepIdx;
              const active = i === stepIdx;
              return (
                <div
                  key={step}
                  className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-300 ${
                    active
                      ? 'border-sky-500/40 bg-sky-500/10'
                      : done
                      ? 'border-emerald-500/20 bg-emerald-500/5'
                      : 'border-slate-800 bg-slate-900/40 opacity-60'
                  }`}
                >
                  {done ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  ) : active ? (
                    <Loader2 className="h-5 w-5 animate-spin text-sky-400" />
                  ) : (
                    <div className="h-5 w-5 rounded-full border-2 border-slate-700" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      active ? 'text-sky-200' : done ? 'text-emerald-200' : 'text-slate-400'
                    }`}
                  >
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-500"
              style={{ width: `${((stepIdx + 1) / DEMO_PREPROCESSING_STEPS.length) * 100}%` }}
            />
          </div>
        </Card>
      )}

      {/* Result card */}
      {result && !analyzing && (
        <Card className="animate-fade-in overflow-hidden p-0">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/40 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <FileText className="h-5 w-5 text-sky-400" />
              <h2 className="text-base font-semibold text-white">Asset Analysis Result</h2>
            </div>
            <PrototypeBadge />
          </div>

          <div className="grid grid-cols-1 gap-px bg-slate-800/60 lg:grid-cols-2">
            <ResultField icon={<AlertTriangle className="h-4 w-4 text-amber-400" />} label="Detected Defect" value={result.detectedDefect} />
            <ResultField icon={<Gauge className="h-4 w-4 text-sky-400" />} label="Confidence" value={`${result.confidence}%`} />
            <ResultField icon={<Gauge className="h-4 w-4 text-emerald-400" />} label="Condition" value={result.condition} />
            <ResultField icon={<Wrench className="h-4 w-4 text-orange-400" />} label="Recommended Action" value={result.recommendedAction} />
            <div className="bg-navy-850 px-6 py-4 lg:col-span-2">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Decision Basis</div>
              <p className="mt-1 text-sm text-slate-200">{result.decisionBasis}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-800 px-6 py-4">
            <button
              onClick={() => onNavigate('detection')}
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-800"
            >
              <ScanSearch className="h-4 w-4" /> View Detection Results
            </button>
            <button
              onClick={() => onNavigate('condition')}
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-800"
            >
              <Gauge className="h-4 w-4" /> Condition Assessment
            </button>
            <button
              onClick={() => onNavigate('decision')}
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-slate-800"
            >
              <Wrench className="h-4 w-4" /> 5R Decision
            </button>
          </div>

          <div className="border-t border-slate-800 bg-slate-900/30 px-6 py-3">
            <p className="text-[11px] text-slate-500">
              These values are demonstration outputs only and do not represent actual trained-model inference.
            </p>
          </div>
        </Card>
      )}
    </div>
  );
}

function ResultField({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-navy-850 px-6 py-4">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {icon} {label}
      </div>
      <div className="mt-1.5 text-lg font-bold text-white">{value}</div>
    </div>
  );
}
