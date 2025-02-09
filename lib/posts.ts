import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "app", "posts")

export function getSortedPostsData() {
  // Verificar se o diretório existe
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`O diretório ${postsDirectory} não existe. Criando...`)
    fs.mkdirSync(postsDirectory, { recursive: true })
    return [] // Retorna um array vazio se não houver posts
  }

  // Obter nomes de arquivos sob /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remover ".md" do nome do arquivo para obter o id
    const id = fileName.replace(/\.md$/, "")

    // Ler o arquivo Markdown como string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, "utf8")

    // Usar gray-matter para analisar a seção de metadados do post
    const matterResult = matter(fileContents)

    // Combinar os dados com o id
    return {
      id,
      ...(matterResult.data as { date: string; title: string; excerpt: string; author: string; image?: string }),
    }
  })
  // Ordenar posts por data
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  // Usar gray-matter para analisar a seção de metadados do post
  const matterResult = matter(fileContents)

  // Combinar os dados com o id e conteúdo
  return {
    id,
    content: matterResult.content,
    ...(matterResult.data as { date: string; title: string; excerpt: string; author: string; image?: string }),
  }
}

