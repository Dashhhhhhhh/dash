# Resume Data Layer

This directory contains the resume data management utilities that provide a robust, type-safe interface to the resume JSON data.

## Overview

The resume data layer consists of:

- **`resume.ts`** - Main utility with validation, loading, and typed getters
- **`design-tokens.ts`** - Design system constants for consistent styling

## Usage

### Basic Usage

```typescript
import { loadResumeData, getResumeBasics } from '@/lib/resume';

// Load complete resume data
const resume = await loadResumeData();

// Get specific sections
const basics = await getResumeBasics();
```

### Filtered Data (handles empty/null gracefully)

```typescript
import {
  getNonEmptyEducation,
  getNonEmptyExperience,
  hasProjects
} from '@/lib/resume';

// Get only non-empty education entries
const education = await getNonEmptyEducation();

// Check if sections have content
const hasProjects = await hasProjects();
```

### Available Functions

#### Data Loading
- `loadResumeData()` - Load complete resume with validation
- `getResumeBasics()` - Get basic contact information
- `getResumeEducation()` - Get education history
- `getResumeExperience()` - Get work experience
- `getResumeProjects()` - Get project portfolio
- `getResumeSkills()` - Get skills and technologies
- `getResumeAwards()` - Get awards and certifications

#### Filtered Data
- `getNonEmptyEducation()` - Education with required fields
- `getNonEmptyExperience()` - Experience with required fields
- `getNonEmptyProjects()` - Projects with valid data
- `getNonEmptyAwards()` - Awards with complete information

#### Utility Functions
- `hasEducation()` - Check if education section has content
- `hasExperience()` - Check if experience section has content
- `hasProjects()` - Check if projects section has content
- `hasAwards()` - Check if awards section has content

## Data Structure

The resume follows this TypeScript interface:

```typescript
interface ResumeData {
  basics: {
    name: string;
    headline: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    links: Array<{ label: string; url: string }>;
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
  awards: Array<{
    title: string;
    issuer: string;
    date: string;
    notes: string;
  }>;
}
```

## Validation

The utility includes comprehensive build-time validation:

### Automatic Validation
- Runs during `npm run build`
- Validates JSON structure and required fields
- Fails build on malformed data
- Provides detailed error messages

### Manual Validation
```bash
npm run validate
```

### Validation Rules
- **Required fields**: Ensures critical data is present
- **Type checking**: Validates data types (string, array, object)
- **Array validation**: Checks array contents for required properties
- **Data integrity**: Verifies relationships between fields

## Component Integration

Components should import from this utility instead of direct file access:

```typescript
// ❌ Don't do this
import resumeData from '../../../data/resume.json';

// ✅ Do this instead
import { getResumeBasics } from '@/lib/resume';

export default async function MyComponent() {
  const basics = await getResumeBasics();
  return <div>{basics.name}</div>;
}
```

## Benefits

1. **Type Safety**: Full TypeScript support with validated interfaces
2. **Build-time Validation**: Catches data errors before deployment
3. **Stable Ordering**: Consistent section ordering across renders
4. **Null Safety**: Handles empty/null data gracefully
5. **Performance**: Singleton pattern prevents multiple file reads
6. **Maintainability**: Centralized data access and validation logic

## Error Handling

The utility provides clear error messages for common issues:

- **Missing file**: `data/resume.json` not found
- **Invalid JSON**: Syntax errors in JSON structure
- **Missing fields**: Required fields are empty
- **Type errors**: Data doesn't match expected types
- **Validation failures**: Custom validation rules failed

## Development

To modify the data structure:

1. Update the TypeScript interfaces in `resume.ts`
2. Update validation functions to match new structure
3. Update components that consume the data
4. Test with `npm run validate` and `npm run build`
