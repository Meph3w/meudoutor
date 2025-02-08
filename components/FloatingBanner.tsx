import Link from "next/link"

export default function FloatingBanner() {
  return (
    <div className="fixed left-0 bottom-0 w-full bg-blue-900 text-white p-4 text-center shadow-lg">
      <Link href="https://www.blog.eidoc.com.br/telemedicina" className="font-bold text-lg">
        AGENDE AGORA SUA TELECONSULTA!
      </Link>
    </div>
  )
}

