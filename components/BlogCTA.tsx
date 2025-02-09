import Link from "next/link"

export default function BlogCTA() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Precisando de atendimento médico?</h2>
      <p className="text-gray-300 mb-4">
        Nossa equipe está à disposição para atender você e sua família, de forma 100% remota.
      </p>
      <Link
        href="https://www.blog.eidoc.com.br/telemedicina"
        className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors inline-block"
      >
        Agende agora!
      </Link>
    </div>
  )
}

