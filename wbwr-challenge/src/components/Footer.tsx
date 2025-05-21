export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1: Logo */}
          <div>
            <h3 className="text-xl font-bold mb-4">WBWR</h3>
            <p className="text-gray-400">Innovating for the future.</p>
          </div>
          
          {/* Column 2: Links */}
          <div>
            <h4 className="font-semibold mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Features</a></li>
            </ul>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#"><span className="sr-only">Twitter</span>🐦</a>
            <a href="#"><span className="sr-only">LinkedIn</span>🔗</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          © 2024 WBWR. All rights reserved.
        </div>
      </div>
    </footer>
  );
};