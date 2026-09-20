import {
  Crosshair,
  Image as ImageIcon,
  ScanSearch,
  Square,
  Target,
} from 'lucide-react';
import { Card, SectionTitle, PrototypeBadge, DemoNote } from '../components/ui';
import { useAnalysis } from '../analysisContext';
import { buildDemoDetection } from '../data';
import type { BoundingBox } from '../types';

export function DetectionResultsPage({ onNavigate }: { onNavigate: (id: string) => void }) {
  const { image, result } = useAnalysis();
  const boxes = result?.detection.boxes ?? buildDemoDetection();
  const summary = result?.detection.summary ?? [
    { class: 'Corrosion', confidence: 94 },
    { class: 'Surface Damage', confidence: 87 },
  ];

  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white">Detection Results</h1>
        <p className="mt-1 text-sm text-slate-400">YOLO-based defect detection visualization</p>
      </div>

      <Card className="animate-fade-in p-6">
        <div className="mb-4 flex items-center justify-between">
          <SectionTitle
            icon={<Crosshair className="h-5 w-5" />}
            title="Prototype Detection Visualization"
          />
          <PrototypeBadge text="Prototype Detection Visualization" />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Image with bounding boxes */}
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
              {image ? (
                <img src={image} alt="Asset" className="max-h-[460px] w-full object-contain" />
              ) : (
                <div className="grid-bg flex h-[460px] w-full flex-col items-center justify-center text-slate-600">
                  <ImageIcon className="h-12 w-12" />
                  <p className="mt-3 text-sm">No image uploaded yet</p>
                  <button
                    onClick={() => onNavigate('analysis')}
                    className="mt-3 rounded-lg border border-slate-700 px-3 py-1.5 text-xs text-slate-300 hover:bg-slate-800"
                  >
                    Upload an image
                  </button>
                </div>
              )}

              {image &&
                boxes.map((box) => (
                  <BBox key={box.id} box={box} />
                ))}
            </div>

            {/* Legend */}
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {boxes.map((b) => (
                <div key={b.id} className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-1.5">
                  <span className="h-3 w-3 rounded-sm" style={{ background: b.color }} />
                  <span className="text-xs font-medium text-slate-300">{b.class}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: detected defects + output */}
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <ScanSearch className="h-4 w-4 text-sky-400" /> Detected Defects
              </h3>
              <ul className="space-y-2">
                {summary.map((d) => (
                  <li
                    key={d.class}
                    className="flex items-center justify-between rounded-lg border border-slate-800 bg-navy-850 px-3 py-2.5"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{
                          background:
                            d.class === 'Corrosion' ? '#f59e0b' : d.class === 'Crack' ? '#ef4444' : '#38bdf8',
                        }}
                      />
                      {d.class}
                    </span>
                    <span className="font-mono text-sm font-semibold text-sky-300">{d.confidence}%</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
              <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                <Target className="h-4 w-4 text-emerald-400" /> Detection Output
              </h3>
              <div className="space-y-2.5 text-xs">
                {[
                  { label: 'Defect class', icon: <Square className="h-3.5 w-3.5" /> },
                  { label: 'Bounding box', icon: <Crosshair className="h-3.5 w-3.5" /> },
                  { label: 'Confidence score', icon: <Target className="h-3.5 w-3.5" /> },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-2 text-slate-400">
                    <span className="text-slate-500">{row.icon}</span>
                    {row.label}
                  </div>
                ))}
              </div>
              <div className="mt-3 space-y-2">
                {boxes.map((b) => (
                  <div key={b.id} className="rounded-lg border border-slate-800 bg-navy-850 px-3 py-2 font-mono text-[11px] text-slate-400">
                    <span style={{ color: b.color }}>{b.class}</span> · x:{b.x.toFixed(0)} y:{b.y.toFixed(0)} w:{b.width.toFixed(0)} h:{b.height.toFixed(0)} · {b.confidence}%
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      <DemoNote>
        These bounding boxes are illustrative demonstration overlays, not actual trained YOLO
        predictions. In the implementation phase, the trained detector will produce real
        detections via <span className="font-mono text-sky-300">POST /api/detect</span>.
      </DemoNote>
    </div>
  );
}

function BBox({ box }: { box: BoundingBox }) {
  return (
    <div
      className="absolute border-2 transition-all duration-300"
      style={{
        left: `${box.x}%`,
        top: `${box.y}%`,
        width: `${box.width}%`,
        height: `${box.height}%`,
        borderColor: box.color,
        boxShadow: `0 0 12px ${box.color}55, inset 0 0 0 1px ${box.color}33`,
      }}
    >
      <div
        className="absolute -top-6 left-0 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-bold text-slate-900"
        style={{ background: box.color }}
      >
        {box.class} {box.confidence}%
      </div>
    </div>
  );
}
