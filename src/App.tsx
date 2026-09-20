import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { AnalysisProvider } from './analysisContext';
import { DashboardPage } from './pages/DashboardPage';
import { AssetAnalysisPage } from './pages/AssetAnalysisPage';
import { DetectionResultsPage } from './pages/DetectionResultsPage';
import { ConditionAssessmentPage } from './pages/ConditionAssessmentPage';
import { DecisionEnginePage } from './pages/DecisionEnginePage';
import { ModelEvaluationPage } from './pages/ModelEvaluationPage';
import { DatasetPage } from './pages/DatasetPage';
import { ArchitecturePage } from './pages/ArchitecturePage';
import { AboutPage } from './pages/AboutPage';

const PAGE_META: Record<string, { title: string; subtitle: string }> = {
  dashboard: { title: 'ReNewX AI', subtitle: 'Industrial Asset Intelligence Platform' },
  analysis: { title: 'ReNewX AI', subtitle: 'Asset Analysis' },
  detection: { title: 'ReNewX AI', subtitle: 'Detection Results' },
  condition: { title: 'ReNewX AI', subtitle: 'Condition Assessment' },
  decision: { title: 'ReNewX AI', subtitle: '5R Decision Engine' },
  evaluation: { title: 'ReNewX AI', subtitle: 'Model Evaluation' },
  dataset: { title: 'ReNewX AI', subtitle: 'Dataset Information' },
  architecture: { title: 'ReNewX AI', subtitle: 'Project Architecture' },
  about: { title: 'ReNewX AI', subtitle: 'About Project' },
};

function App() {
  const [page, setPage] = useState<string>('dashboard');
  const meta = PAGE_META[page] ?? PAGE_META.dashboard;

  const navigate = (id: string) => {
    setPage(id);
    const main = document.getElementById('main-scroll');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnalysisProvider>
      <div className="flex h-screen overflow-hidden bg-navy-950 text-slate-200">
        <Sidebar current={page} onNavigate={navigate} />
        <div className="flex flex-1 flex-col overflow-hidden">
          <Header title={meta.title} subtitle={meta.subtitle} />
          <main id="main-scroll" className="flex-1 overflow-y-auto px-6 py-6">
            <div key={page} className="mx-auto max-w-7xl">
              {page === 'dashboard' && <DashboardPage onNavigate={navigate} />}
              {page === 'analysis' && <AssetAnalysisPage onNavigate={navigate} />}
              {page === 'detection' && <DetectionResultsPage onNavigate={navigate} />}
              {page === 'condition' && <ConditionAssessmentPage />}
              {page === 'decision' && <DecisionEnginePage />}
              {page === 'evaluation' && <ModelEvaluationPage />}
              {page === 'dataset' && <DatasetPage />}
              {page === 'architecture' && <ArchitecturePage />}
              {page === 'about' && <AboutPage />}
            </div>
          </main>
        </div>
      </div>
    </AnalysisProvider>
  );
}

export default App;
