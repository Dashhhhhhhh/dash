#!/usr/bin/env node

/**
 * Build-time validation script for resume data
 * This script validates the resume.json structure and ensures data integrity
 * Run with: node scripts/validate-resume.js
 */

const fs = require('fs');
const path = require('path');

// Validation functions
const validateBasics = (basics) => {
  const required = ['name', 'headline', 'location', 'email', 'phone'];
  const missing = required.filter(field => !basics[field] || typeof basics[field] !== 'string');

  if (missing.length > 0) {
    throw new Error(`Missing required fields in basics: ${missing.join(', ')}`);
  }

  if (basics.links && !Array.isArray(basics.links)) {
    throw new Error('basics.links must be an array');
  }

  return true;
};

const validateArray = (data, fieldName, requiredFields) => {
  if (!Array.isArray(data)) {
    throw new Error(`${fieldName} must be an array`);
  }

  data.forEach((item, index) => {
    const missing = requiredFields.filter(field => !item[field]);
    if (missing.length > 0) {
      throw new Error(`${fieldName}[${index}] missing required fields: ${missing.join(', ')}`);
    }
  });

  return true;
};

const validateSkills = (skills) => {
  const categories = ['languages', 'frameworks', 'tools', 'other'];

  categories.forEach(category => {
    if (skills[category] && !Array.isArray(skills[category])) {
      throw new Error(`skills.${category} must be an array`);
    }
  });

  return true;
};

// Main validation function
const validateResumeData = (data) => {
  console.log('🔍 Validating resume data structure...');

  try {
    // Validate basics
    validateBasics(data.basics);
    console.log('✅ Basics section validated');

    // Validate arrays
    if (data.education) {
      validateArray(data.education, 'education', ['school', 'degree']);
      console.log('✅ Education section validated');
    }

    if (data.experience) {
      validateArray(data.experience, 'experience', ['company', 'role']);
      console.log('✅ Experience section validated');
    }

    if (data.projects) {
      validateArray(data.projects, 'projects', ['name']);
      console.log('✅ Projects section validated');
    }

    if (data.awards) {
      validateArray(data.awards, 'awards', ['title', 'issuer', 'date']);
      console.log('✅ Awards section validated');
    }

    // Validate skills
    if (data.skills) {
      validateSkills(data.skills);
      console.log('✅ Skills section validated');
    }

    console.log('🎉 Resume data validation passed!');
    return true;

  } catch (error) {
    console.error('❌ Validation failed:', error.message);
    process.exit(1);
  }
};

// Main execution
const main = () => {
  const resumePath = path.join(process.cwd(), 'data', 'resume.json');

  try {
    if (!fs.existsSync(resumePath)) {
      console.error(`❌ Resume file not found: ${resumePath}`);
      console.log('💡 Make sure to create data/resume.json with your resume data');
      process.exit(1);
    }

    const fileContents = fs.readFileSync(resumePath, 'utf8');
    const resumeData = JSON.parse(fileContents);

    validateResumeData(resumeData);

    // Additional checks
    const sections = ['basics', 'education', 'experience', 'projects', 'skills'];
    const presentSections = sections.filter(section => resumeData[section]);
    const emptySections = sections.filter(section =>
      !resumeData[section] ||
      (Array.isArray(resumeData[section]) && resumeData[section].length === 0) ||
      (typeof resumeData[section] === 'object' && Object.keys(resumeData[section]).length === 0)
    );

    console.log(`📊 Sections present: ${presentSections.join(', ')}`);
    if (emptySections.length > 0) {
      console.log(`⚠️  Empty sections: ${emptySections.join(', ')}`);
    }

    console.log('✅ Build validation complete!');

  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('❌ Invalid JSON syntax in resume.json');
      console.error('💡 Check your JSON formatting');
    } else {
      console.error('❌ Error reading resume file:', error.message);
    }
    process.exit(1);
  }
};

// Run validation if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = { validateResumeData };
