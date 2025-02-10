import { getPostData, getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"
import Image from "next/image"
import BlogCTA from "../../../components/BlogCTA"
import { convertMarkdownToHtml } from "../../markdownToHtml"

// Função para buscar parâmetros de slug
export async function generateStaticParams() {
  const posts: Post[] = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.id,
  }));
}

// Função principal para a página de post
export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug)

  if (!postData) {
    notFound();
  }

  // Converte o conteúdo Markdown para HTML
  const contentHtml = await convertMarkdownToHtml(postData.content)

  return (
    <div className="bg-[#161616] text-white">
      <div className="py-12">
        <article className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
            <div className="mb-8 flex items-center justify-between">
              <span className="text-gray-400 text-sm">
                {new Date(postData.date).toLocaleDateString("pt-BR")} | Por {postData.author}
              </span>
            </div>
            {postData.image && (
              <div className="mb-8">
                <Image
                  src={postData.image || "/placeholder.svg"}
                  alt={postData.title}
                  width={512}
                  height={288}
                  className="rounded-lg"
                />
              </div>
            )}
            <div className="markdown-content prose max-w-none text-white">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
            <BlogCTA />
          </div>
        </article>
      </div>
    </div>
  );
}
