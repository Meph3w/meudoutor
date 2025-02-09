import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-[#161616] shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0">
            <span className="text-white">meudoutor</span>
            <span className="text-green-500">.digital</span>
          </Link>
          <div className="space-x-4 sm:space-x-6 text-sm sm:text-base">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Início
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link
              href="https://www.blog.eidoc.com.br/telemedicina"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Agende sua consulta!
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

