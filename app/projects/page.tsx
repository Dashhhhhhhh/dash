'use client';

import { useState, useMemo } from 'react';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { Project } from '@/types/project';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProjectCard } from '@/components/ProjectCard';
import { SearchFilters } from '@/components/SearchFilters';
import { designTokens } from '@/lib/design-tokens';

// Configure static generation
export const dynamic = 'error';

// Note: Metadata is handled in the component using Next.js Head for client components

export default function ProjectsPage() {
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // Sort projects by date (newest first) initially
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }, []);

  // Set initial filtered projects
  useMemo(() => {
    if (filteredProjects.length === 0) {
      setFilteredProjects(sortedProjects);
    }
  }, [filteredProjects.length, sortedProjects]);

  return (
    <main className="min-h-screen py-8 md:py-16">
      <Container size="lg">
        {/* Skip to content link for accessibility */}
        <a
          href="#projects-grid"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to projects
        </a>

        {/* Page Header */}
        <header className="mb-12">
          <SectionHeader level={1}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Projects
          </SectionHeader>

          <p className={`${designTokens.typography.body} ${designTokens.colors.text.secondary} mt-4 max-w-2xl`}>
            A showcase of my work in quantitative finance, machine learning, and software development.
            Each project represents a unique challenge and learning experience, from algorithmic trading
            strategies to quantum computing implementations.
          </p>
        </header>

        {/* Search and Filters */}
        <SearchFilters
          projects={projects}
          onFilteredProjectsChange={setFilteredProjects}
        />

        {/* Projects Grid */}
        <section id="projects-grid" aria-labelledby="projects-heading">
          <h2 id="projects-heading" className="sr-only">
            Project Showcase
          </h2>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className={`${designTokens.typography.h3} ${designTokens.colors.text.primary} mt-4`}>
                No projects found
              </h3>
              <p className={`${designTokens.typography.body} ${designTokens.colors.text.secondary} mt-2`}>
                Try adjusting your search terms or clearing the filters.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>

              {/* Pagination Note */}
              {projects.length > 12 && (
                <div className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.tertiary} text-center py-8 border-t border-gray-200 dark:border-gray-700`}>
                  <p>
                    <strong>Note:</strong> As the project portfolio grows beyond 12 items,
                    pagination will be implemented to maintain optimal performance and user experience.
                  </p>
                </div>
              )}
            </>
          )}
        </section>
      </Container>
    </main>
  );
}
