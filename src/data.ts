import type { AnalysisResult, BoundingBox, DefectClass } from './types';

export const NAV_ITEMS: { id: string; label: string; icon: string }[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { id: 'analysis', label: 'Asset Analysis', icon: 'ScanSearch' },
  { id: 'detection', label: 'Detection Results', icon: 'Crosshair' },
  { id: 'condition', label: 'Condition Assessment', icon: 'Gauge' },
  { id: 'decision', label: '5R Decision Engine', icon: 'Recycle' },
  { id: 'evaluation', label: 'Model Evaluation', icon: 'BarChart3' },
  { id: 'dataset', label: 'Dataset Information', icon: 'Database' },
  { id: 'architecture', label: 'Project Architecture', icon: 'Workflow' },
  { id: 'about', label: 'About Project', icon: 'Info' },
];

export const PIPELINE_STEPS: { label: string; icon: string }[] = [
  { label: 'Image Input', icon: 'Image' },
  { label: 'Defect Detection', icon: 'ScanSearch' },
  { label: 'Condition Assessment', icon: 'Gauge' },
  { label: '5R Decision', icon: 'Recycle' },
  { label: 'Recommendation', icon: 'Lightbulb' },
];

export const FIVE_R: {
  id: string;
  title: string;
  description: string;
  icon: string;
  accent: string;
}[] = [
  {
    id: 'reduce',
    title: 'Reduce',
    description: 'Minimize unnecessary resource consumption.',
    icon: 'ArrowDownCircle',
    accent: 'sky',
  },
  {
    id: 'reuse',
    title: 'Reuse',
    description: 'Continue using the asset when its condition permits.',
    icon: 'Repeat',
    accent: 'emerald',
  },
  {
    id: 'repair',
    title: 'Repair',
    description: 'Restore an asset with repairable defects.',
    icon: 'Wrench',
    accent: 'amber',
  },
  {
    id: 'repurpose',
    title: 'Repurpose',
    description: 'Use the asset for an alternative role when original use is unsuitable.',
    icon: 'Shuffle',
    accent: 'violet',
  },
  {
    id: 'recycle',
    title: 'Recycle',
    description: 'Recover material when the asset is severely damaged or non-recoverable.',
    icon: 'Recycle',
    accent: 'cyan',
  },
];

export const SUMMARY_CARDS: { label: string; value: number; icon: string; accent: string }[] = [
  { label: 'Assets Analyzed', value: 12, icon: 'Boxes', accent: 'blue' },
  { label: 'Defects Detected', value: 27, icon: 'AlertTriangle', accent: 'amber' },
  { label: 'Assets Requiring Repair', value: 5, icon: 'Wrench', accent: 'orange' },
  { label: 'Circular Recommendations', value: 9, icon: 'Recycle', accent: 'emerald' },
];

const CLASS_COLORS: Record<DefectClass, string> = {
  Corrosion: '#f59e0b',
  Crack: '#ef4444',
  'Surface Damage': '#38bdf8',
};

export function buildDemoDetection(): BoundingBox[] {
  return [
    {
      id: 'b1',
      class: 'Corrosion',
      confidence: 94,
      x: 22,
      y: 30,
      width: 30,
      height: 26,
      color: CLASS_COLORS.Corrosion,
    },
    {
      id: 'b2',
      class: 'Surface Damage',
      confidence: 87,
      x: 58,
      y: 42,
      width: 28,
      height: 30,
      color: CLASS_COLORS['Surface Damage'],
    },
  ];
}

export const DEMO_ANALYSIS: AnalysisResult = {
  detectedDefect: 'Corrosion',
  confidence: 94,
  condition: 'Moderate',
  recommendedAction: 'Repair',
  decisionBasis: 'Localized and potentially repairable defect identified.',
  detection: {
    boxes: buildDemoDetection(),
    summary: [
      { class: 'Corrosion', confidence: 94 },
      { class: 'Surface Damage', confidence: 87 },
    ],
  },
};

export const DEMO_PREPROCESSING_STEPS = [
  'Preprocessing image...',
  'Detecting visible defects...',
  'Assessing asset condition...',
  'Generating 5R recommendation...',
];
