import type { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  className?: string;
};

export default function Box({ children, className = "" }: BoxProps) {
  return (
    <div
      className={`rounded-2xl border-[clamp(0.2rem,0.6vw,0.3rem)] border-[var(--color-text)] ${className}`}
    >
      {children}
    </div>
  );
}
