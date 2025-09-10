import { ReactNode } from 'react';
import { designTokens } from '@/lib/design-tokens';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({ children, className = '' }: SectionProps) {
  return (
    <section className={`${designTokens.spacing.sectionBottom} ${className}`}>
      {children}
    </section>
  );
}
