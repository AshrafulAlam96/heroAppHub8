import Logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-base-200 text-white mt-10">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div>
          <div className="w-30 h-25 text-white flex items-center justify-center font-bold text-lg rounded-md">
            <img className='' src={Logo}/>
          </div>
          <h2 className="text-2xl font-bold text-blue-300 mb-2">HeroAppHub8</h2>
          <p className="text-gray-400 text-sm">
            Made with ❤️ — React, Tailwind, DaisyUI
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Mission</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Products</a></li>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Developer Apps</a></li>
          </ul>
        </div>

        {/* Column 4: Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Information</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} HeroAppHub8. All rights reserved.
      </div>
    </footer>
  )
}
