export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold">◆</span>
              </div>
              <span className="text-lg font-bold text-white">LarvaERP</span>
            </div>
            <p className="text-sm">
              Modern modular ERP system for enterprises
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-blue-400 smooth-transition">Features</a></li>
              <li><a href="#modules" className="hover:text-blue-400 smooth-transition">Modules</a></li>
              <li><a href="#tech" className="hover:text-blue-400 smooth-transition">Tech Stack</a></li>
              <li><a href="https://larvaerp.larvalabs-apps.store" className="hover:text-blue-400 smooth-transition">Launch App</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 smooth-transition">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 smooth-transition">API Reference</a></li>
              <li><a href="#" className="hover:text-blue-400 smooth-transition">Demo Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 smooth-transition">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 smooth-transition">About</a></li>
              <li><a href="#" className="hover:text-blue-400 smooth-transition">Privacy</a></li>
              <li><a href="#" className="hover:text-blue-400 smooth-transition">Terms</a></li>
              <li><a href="#" className="hover:text-blue-400 smooth-transition">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>&copy; 2026 LarvaLabs. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-400 smooth-transition">Twitter</a>
              <a href="#" className="hover:text-blue-400 smooth-transition">GitHub</a>
              <a href="#" className="hover:text-blue-400 smooth-transition">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
