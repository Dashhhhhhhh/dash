import { ReactNode } from 'react';
import { designTokens } from '@/lib/design-tokens';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  padding?: boolean;
}

export function Container({
  children,
  className = '',
  size = 'lg',
  padding = true
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
  };

  const paddingClass = padding ? designTokens.spacing.containerPadding : '';
  const baseClasses = 'mx-auto w-full';

  return (
    <div className={`${baseClasses} ${sizeClasses[size]} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
}
