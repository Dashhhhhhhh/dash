import { Mail, Phone, MapPin, Globe, Github, Linkedin, ExternalLink } from 'lucide-react';
import { designTokens } from '@/lib/design-tokens';

interface LinkItem {
  label: string;
  url: string;
  type?: 'email' | 'phone' | 'location' | 'website' | 'github' | 'linkedin' | 'external';
}

interface LinkIconRowProps {
  links: LinkItem[];
  className?: string;
}

function getIcon(type: LinkItem['type'], url: string) {
  if (type === 'email' || url.startsWith('mailto:')) return Mail;
  if (type === 'phone' || url.startsWith('tel:')) return Phone;
  if (type === 'location') return MapPin;
  if (type === 'website' || type === 'external') return Globe;
  if (type === 'github' || url.includes('github.com')) return Github;
  if (type === 'linkedin' || url.includes('linkedin.com')) return Linkedin;
  return ExternalLink;
}

export function LinkIconRow({ links, className = '' }: LinkIconRowProps) {
  if (!links || links.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {links.map((link, index) => {
        const Icon = getIcon(link.type, link.url);
        const isExternal = !link.url.startsWith('mailto:') && !link.url.startsWith('tel:');

        return (
          <a
            key={index}
            href={link.url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            className={`${designTokens.typography.link} ${designTokens.typography.bodySmall} flex items-center gap-1.5 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm`}
            aria-label={`${link.label} (${link.url})`}
          >
            <Icon size={14} />
            <span>{link.label}</span>
          </a>
        );
      })}
    </div>
  );
}
