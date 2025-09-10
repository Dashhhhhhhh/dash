import { Badge } from '@/components/ui/Badge';
import { ExternalLink } from 'lucide-react';
import { designTokens } from '@/lib/design-tokens';

interface ProjectItemProps {
  name: string;
  url?: string;
  bullets: string[];
  technologies?: string[];
}

export function ProjectItem({
  name,
  url,
  bullets,
  technologies
}: ProjectItemProps) {
  return (
    <div className={`${designTokens.spacing.itemBottom} ${designTokens.print.break}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
        <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary}`}>
          {name}
        </h3>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${designTokens.typography.link} ${designTokens.typography.bodySmall} flex items-center gap-1 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm`}
            aria-label={`View ${name} project`}
          >
            <ExternalLink size={14} />
            <span>View Project</span>
          </a>
        )}
      </div>

      {bullets && bullets.length > 0 && (
        <ul className={`${designTokens.spacing.listGap} ${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary} ml-4 mb-3`}>
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-400 mr-2 mt-1.5 flex-shrink-0" aria-hidden="true">•</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {technologies && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
