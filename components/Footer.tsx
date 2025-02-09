import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#161616] text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between py-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">meudoutor</span>
              <span className="text-green-500">.digital</span>
            </h3>
            <p className="text-gray-400">
              Powered by{" "}
              <Link href="https://www.blog.eidoc.com.br/" className="text-gray-400 hover:text-white transition-colors">
                Ei, Doc!
              </Link>
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.blog.eidoc.com.br/telemedicina"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Agende sua consulta!
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <address className="text-gray-400 not-italic">
              R. José Martins Cota, 143
              <br />
              Rio Piracicaba, MG
              <br />
              35940-000
            </address>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <p className="text-center text-gray-400 text-sm py-4">
          &copy; {new Date().getFullYear()} meudoutor.digital, 2025. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

