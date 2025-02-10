// /app/utils/markdownToHtml.ts
import { remark } from 'remark'; // Alterado para importação nomeada
import html from 'remark-html';

// Função assíncrona para converter Markdown em HTML
export async function convertMarkdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html)
    .process(markdown);
  
  return result.toString();
}
