const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

async function extractResumeData() {
  try {
    const pdfPath = path.join(__dirname, 'Dash Dunmire - Resume.pdf');
    const dataBuffer = fs.readFileSync(pdfPath);

    const data = await pdfParse(dataBuffer);

    console.log('=== PDF EXTRACTION RESULTS ===');
    console.log('Number of pages:', data.numpages);
    console.log('Total characters:', data.text.length);
    console.log('\n=== RAW TEXT CONTENT ===\n');
    console.log(data.text);

    // Try to identify key sections
    const text = data.text;
    console.log('\n=== SECTION ANALYSIS ===');

    // Look for common resume sections
    const sections = {
      contact: /[^\n]*@.*\.(com|org|edu)/i,
      experience: /(experience|employment|work)/i,
      education: /education|university|college|degree/i,
      skills: /skills|technologies|programming|languages/i,
      projects: /projects?|portfolio/i,
    };

    Object.entries(sections).forEach(([section, regex]) => {
      const matches = text.match(regex);
      if (matches) {
        console.log(`${section.toUpperCase()}: Found patterns - ${matches.join(', ')}`);
      }
    });

    // Extract lines for manual parsing
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    console.log('\n=== CLEANED LINES ===');
    lines.slice(0, 50).forEach((line, i) => {
      console.log(`${i + 1}: ${line}`);
    });

    return data.text;
  } catch (error) {
    console.error('Error extracting PDF:', error);
  }
}

extractResumeData();
