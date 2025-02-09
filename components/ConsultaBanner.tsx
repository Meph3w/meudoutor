import Link from "next/link"

export default function ConsultaBanner() {
  return (
    <div className="bg-blue-900 py-4">
      <div className="container mx-auto px-4 text-center">
        <Link
          href="https://www.blog.eidoc.com.br/telemedicina"
          className="text-white font-bold text-lg hover:underline"
        >
          Agende agora sua consulta!
        </Link>
      </div>
    </div>
  )
}

