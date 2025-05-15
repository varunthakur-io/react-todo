import fs from 'fs';
import path from 'path'; // Add this line
import { sync as globSync } from 'glob';

// Define the source directory
const srcDir = 'src';

// Output file path
const outputPath = 'combinedFile.js';

// Function to combine files
const combineFiles = async () => {
  // Find all .js and .jsx files in the src directory and subdirectories
  const files = globSync(`${srcDir}/**/*.@(js|jsx)`);

  if (files.length === 0) {
    console.log('No JavaScript or JSX files found.');
    return;
  }

  let combinedContent = '';

  for (const file of files) {
    const filePath = path.join(process.cwd(), file);
    console.log(`Reading file: ${filePath}`); // Debug information
    try {
      const fileContent = await fs.promises.readFile(filePath, 'utf8');
      combinedContent += `// path: ${file}\n${fileContent}\n\n`;
    } catch (error) {
      console.error(`Error reading file ${filePath}:`, error.message);
      return;
    }
  }

  try {
    await fs.promises.writeFile(outputPath, combinedContent, 'utf8');
    console.log(`Combined file created at ${outputPath}`);
  } catch (error) {
    console.error(`Error writing combined file:`, error.message);
  }
};

// Execute the function
combineFiles().catch(err => {
  console.error('Error combining files:', err);
});
