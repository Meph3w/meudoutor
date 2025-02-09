import { getPostData, getSortedPostsData } from "@/lib/posts"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import BlogCTA from "@/components/BlogCTA"

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export default function Post({ params }: { params: { slug: string } }) {
  const postData = getPostData(params.slug)

  if (!postData) {
    notFound()
  }

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
                  width={800}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            )}
            <div className="prose prose-lg prose-invert max-w-none">
              <ReactMarkdown>{postData.content}</ReactMarkdown>
            </div>
            <BlogCTA />
          </div>
        </article>
      </div>
    </div>
  )
}
