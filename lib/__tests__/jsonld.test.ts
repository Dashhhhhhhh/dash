import { describe, it, expect } from 'vitest';
import { personJsonLd, projectJsonLd, breadcrumbsJsonLd, websiteJsonLd } from '../jsonld';
import { projects } from '@/data/projects';

describe('JSON-LD Helpers', () => {
  describe('personJsonLd', () => {
    it('should return valid Person schema', () => {
      const result = personJsonLd();

      expect(result).toHaveProperty('@context', 'https://schema.org');
      expect(result).toHaveProperty('@type', 'Person');
      expect(result).toHaveProperty('name', 'Dash Dunmire');
      expect(result).toHaveProperty('jobTitle', 'Finance Student');
      expect(result).toHaveProperty('affiliation');
      expect(result.affiliation).toHaveProperty('name', 'The Ohio State University');
      expect(result).toHaveProperty('knowsAbout');
      expect(Array.isArray(result.knowsAbout)).toBe(true);
      expect(result).toHaveProperty('sameAs');
      expect(Array.isArray(result.sameAs)).toBe(true);
    });
  });

  describe('projectJsonLd', () => {
    it('should return valid SoftwareSourceCode schema for a project', () => {
      const testProject = projects[0];
      const result = projectJsonLd(testProject);

      expect(result).toHaveProperty('@context', 'https://schema.org');
      expect(result).toHaveProperty('@type', 'SoftwareSourceCode');
      expect(result).toHaveProperty('name', testProject.title);
      expect(result).toHaveProperty('description', testProject.summary);
      expect(result).toHaveProperty('author');
      expect(result.author).toHaveProperty('name', 'Dash Dunmire');
      expect(result).toHaveProperty('programmingLanguage', testProject.stack);
      expect(result).toHaveProperty('codeRepository', testProject.repoUrl);
      expect(result).toHaveProperty('dateCreated', testProject.date);
    });

    it('should handle projects without demo URLs', () => {
      const testProject = projects[0];
      const result = projectJsonLd(testProject);

      expect(result).toHaveProperty('url', testProject.demoUrl || testProject.repoUrl);
    });
  });

  describe('breadcrumbsJsonLd', () => {
    it('should return breadcrumbs for home only', () => {
      const result = breadcrumbsJsonLd();

      expect(result).toHaveProperty('@context', 'https://schema.org');
      expect(result).toHaveProperty('@type', 'BreadcrumbList');
      expect(result).toHaveProperty('itemListElement');
      expect(result.itemListElement).toHaveLength(2);
      expect(result.itemListElement[0]).toHaveProperty('name', 'Home');
      expect(result.itemListElement[1]).toHaveProperty('name', 'Projects');
    });

    it('should return breadcrumbs including project when provided', () => {
      const testProject = projects[0];
      const result = breadcrumbsJsonLd(testProject);

      expect(result.itemListElement).toHaveLength(3);
      expect(result.itemListElement[2]).toHaveProperty('name', testProject.title);
      expect(result.itemListElement[2].item).toBe(`https://dashdunmire.dev/projects/${testProject.slug}`);
    });
  });

  describe('websiteJsonLd', () => {
    it('should return valid WebSite schema', () => {
      const result = websiteJsonLd();

      expect(result).toHaveProperty('@context', 'https://schema.org');
      expect(result).toHaveProperty('@type', 'WebSite');
      expect(result).toHaveProperty('name', 'Dash Dunmire - Portfolio');
      expect(result).toHaveProperty('author');
      expect(result.author).toHaveProperty('name', 'Dash Dunmire');
      expect(result).toHaveProperty('potentialAction');
      expect(result.potentialAction).toHaveProperty('@type', 'SearchAction');
    });
  });
});
