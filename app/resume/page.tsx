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
import { DownloadButton } from '@/components/ui/DownloadButton';
import {
  loadResumeData,
  getNonEmptyEducation,
  getNonEmptyExperience,
  getNonEmptyProjects,
  getNonEmptyAwards,
  hasEducation,
  hasExperience,
  hasProjects,
  hasAwards,
} from '@/lib/resume';


export default async function ResumePage() {
  const resumeData = await loadResumeData();

  // Get filtered data to handle empty/null arrays gracefully
  const education = await getNonEmptyEducation();
  const experience = await getNonEmptyExperience();
  const projects = await getNonEmptyProjects();
  const awards = await getNonEmptyAwards();

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
        {education.length > 0 && (
          <Section>
            <SectionHeader icon={<GraduationCap size={20} />}>
              Education
            </SectionHeader>
            {education.map((edu, index) => (
              <EducationItem key={index} {...edu} />
            ))}
          </Section>
        )}

        {/* Experience Section */}
        {experience.length > 0 && (
          <Section>
            <SectionHeader icon={<Briefcase size={20} />}>
              Experience
            </SectionHeader>
            {experience.map((exp, index) => (
              <ExperienceItem key={index} {...exp} />
            ))}
          </Section>
        )}

        {/* Projects Section */}
        {projects.length > 0 && (
          <Section>
            <SectionHeader icon={<Code size={20} />}>
              Projects
            </SectionHeader>
            {projects.map((project, index) => (
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
        {awards.length > 0 && (
          <Section>
            <SectionHeader icon={<Award size={20} />}>
              Awards & Certifications
            </SectionHeader>
            {awards.map((award, index) => (
              <div key={index} className={`${designTokens.spacing.itemBottom} p-4 bg-gray-50 dark:bg-gray-800 rounded-lg`}>
                <h4 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-1`}>
                  {award.title}
                </h4>
                <p className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary} mb-1`}>
                  {award.issuer}
                </p>
                <p className={`${designTokens.typography.caption} ${designTokens.colors.text.tertiary} mb-2`}>
                  {new Date(award.date).getFullYear()}
                </p>
                {award.notes && (
                  <p className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary}`}>
                    {award.notes}
                  </p>
                )}
              </div>
            ))}
          </Section>
        )}
      </Container>
    </div>
  );
}
