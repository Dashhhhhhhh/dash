import { Project } from '@/types/project';

export function personJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dash Dunmire',
    alternateName: 'Dash',
    jobTitle: 'Finance Student',
    affiliation: {
      '@type': 'Organization',
      name: 'The Ohio State University',
    },
    description: 'Passionate finance student at The Ohio State University with expertise in technology, including Python, React, and quantum computing.',
    knowsAbout: [
      'Finance',
      'Quantitative Analysis',
      'Python',
      'React',
      'Quantum Computing',
      'Machine Learning',
      'Algorithmic Trading',
      'Data Science'
    ],
    sameAs: [
      'https://github.com/Dashhhhhhhh',
      'https://linkedin.com/in/dash-dunmire',
      'https://dashdunmire.dev'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'professional',
      email: 'dash.dunmire@example.com',
      availableLanguage: 'English'
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'The Ohio State University'
    }
  };
}

export function projectJsonLd(project: Project) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.summary,
    author: {
      '@type': 'Person',
      name: 'Dash Dunmire'
    },
    programmingLanguage: project.stack,
    keywords: project.tags.join(', '),
    codeRepository: project.repoUrl,
    url: project.demoUrl || project.repoUrl,
    dateCreated: project.date,
    dateModified: project.date,
    about: {
      '@type': 'Thing',
      name: project.problem,
      description: project.problem
    },
    applicationCategory: project.tags.includes('web') ? 'WebApplication' : 'SoftwareApplication',
    operatingSystem: 'Cross-platform',
    offers: project.demoUrl ? {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: project.date
    } : undefined
  };
}

export function breadcrumbsJsonLd(project?: Project) {
  const breadcrumbs = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://dashdunmire.dev'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Projects',
      item: 'https://dashdunmire.dev/projects'
    }
  ];

  if (project) {
    breadcrumbs.push({
      '@type': 'ListItem',
      position: 3,
      name: project.title,
      item: `https://dashdunmire.dev/projects/${project.slug}`
    });
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Dash Dunmire - Portfolio',
    description: 'Personal portfolio of Dash Dunmire, finance student at The Ohio State University specializing in quantitative finance and technology.',
    url: 'https://dashdunmire.dev',
    author: {
      '@type': 'Person',
      name: 'Dash Dunmire'
    },
    publisher: {
      '@type': 'Person',
      name: 'Dash Dunmire'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://dashdunmire.dev/projects?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };
}
