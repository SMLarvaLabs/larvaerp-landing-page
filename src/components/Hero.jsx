export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold gradient-text leading-tight">
            Modern ERP for the Enterprise
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto">
            Manage inventory, purchases, sales, and jewellery operations with elegant efficiency. Built for businesses that scale.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="https://larvaerp.larvalabs-apps.store"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg smooth-transition"
          >
            Launch App →
          </a>
          <a
            href="#features"
            className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 smooth-transition"
          >
            Learn More
          </a>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-sm">
          <div>
            <p className="text-3xl font-bold gradient-text">50+</p>
            <p className="text-slate-600 mt-1">Demo Records</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">6</p>
            <p className="text-slate-600 mt-1">Core Modules</p>
          </div>
          <div>
            <p className="text-3xl font-bold gradient-text">3</p>
            <p className="text-slate-600 mt-1">Stock Locations</p>
          </div>
        </div>
      </div>
    </section>
  )
}
