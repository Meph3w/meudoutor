import Link from "next/link"
import { getSortedPostsData } from "@/lib/posts"

export default function BlogPage() {
  const allPostsData = getSortedPostsData()

  return (
    <div className="bg-[#161616]">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>
          {allPostsData.length === 0 ? (
            <p className="text-white">Nenhum post encontrado.</p>
          ) : (
            <div className="space-y-8">
              {allPostsData.map(({ id, date, title, excerpt, author }) => (
                <article key={id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                  <Link href={`/blog/${id}`}>
                    <h2 className="text-xl font-semibold text-white mb-2 hover:text-green-500 transition-colors">
                      {title}
                    </h2>
                  </Link>
                  <p className="text-gray-300 mb-3">{excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">
                      {new Date(date).toLocaleDateString("pt-BR")} | Por {author}
                    </span>
                    <Link
                      href={`/blog/${id}`}
                      className="text-green-500 hover:text-green-400 transition-colors text-sm"
                    >
                      Ler mais →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

