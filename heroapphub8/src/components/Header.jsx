import { NavLink, Link } from 'react-router-dom'

export default function Header(){
  const navClass = ({isActive}) => isActive ? 'text-primary font-semibold' : 'text-base-content'
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary text-white flex items-center justify-center rounded">H</div>
          <div>
            <div className="text-lg font-bold">HeroHub</div>
            <div className="text-xs text-gray-500">App Store & Manager</div>
          </div>
        </Link>

        <nav className="space-x-6">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/apps" className={navClass}>Apps</NavLink>
          <NavLink to="/installation" className={navClass}>Installation</NavLink>
        </nav>
      </div>
    </header>
  )
}
