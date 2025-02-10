// /utils/markdownToHtml.js
import { remark } from 'remark';
import html from 'remark-html';

// Função para converter Markdown em HTML
export function convertMarkdownToHtml(markdown) {
  const result = remark().use(html).processSync(markdown);
  return result.toString();
}
