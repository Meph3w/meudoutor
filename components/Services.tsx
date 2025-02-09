export default function Services() {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Consulta Online" description="Atendimento médico de qualidade no conforto da sua casa." />
          <ServiceCard
            title="Atendimento Especializado"
            description="Profissionais especializados para cuidar da sua saúde."
          />
          <ServiceCard title="Telemedicina" description="Tecnologia avançada para facilitar seu acesso à saúde." />
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  )
}

