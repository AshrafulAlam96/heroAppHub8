import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'   // optional icons if lucide-react installed

import Logo from '../assets/logo.png'
import gh from '../assets/git.png'


export default function Header() {
  const [open, setOpen] = useState(false)

  const navClass = ({ isActive }) =>
    isActive
      ? 'text-primary font-semibold underline underline-offset-4'
      : 'text-base-content hover:text-primary'

  return (
    <header className="bg-base-100 shadow-sm sticky top-0 z-50">
      <div className="navbar container mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo / Brand */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 text-white flex items-center justify-center font-bold text-lg rounded-md">
            <img className='' src={Logo}/>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-300">HeroAppHub8</h1>
            <p className="text-xs font-bold text-blue-500 font-mono">App Store & Manager</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/" className={navClass}>Home</NavLink>
          <NavLink to="/apps" className={navClass}>Apps</NavLink>
          <NavLink to="/installation" className={navClass}>Installation</NavLink>
        </nav>

        <a href="https://github.com/AshrafulAlam96/heroAppHub8/tree/main/heroapphub8"className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl  bg-gradient-to-r from-indigo-800 to-indigo-500">
          <img className='h-10 w-10' src={gh} /> Contribute
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded hover:bg-base-200"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-base-100 border-t">
          <div className="flex flex-col px-4 py-3 space-y-2">
            <NavLink
              to="/"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/apps"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Apps
            </NavLink>
            <NavLink
              to="/installation"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Installation
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
