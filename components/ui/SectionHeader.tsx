import { ReactNode } from 'react';
import { designTokens } from '@/lib/design-tokens';

interface SectionHeaderProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4;
}

export function SectionHeader({
  children,
  icon,
  className = '',
  level = 2
}: SectionHeaderProps) {
  const headingClasses = level === 1
    ? designTokens.typography.h1
    : level === 2
    ? designTokens.typography.h2
    : level === 3
    ? designTokens.typography.h3
    : designTokens.typography.h4;

  const headingProps = {
    className: `${headingClasses} ${designTokens.colors.text.primary} flex items-center gap-2`
  };

  return (
    <div className={`${designTokens.spacing.sectionTop} ${className}`}>
      {level === 1 && (
        <h1 {...headingProps}>
          {icon && <span className="text-gray-600 dark:text-gray-400">{icon}</span>}
          {children}
        </h1>
      )}
      {level === 2 && (
        <>
          <h2 {...headingProps}>
            {icon && <span className="text-gray-600 dark:text-gray-400">{icon}</span>}
            {children}
          </h2>
          <div className="w-12 h-0.5 bg-blue-600 dark:bg-blue-400 mt-2" />
        </>
      )}
      {level === 3 && (
        <h3 {...headingProps}>
          {icon && <span className="text-gray-600 dark:text-gray-400">{icon}</span>}
          {children}
        </h3>
      )}
      {level === 4 && (
        <h4 {...headingProps}>
          {icon && <span className="text-gray-600 dark:text-gray-400">{icon}</span>}
          {children}
        </h4>
      )}
    </div>
  );
}
