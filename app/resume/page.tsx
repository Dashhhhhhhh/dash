import { promises as fs } from 'fs';
import path from 'path';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { LinkIconRow } from '@/components/ui/LinkIconRow';
import { Badge } from '@/components/ui/Badge';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';
import { ExperienceItem } from '@/components/resume/ExperienceItem';
import { EducationItem } from '@/components/resume/EducationItem';
import { ProjectItem } from '@/components/resume/ProjectItem';
import { Download, GraduationCap, Briefcase, Code, Award } from 'lucide-react';
import { designTokens } from '@/lib/design-tokens';

// Type definitions
interface ResumeData {
  basics: {
    name: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    links: Array<{
      label: string;
      url: string;
    }>;
  };
  education: Array<{
    school: string;
    degree: string;
    field: string;
    start: string;
    end: string;
    details: string[];
  }>;
  experience: Array<{
    company: string;
    role: string;
    location: string;
    start: string;
    end: string;
    bullets: string[];
  }>;
  projects: Array<{
    name: string;
    url: string;
    bullets: string[];
  }>;
  skills: {
    languages: string[];
    frameworks: string[];
    tools: string[];
    other: string[];
  };
  awards: any[];
}

async function getResumeData(): Promise<ResumeData> {
  const filePath = path.join(process.cwd(), 'data', 'resume.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Dash_Dunmire_Resume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className={`${designTokens.print.hide} inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      aria-label="Download Resume PDF"
    >
      <Download size={16} />
      Download PDF
    </button>
  );
}

export default async function ResumePage() {
  const resumeData = await getResumeData();

  // Transform basic contact info into LinkIconRow format
  const contactLinks = [
    {
      label: resumeData.basics.email,
      url: `mailto:${resumeData.basics.email}`,
      type: 'email' as const,
    },
    {
      label: resumeData.basics.phone,
      url: `tel:${resumeData.basics.phone}`,
      type: 'phone' as const,
    },
    {
      label: resumeData.basics.location,
      url: '#',
      type: 'location' as const,
    },
    ...resumeData.basics.links,
  ];

  return (
    <div className={`${designTokens.colors.bg.primary} min-h-screen py-8 md:py-12`}>
      <DarkModeToggle />
      <Container size="lg">
        {/* Header Section */}
        <header className="text-center mb-12">
          <div className="flex flex-col items-center gap-6">
            {/* Name and Title */}
            <div>
              <SectionHeader level={1} className="text-center mb-2">
                {resumeData.basics.name}
              </SectionHeader>
              <p className={`${designTokens.typography.body} ${designTokens.colors.text.secondary} text-center max-w-2xl mx-auto`}>
                {resumeData.basics.headline}
              </p>
            </div>

            {/* Contact Links */}
            <LinkIconRow links={contactLinks} className="justify-center" />

            {/* Download Button */}
            <DownloadButton />
          </div>
        </header>

        {/* Education Section */}
        {resumeData.education && resumeData.education.length > 0 && (
          <Section>
            <SectionHeader icon={<GraduationCap size={20} />}>
              Education
            </SectionHeader>
            {resumeData.education.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </Section>
        )}

        {/* Experience Section */}
        {resumeData.experience && resumeData.experience.length > 0 && (
          <Section>
            <SectionHeader icon={<Briefcase size={20} />}>
              Experience
            </SectionHeader>
            {resumeData.experience.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </Section>
        )}

        {/* Projects Section */}
        {resumeData.projects && resumeData.projects.length > 0 && (
          <Section>
            <SectionHeader icon={<Code size={20} />}>
              Projects
            </SectionHeader>
            {resumeData.projects.map((project, index) => (
              <ProjectItem key={index} {...project} />
            ))}
          </Section>
        )}

        {/* Skills Section */}
        {(resumeData.skills.languages.length > 0 ||
          resumeData.skills.frameworks.length > 0 ||
          resumeData.skills.tools.length > 0 ||
          resumeData.skills.other.length > 0) && (
          <Section>
            <SectionHeader>
              Skills
            </SectionHeader>

            {resumeData.skills.languages.length > 0 && (
              <div className="mb-6">
                <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-3`}>
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.languages.map((skill, index) => (
                    <Badge key={index} variant="primary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {resumeData.skills.frameworks.length > 0 && (
              <div className="mb-6">
                <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-3`}>
                  Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.frameworks.map((skill, index) => (
                    <Badge key={index} variant="success">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {resumeData.skills.tools.length > 0 && (
              <div className="mb-6">
                <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-3`}>
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.tools.map((skill, index) => (
                    <Badge key={index} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {resumeData.skills.other.length > 0 && (
              <div>
                <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-3`}>
                  Other Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.other.map((skill, index) => (
                    <Badge key={index} variant="warning">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </Section>
        )}

        {/* Awards Section (if any) */}
        {resumeData.awards && resumeData.awards.length > 0 && (
          <Section>
            <SectionHeader icon={<Award size={20} />}>
              Awards & Certifications
            </SectionHeader>
            {/* Awards content would go here */}
          </Section>
        )}
      </Container>
    </div>
  );
}
