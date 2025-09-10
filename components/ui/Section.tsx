import { ReactNode } from 'react';
import { designTokens } from '@/lib/design-tokens';

interface SectionProps {
  children: ReactNode;
  className?: string;
  printBreak?: boolean;
}

export function Section({ children, className = '', printBreak = true }: SectionProps) {
  const breakClass = printBreak ? designTokens.print.break : '';

  return (
    <section className={`${designTokens.spacing.sectionBottom} ${breakClass} ${className}`}>
      {children}
    </section>
  );
}
