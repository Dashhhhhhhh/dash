import Link from "next/link";
import { getResumeBasics, getNonEmptyProjects, getResumeSkills } from "@/lib/resume";
import { Badge } from "@/components/ui/Badge";
import { DownloadButton } from "@/components/ui/DownloadButton";
import { GraduationCap, Briefcase, Code, MapPin, Github, Mail, Phone } from "lucide-react";
import { designTokens } from "@/lib/design-tokens";
import FeaturedProjects from "@/components/FeaturedProjects";

export default async function Home() {
  const basics = await getResumeBasics();
  const projects = await getNonEmptyProjects();
  const skills = await getResumeSkills();

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
              Passionate finance student with a strong interest in technology, combining analytical skills with innovative problem-solving.
              Currently pursuing a Bachelor of Science in Finance at The Ohio State University while exploring cutting-edge technologies.
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View Full Resume
            </Link>
            <DownloadButton filename="Dash_Dunmire_Resume.pdf" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
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
          <div className="text-center mt-6">
            <Link
              href="/resume"
              className={`${designTokens.typography.link} ${designTokens.typography.body} font-medium`}
            >
              View complete skills & experience →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

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
