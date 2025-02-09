export default function Hero() {
  return (
    <section className="bg-[#161616] py-12 sm:py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          <span className="text-white">meudoutor</span>
          <span className="text-green-500">.digital</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          Transformando o cuidado com a saúde através da tecnologia e inovação
        </p>
        <a
          href="https://www.blog.eidoc.com.br/telemedicina"
          className="bg-green-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-green-700 transition-colors inline-block text-sm sm:text-base"
        >
          Agende sua Teleconsulta
        </a>
      </div>
    </section>
  )
}

