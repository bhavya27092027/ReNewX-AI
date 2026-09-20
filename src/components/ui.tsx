import type { ReactNode } from 'react';

export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-800/80 bg-navy-850/70 shadow-lg shadow-black/20 backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}

export function SectionTitle({
  icon,
  title,
  subtitle,
}: {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4 flex items-start gap-3">
      {icon && (
        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400">
          {icon}
        </div>
      )}
      <div>
        <h2 className="text-base font-semibold text-white">{title}</h2>
        {subtitle && <p className="text-sm text-slate-400">{subtitle}</p>}
      </div>
    </div>
  );
}

export function PrototypeBadge({ text = 'Prototype Demonstration Result' }: { text?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-amber-300">
      <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
      {text}
    </span>
  );
}

export function DemoNote({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-2.5 rounded-xl border border-sky-500/20 bg-sky-500/5 px-4 py-3 text-xs leading-relaxed text-slate-400">
      <span className="mt-0.5 h-4 w-4 shrink-0 rounded-full border border-sky-500/40 text-center text-[9px] font-bold leading-[14px] text-sky-400">
        i
      </span>
      <span>{children}</span>
    </div>
  );
}
