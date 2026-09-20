export type DefectClass = 'Corrosion' | 'Crack' | 'Surface Damage';

export type Condition = 'Good' | 'Moderate' | 'Poor';

export type FiveR = 'Reduce' | 'Reuse' | 'Repair' | 'Repurpose' | 'Recycle';

export interface BoundingBox {
  id: string;
  class: DefectClass;
  confidence: number; // 0-100
  x: number; // percent
  y: number; // percent
  width: number; // percent
  height: number; // percent
  color: string;
}

export interface DetectionResult {
  boxes: BoundingBox[];
  summary: { class: DefectClass; confidence: number }[];
}

export interface AnalysisResult {
  detectedDefect: DefectClass;
  confidence: number;
  condition: Condition;
  recommendedAction: FiveR;
  decisionBasis: string;
  detection: DetectionResult;
}

export type PageId =
  | 'dashboard'
  | 'analysis'
  | 'detection'
  | 'condition'
  | 'decision'
  | 'evaluation'
  | 'dataset'
  | 'architecture'
  | 'about';
