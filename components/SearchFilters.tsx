'use client';

import { useState, useMemo } from 'react';
import { Project } from '@/types/project';
import { Badge } from '@/components/ui/Badge';
import { designTokens } from '@/lib/design-tokens';

interface SearchFiltersProps {
  projects: Project[];
  onFilteredProjectsChange: (filteredProjects: Project[]) => void;
}

export function SearchFilters({ projects, onFilteredProjectsChange }: SearchFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Get all unique tags from projects
  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tagSet.add(tag));
    });
    return Array.from(tagSet).sort();
  }, [projects]);

  // Filter projects based on search and tags
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Text search
      const matchesSearch = searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Tag filter
      const matchesTags = selectedTags.length === 0 ||
        selectedTags.every(tag => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Newest first
  }, [projects, searchQuery, selectedTags]);

  // Update parent component when filtered projects change
  useMemo(() => {
    onFilteredProjectsChange(filteredProjects);
  }, [filteredProjects, onFilteredProjectsChange]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedTags([]);
  };

  return (
    <div className="mb-8 space-y-6">
      {/* Search Input */}
      <div className="relative">
        <label htmlFor="search" className="sr-only">
          Search projects
        </label>
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            id="search"
            type="text"
            placeholder="Search projects by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`
              w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600
              rounded-lg bg-white dark:bg-gray-800
              text-gray-900 dark:text-gray-100
              placeholder-gray-500 dark:placeholder-gray-400
              focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition-colors duration-200
            `}
            aria-describedby="search-help"
          />
        </div>
        <p id="search-help" className="sr-only">
          Search through project titles, descriptions, and tags
        </p>
      </div>

      {/* Tag Filters */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className={`${designTokens.typography.h4} ${designTokens.colors.text.primary}`}>
            Filter by Tags
          </h3>
          {(searchQuery || selectedTags.length > 0) && (
            <button
              onClick={clearFilters}
              className={`
                text-sm text-blue-600 hover:text-blue-800
                dark:text-blue-400 dark:hover:text-blue-300
                font-medium transition-colors
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                focus:ring-offset-white dark:focus:ring-offset-gray-900
                rounded px-3 py-2 min-h-[44px]
              `}
              aria-label="Clear all filters"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`
                  transition-all duration-200 rounded-full
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  focus:ring-offset-white dark:focus:ring-offset-gray-900
                  ${isSelected
                    ? 'transform scale-105'
                    : 'hover:scale-105'
                  }
                `}
                aria-label={`${isSelected ? 'Remove' : 'Add'} ${tag} filter`}
                aria-pressed={isSelected}
              >
                <Badge
                  variant={isSelected ? 'primary' : 'secondary'}
                  size="sm"
                  className={`
                    cursor-pointer select-none
                    ${isSelected
                      ? 'ring-2 ring-blue-500 ring-offset-1 ring-offset-white dark:ring-offset-gray-900'
                      : ''
                    }
                  `}
                >
                  {tag}
                </Badge>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Summary */}
      <div className={`${designTokens.typography.bodySmall} ${designTokens.colors.text.tertiary}`}>
        Showing {filteredProjects.length} of {projects.length} projects
        {selectedTags.length > 0 && (
          <span className="ml-2">
            (filtered by: {selectedTags.join(', ')})
          </span>
        )}
      </div>
    </div>
  );
}
