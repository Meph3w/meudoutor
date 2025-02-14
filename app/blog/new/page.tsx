"use client"

import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import dynamic from "next/dynamic"

const RichTextEditor = dynamic(() => import("../../../components/RichTextEditor"), { ssr: false })

export default function NewBlogPost() {
  const { data: session } = useSession()
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [slug, setSlug] = useState("")
  const [content, setContent] = useState("")

  if (!session) {
    router.push("/login")
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the blog post data to your backend
    console.log("Submitting blog post:", { title, slug, content })
    // After submitting, redirect to the blog page
    router.push("/blog")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Criar Novo Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Título
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-gray-700">
            Slug da URL
          </label>
          <input
            type="text"
            id="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Conteúdo
          </label>
          <RichTextEditor content={content} setContent={setContent} />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Publicar Post
          </button>
        </div>
      </form>
    </div>
  )
}

