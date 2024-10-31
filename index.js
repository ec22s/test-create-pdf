const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
const path = './example.md';
const dest = path.replace(/\.md$/, '.pdf');

(async () => {
  const pdf = await mdToPdf({ path }, { dest }).catch(console.error);
  if (pdf) {
    fs.writeFileSync(pdf.filename, pdf.content);
  }
  console.log('md-to-pdf done');
})();
