const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/hafid/Documents/Project/React/porto/src/assets/image/traditional/v2';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.svg') && f !== 'bg bulat.svg');

const filterDef = `<filter id="recolor" color-interpolation-filters="sRGB"><feFlood flood-color="currentColor" result="flood"/><feComposite in="flood" in2="SourceAlpha" operator="in"/></filter>`;

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already applied
  if (content.includes('id="recolor"')) {
    console.log(`Skipping ${file}, already has filter.`);
    return;
  }

  // Inject filter into defs
  if (content.includes('</defs>')) {
    content = content.replace('</defs>', `${filterDef}</defs>`);
  } else {
    // No defs, create one after svg open tag, checking for xml declaration
    const svgTagMatch = content.match(/<svg[^>]*>/);
    if (svgTagMatch) {
        const svgTag = svgTagMatch[0];
        const index = svgTagMatch.index + svgTag.length;
        content = content.slice(0, index) + `<defs>${filterDef}</defs>` + content.slice(index);
    }
  }

  // Apply filter to svg root
  content = content.replace(/<svg([^>]*)>/, '<svg$1 filter="url(#recolor)">');

  fs.writeFileSync(filePath, content);
  console.log(`Updated ${file}`);
});
