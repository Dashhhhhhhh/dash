import Link from "next/link";
import { getResumeBasics, getNonEmptyProjects, getResumeSkills, loadResumeData, getNonEmptyEducation, getNonEmptyExperience, getNonEmptyAwards } from "@/lib/resume";
import { Badge } from "@/components/ui/Badge";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LinkIconRow } from "@/components/ui/LinkIconRow";
import { ExperienceItem } from "@/components/resume/ExperienceItem";
import { EducationItem } from "@/components/resume/EducationItem";
import { ProjectItem } from "@/components/resume/ProjectItem";
import { GraduationCap, Briefcase, Code, MapPin, Github, Mail, Phone, Award } from "lucide-react";
import { designTokens } from "@/lib/design-tokens";
import FeaturedProjects from "@/components/FeaturedProjects";

export default async function Home() {
  const basics = await getResumeBasics();
  const projects = await getNonEmptyProjects();
  const skills = await getResumeSkills();

  // Load full resume data for the expanded sections
  const resumeData = await loadResumeData();
  const education = await getNonEmptyEducation();
  const experience = await getNonEmptyExperience();
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

  // Get top skills to showcase
  const topSkills = [
    ...skills.languages.slice(0, 3),
    ...skills.frameworks.slice(0, 2),
    ...skills.tools.slice(0, 2)
  ];

  return (
    <div className={`${designTokens.colors.bg.primary} min-h-screen`}>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className={`${designTokens.typography.h1} ${designTokens.colors.text.primary} mb-4`}>
              {basics.name}
            </h1>
            <p className={`${designTokens.typography.h2} ${designTokens.colors.text.secondary} mb-6`}>
              {basics.headline}
            </p>
            <div className={`${designTokens.typography.body} ${designTokens.colors.text.secondary} max-w-2xl mx-auto mb-8`}>
            My Name is Dash Dunmire and I am a Finance student at The Ohio State University, I am passionate about automating financial systems/models. I am familiar with risk financial models such as arch/garch, and using python and pandas to analyze data.
            </div>
            <div className={`${designTokens.typography.body} ${designTokens.colors.text.secondary} max-w-2xl mx-auto mb-8`}>
            Apart from finance and technology, I also enjoy reading, hiking, playing rugby, buildng online communities, and learning new things. I have built discord servers to over 5000 members, minecraft servers with over 100 concurrent players, and have grown social medias to above 30k followers.
            
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-1.5">
              <MapPin size={16} className={designTokens.colors.text.tertiary} />
              <span className={designTokens.colors.text.secondary}>{basics.location}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={16} className={designTokens.colors.text.tertiary} />
              <span className={designTokens.colors.text.secondary}>{basics.email}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone size={16} className={designTokens.colors.text.tertiary} />
              <span className={designTokens.colors.text.secondary}>{basics.phone}</span>
            </div>
            {basics.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-1.5 ${designTokens.typography.link} hover:underline`}
              >
                <Github size={16} />
                <span>{link.label}</span>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className={`${designTokens.typography.h2} ${designTokens.colors.text.primary} text-center mb-12`}>
            Quick Overview
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap size={32} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-2`}>
                Education
              </h3>
              <p className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary}`}>
                B.S. Finance - The Ohio State University<br />
                Expected May 2028
              </p>
            </div>

            {/* Experience */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={32} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-2`}>
                Experience
              </h3>
              <p className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary}`}>
                Retail Operations<br />
                Marc's - Sep 2022 - Aug 2024
              </p>
            </div>

            {/* Projects */}
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code size={32} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-2`}>
                Projects
              </h3>
              <p className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary}`}>
                {projects.length} Technical Projects<br />
                Including AI, Quantum Computing & Finance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className={`${designTokens.typography.h2} ${designTokens.colors.text.primary} text-center mb-8`}>
            Technical Skills
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {topSkills.map((skill, index) => (
              <Badge key={index} variant="primary" size="md">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Full Resume Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
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
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.tertiary}`}>
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
