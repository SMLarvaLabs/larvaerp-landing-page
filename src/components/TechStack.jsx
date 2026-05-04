export default function TechStack() {
  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'TypeScript', icon: '🔷', category: 'Language' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'Styling' },
    { name: 'Fastify', icon: '⚡', category: 'Backend' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Drizzle ORM', icon: '💾', category: 'ORM' },
    { name: 'Vite', icon: '⚙️', category: 'Build' },
    { name: 'Cloudflare', icon: '☁️', category: 'Deployment' }
  ]

  return (
    <section id="tech" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Modern Tech Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Built with proven, scalable technologies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-slate-200/50 bg-gradient-to-br from-white to-slate-50 hover:border-blue-300 hover:shadow-md smooth-transition text-center"
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="font-bold text-slate-900 mb-1">{tech.name}</h3>
              <p className="text-sm text-slate-600">{tech.category}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why This Stack?</h3>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Performance:</strong> Fastify is one of the fastest Node.js frameworks</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Type Safety:</strong> TypeScript prevents entire classes of bugs</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Database:</strong> PostgreSQL with Drizzle provides robust data layer</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Scalability:</strong> Modular architecture scales with your business</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">✓</span>
              <span><strong>Deployment:</strong> Cloudflare's global network ensures fast, reliable access</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
