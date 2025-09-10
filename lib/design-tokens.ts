// Design tokens for consistent typography, spacing, and styling
export const designTokens = {
  // Typography scale
  typography: {
    // Headings
    h1: 'text-3xl md:text-4xl font-bold tracking-tight',
    h2: 'text-xl md:text-2xl font-semibold tracking-tight',
    h3: 'text-lg font-medium',
    h4: 'text-base font-medium',

    // Body text
    body: 'text-sm md:text-base leading-relaxed',
    bodySmall: 'text-xs md:text-sm leading-relaxed',

    // Special text
    caption: 'text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide font-medium',
    link: 'text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors',
  },

  // Spacing scale
  spacing: {
    // Section spacing
    sectionBottom: 'mb-8 md:mb-12',
    sectionTop: 'mb-6',

    // Item spacing
    itemBottom: 'mb-6',
    itemTop: 'mb-4',

    // Content spacing
    contentGap: 'space-y-3',
    listGap: 'space-y-2',

    // Padding
    containerPadding: 'px-4 md:px-6 lg:px-8',
    cardPadding: 'p-4 md:p-6',
  },

  // Layout
  layout: {
    container: 'max-w-4xl mx-auto',
    grid: {
      single: 'grid grid-cols-1 gap-8',
      responsive: 'grid grid-cols-1 md:grid-cols-2 gap-6',
    },
  },

  // Colors
  colors: {
    // Text colors
    text: {
      primary: 'text-gray-900 dark:text-white',
      secondary: 'text-gray-700 dark:text-gray-300',
      tertiary: 'text-gray-600 dark:text-gray-400',
      accent: 'text-blue-600 dark:text-blue-400',
    },

    // Background colors
    bg: {
      primary: 'bg-white dark:bg-gray-900',
      secondary: 'bg-gray-50 dark:bg-gray-800',
      accent: 'bg-blue-50 dark:bg-blue-900/20',
    },

    // Border colors
    border: {
      light: 'border-gray-200 dark:border-gray-700',
      medium: 'border-gray-300 dark:border-gray-600',
    },
  },

  // Component variants
  variants: {
    badge: {
      primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
      success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
      warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    },
  },

  // Print styles (applied via Tailwind classes)
  print: {
    hide: 'print:hidden',
    break: 'print:page-break-inside-avoid',
    text: 'print:text-xs md:print:text-sm',
    mb2: 'print:mb-2',
    mb3: 'print:mb-3',
    mb4: 'print:mb-4',
    mb6: 'print:mb-6',
    mb8: 'print:mb-8',
    mb12: 'print:mb-12',
    textXs: 'print:text-xs',
    textSm: 'print:text-sm',
    textBase: 'print:text-base',
    textLg: 'print:text-lg',
    textXl: 'print:text-xl',
    text2xl: 'print:text-2xl',
    text3xl: 'print:text-3xl',
    text4xl: 'print:text-4xl',
  },
} as const;

// Type helpers
export type TypographyKey = keyof typeof designTokens.typography;
export type SpacingKey = keyof typeof designTokens.spacing;
export type ColorKey = keyof typeof designTokens.colors;
