import { designTokens } from '@/lib/design-tokens';

interface EducationItemProps {
  school: string;
  degree: string;
  field?: string;
  start: string;
  end: string;
  details: string[];
}

export function EducationItem({
  school,
  degree,
  field,
  start,
  end,
  details
}: EducationItemProps) {
  const formatDateRange = (start: string, end: string) => {
    return `${start} - ${end}`;
  };

  return (
    <div className={`${designTokens.spacing.itemBottom} ${designTokens.print.break}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <div>
          <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary}`}>
            {degree} {field && `in ${field}`}
          </h3>
          <p className={`${designTokens.typography.body} ${designTokens.colors.text.secondary} font-medium`}>
            {school}
          </p>
        </div>
        <div className={`${designTokens.typography.caption} ${designTokens.colors.text.tertiary} sm:text-right mt-1 sm:mt-0`}>
          <p>{formatDateRange(start, end)}</p>
        </div>
      </div>

      {details && details.length > 0 && (
        <ul className={`${designTokens.spacing.listGap} ${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary} ml-4`}>
          {details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
