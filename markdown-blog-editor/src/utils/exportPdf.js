import html2pdf from "html2pdf.js";
import { marked } from "marked";

export function exportToPDF(title, markdown) {
  const htmlContent = marked(markdown);

  const container = document.createElement("div");
  container.innerHTML = `
    <h1>${title}</h1>
    ${htmlContent}
  `;

  html2pdf()
    .set({
      margin: 10,
      filename: `${title || "post"}.pdf`,
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    })
    .from(container)
    .save();
}
