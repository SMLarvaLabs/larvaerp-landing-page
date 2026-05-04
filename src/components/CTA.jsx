export default function CTA() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="p-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Launch LarvaERP today and experience the power of integrated enterprise management. Start with demo data and scale with your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <a
              href="https://larvaerp.larvalabs-apps.store"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:shadow-xl smooth-transition"
            >
              Launch LarvaERP Now
            </a>
            <a
              href="#features"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 smooth-transition"
            >
              View Features
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
