export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">◆</span>
          </div>
          <span className="text-xl font-bold gradient-text">LarvaERP</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-600 hover:text-blue-600 smooth-transition font-medium text-sm">Features</a>
          <a href="#modules" className="text-slate-600 hover:text-blue-600 smooth-transition font-medium text-sm">Modules</a>
          <a href="#tech" className="text-slate-600 hover:text-blue-600 smooth-transition font-medium text-sm">Tech</a>
        </div>

        <a href="https://larvaerp.larvalabs-apps.store" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg smooth-transition">
          Launch App →
        </a>
      </nav>
    </header>
  )
}
