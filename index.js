const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');
const path = './README.md';
const dest = './README.pdf';

(async () => {
  const pdf = await mdToPdf({ path }, { dest }).catch(console.error);
  if (pdf) {
    fs.writeFileSync(pdf.filename, pdf.content);
  }
  console.log('md-to-pdf done');
})();
