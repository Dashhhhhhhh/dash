import { designTokens } from '@/lib/design-tokens';

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export function Prose({ children, className = '' }: ProseProps) {
  return (
    <div
      className={`
        prose prose-sm md:prose-base lg:prose-lg
        prose-gray dark:prose-invert
        max-w-none
        prose-headings:font-semibold prose-headings:tracking-tight
        prose-h1:text-2xl prose-h1:md:text-3xl
        prose-h2:text-xl prose-h2:md:text-2xl
        prose-h3:text-lg prose-h3:md:text-xl
        prose-p:leading-relaxed prose-p:text-gray-700 dark:prose-p:text-gray-300
        prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-900 prose-strong:dark:text-gray-100
        prose-code:text-gray-900 prose-code:dark:text-gray-100 prose-code:bg-gray-100 prose-code:dark:bg-gray-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-mono
        prose-pre:bg-gray-900 prose-pre:text-gray-100
        prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-600 prose-blockquote:dark:text-gray-400
        prose-ul:space-y-2 prose-ol:space-y-2
        prose-li:text-gray-700 prose-li:dark:text-gray-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}
