import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "app/posts");

// Interface do post
export interface Post {
  id: string;
  title: string;
  date: string;
  author: string;
  content: string;
  image?: string;
}

// Lista todos os posts e extrai os metadados do frontmatter
export function getSortedPostsData(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      id,
      title: data.title,
      date: data.date,
      author: data.author,
      content,
      image: data.image || "",
    };
  });

  // Ordenar os posts pela data (mais recente primeiro)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Obtém os dados de um único post
export function getPostData(id: string): Post | null {
  const fullPath = path.join(postsDirectory, `${id}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    id,
    title: data.title,
    date: data.date,
    author: data.author,
    content,
    image: data.image || "",
  };
}
