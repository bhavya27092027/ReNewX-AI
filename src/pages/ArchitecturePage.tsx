import {
  Image as ImageIcon,
  SlidersHorizontal,
  ScanSearch,
  Crosshair,
  Gauge,
  Cpu,
  Recycle,
  LayoutDashboard,
  ChevronDown,
  Brain,
  Lightbulb,
} from 'lucide-react';
import { Card, SectionTitle } from '../components/ui';

const FLOW = [
  { label: 'Industrial Asset Image', icon: ImageIcon, color: 'text-sky-400', bg: 'bg-sky-500/15' },
  { label: 'Image Preprocessing', icon: SlidersHorizontal, color: 'text-cyan-400', bg: 'bg-cyan-500/15' },
  { label: 'YOLO-Based Defect Detection', icon: ScanSearch, color: 'text-blue-400', bg: 'bg-blue-500/15' },
  { label: 'Defect Class + Bounding Box + Confidence', icon: Crosshair, color: 'text-indigo-400', bg: 'bg-indigo-500/15' },
  { label: 'Asset Condition Assessment', icon: Gauge, color: 'text-amber-400', bg: 'bg-amber-500/15' },
  { label: 'Good / Moderate / Poor', icon: Brain, color: 'text-orange-400', bg: 'bg-orange-500/15' },
  { label: '5R Decision Engine', icon: Recycle, color: 'text-emerald-400', bg: 'bg-emerald-500/15' },
  { label: 'Reduce / Reuse / Repair / Repurpose / Recycle', icon: Cpu, color: 'text-teal-400', bg: 'bg-teal-500/15' },
  { label: 'Decision Support Dashboard', icon: LayoutDashboard, color: 'text-sky-400', bg: 'bg-sky-500/15' },
];

export function ArchitecturePage() {
  return (
    <div className="space-y-6">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-bold tracking-tight text-white">Project Architecture</h1>
        <p className="mt-1 text-sm text-slate-400">End-to-end system pipeline and component overview</p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Main flow */}
        <Card className="animate-fade-in p-6 lg:col-span-2">
          <SectionTitle
            icon={<LayoutDashboard className="h-5 w-5" />}
            title="System Pipeline"
            subtitle="Data flow from input to decision support"
          />
          <div className="space-y-1">
            {FLOW.map((node, i) => {
              const Icon = node.icon;
              return (
                <div key={node.label}>
                  <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-4 transition-all duration-200 hover:border-slate-700 hover:bg-slate-900/70">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${node.bg} ${node.color}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">{node.label}</span>
                    <span className="ml-auto font-mono text-[11px] text-slate-600">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  {i < FLOW.length - 1 && (
                    <div className="flex justify-center py-1">
                      <ChevronDown className="h-4 w-4 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Card>

        {/* Side panel */}
        <div className="space-y-4">
          <Card className="animate-fade-in p-6">
            <SectionTitle icon={<Brain className="h-5 w-5" />} title="Learning-Based Components" />
            <ul className="space-y-2.5">
              {[
                'YOLO-based defect detection',
                'Deep Learning-based condition assessment',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-800 bg-slate-900/40 px-4 py-3"
                >
                  <Brain className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
                  <span className="text-sm text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="animate-fade-in p-6">
            <SectionTitle icon={<Lightbulb className="h-5 w-5" />} title="Decision-Based Component" />
            <div className="flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
              <Cpu className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <span className="text-sm text-slate-200">5R Decision Engine</span>
            </div>
          </Card>

          <Card className="animate-fade-in p-6">
            <SectionTitle icon={<Recycle className="h-5 w-5" />} title="Integration Points" />
            <div className="space-y-2 font-mono text-xs">
              {['POST /api/detect', 'POST /api/condition', 'POST /api/recommend'].map((api) => (
                <div key={api} className="rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-2 text-sky-300">
                  {api}
                </div>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-slate-500">Designed for future backend ML integration.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
