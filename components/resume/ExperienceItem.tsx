import { Badge } from '@/components/ui/Badge';
import { designTokens } from '@/lib/design-tokens';

interface ExperienceItemProps {
  company: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  bullets: string[];
}

export function ExperienceItem({
  company,
  role,
  location,
  start,
  end,
  bullets
}: ExperienceItemProps) {
  const formatDateRange = (start: string, end: string) => {
    return `${start} - ${end}`;
  };

  return (
    <div className={`${designTokens.spacing.itemBottom} ${designTokens.print.break}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary}`}>
            {role}
          </h3>
          <p className={`${designTokens.typography.body} ${designTokens.colors.text.secondary} font-medium`}>
            {company}
          </p>
        </div>
        <div className={`${designTokens.typography.caption} ${designTokens.colors.text.tertiary} sm:text-right mt-1 sm:mt-0`}>
          <p>{formatDateRange(start, end)}</p>
          {location && <p>{location}</p>}
        </div>
      </div>

      {bullets && bullets.length > 0 && (
        <ul className={`${designTokens.spacing.listGap} ${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary} ml-4`}>
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
