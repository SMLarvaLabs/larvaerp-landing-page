export default function Features() {
  const features = [
    {
      icon: '📦',
      title: 'Inventory Management',
      description: 'Track stock across multiple locations with real-time updates and intelligent forecasting.'
    },
    {
      icon: '🛒',
      title: 'Purchase Orders',
      description: 'Streamline procurement with automated PO creation, tracking, and supplier management.'
    },
    {
      icon: '💰',
      title: 'Sales Management',
      description: 'Complete sales pipeline from quotes to delivery with integrated payments and analytics.'
    },
    {
      icon: '💎',
      title: 'Jewellery Module',
      description: 'Specialized tools for jewellery businesses: designs, metals, stones, and collections.'
    },
    {
      icon: '👥',
      title: 'Contacts Database',
      description: 'Unified management of customers, suppliers, and contacts with detailed profiles.'
    },
    {
      icon: '📊',
      title: 'Analytics & Reports',
      description: 'Deep insights into business performance with customizable dashboards and exports.'
    }
  ]

  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">
            Powerful Features
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to run your enterprise efficiently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-slate-200/50 hover:border-blue-200 hover:shadow-lg smooth-transition bg-white/50 backdrop-blur"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
