import { marked } from "marked";

export function exportToHTML(title, markdown) {
  const htmlContent = marked(markdown);

  const fullHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>${title}</title>
  <style>
    body {
      font-family: system-ui, -apple-system;
      padding: 40px;
      line-height: 1.6;
      max-width: 800px;
      margin: auto;
    }
    h1, h2, h3 { margin-top: 1.5em; }
    pre {
      background: #f5f5f5;
      padding: 10px;
      overflow-x: auto;
    }
  </style>
</head>
<body>
${htmlContent}
</body>
</html>
`;

  const blob = new Blob([fullHtml], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${title || "post"}.html`;
  a.click();

  URL.revokeObjectURL(url);
}
