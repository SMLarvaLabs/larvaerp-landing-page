export default function Modules() {
  const modules = [
    {
      name: 'Inventory',
      stats: [
        '300+ stock levels',
        '3 warehouse locations',
        'Multi-location tracking'
      ]
    },
    {
      name: 'Purchase Orders',
      stats: [
        '2 sample POs',
        '₹147.5K total value',
        'Complete audit trail'
      ]
    },
    {
      name: 'Sales Orders',
      stats: [
        '2 demo transactions',
        '₹295K gross value',
        'Order-to-delivery flow'
      ]
    },
    {
      name: 'Jewellery',
      stats: [
        '4 metals, 5 stones',
        '3 collections',
        '4 designs with finishes'
      ]
    }
  ]

  return (
    <section id="modules" className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Demo Data Included
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Explore with 50+ pre-loaded records across all modules
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-purple-400/20 bg-white/5 backdrop-blur hover:border-purple-400/40 hover:bg-white/10 smooth-transition"
            >
              <h3 className="text-2xl font-bold mb-6 text-purple-300">{module.name}</h3>
              <ul className="space-y-3">
                {module.stats.map((stat, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-300">
                    <span className="text-purple-400 font-bold mt-1">→</span>
                    <span>{stat}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-400 mb-6">
            Start with sample data and customize for your business
          </p>
          <a
            href="https://larvaerp.larvalabs-apps.store"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg smooth-transition"
          >
            Try Demo Now
          </a>
        </div>
      </div>
    </section>
  )
}
