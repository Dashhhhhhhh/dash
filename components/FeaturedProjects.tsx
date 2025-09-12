import Link from "next/link";
import { projects } from "@/data/projects";
import { getNonEmptyProjects } from "@/lib/resume";
import { designTokens } from "@/lib/design-tokens";

export default async function FeaturedProjects() {
  // Get projects from resume.json for featured section
  const resumeProjects = await getNonEmptyProjects();

  if (resumeProjects.length === 0) {
    return null;
  }

  // Create a mapping from resume project names to their slugs in projects.ts
  const getProjectSlug = (projectName: string) => {
    const project = projects.find(p => p.title === projectName);
    return project ? project.slug : null;
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className={`${designTokens.typography.h2} ${designTokens.colors.text.primary} text-center mb-12`}>
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeProjects.slice(0, 3).map((project, index) => {
            const slug = getProjectSlug(project.name);
            // Only render if we have a matching project with a slug
            if (!slug) return null;

            return (
              <Link
                key={index}
                href={`/projects/${slug}`}
                className="block group"
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-200 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 group-hover:scale-[1.02]">
                  <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary} mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
                    {project.name}
                  </h3>
                  <p className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.secondary} mb-4`}>
                    {project.bullets[0]}
                  </p>
                  {project.url && (
                    <div className={`${designTokens.typography.link} ${designTokens.typography.bodySmall} font-medium text-blue-600 dark:text-blue-400`}>
                      View Project →
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        {resumeProjects.length > 3 && (
          <div className="text-center mt-8">
            <Link
              href="/projects"
              className={`${designTokens.typography.link} ${designTokens.typography.body} font-medium`}
            >
              View all {resumeProjects.length} projects →
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
