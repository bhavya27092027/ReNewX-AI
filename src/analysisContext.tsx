import { createContext, useContext, useState, type ReactNode } from 'react';
import type { AnalysisResult } from './types';
import { DEMO_ANALYSIS } from './data';

interface AnalysisContextValue {
  image: string | null;
  setImage: (img: string | null) => void;
  result: AnalysisResult | null;
  setResult: (r: AnalysisResult | null) => void;
  hasAnalysis: boolean;
}

const AnalysisContext = createContext<AnalysisContextValue | null>(null);

export function AnalysisProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  return (
    <AnalysisContext.Provider
      value={{ image, setImage, result, setResult, hasAnalysis: !!result }}
    >
      {children}
    </AnalysisContext.Provider>
  );
}

export function useAnalysis() {
  const ctx = useContext(AnalysisContext);
  if (!ctx) throw new Error('useAnalysis must be used within AnalysisProvider');
  return ctx;
}
