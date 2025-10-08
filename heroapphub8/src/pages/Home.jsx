import React from 'react'
import apps from '../data/apps.json'
import AppCard from '../components/AppCard'
import { Link } from 'react-router-dom'

export default function Home(){
  const top8 = apps.slice(0,8)

  return (
    <div>
      {/* Banner */}
      <section className="text-center py-12">
        <h1 className="text-3xl md:text-5xl font-bold">Discover amazing apps</h1>
        <p className="text-gray-600 mt-3">Explore, install and manage apps quickly with HeroHub.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="btn btn-primary">App Store</a>
          <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="btn btn-outline">Play Store</a>
        </div>
      </section>

      {/* States */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="p-6 rounded-lg" style={{background:'#FDE68A'}}>Fast Downloads</div>
        <div className="p-6 rounded-lg" style={{background:'#BFDBFE'}}>Top Rated</div>
        <div className="p-6 rounded-lg" style={{background:'#ADE9C8'}}>Secure & Safe</div>
      </section>

      {/* Top apps */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Top Apps</h2>
          <Link to="/apps" className="btn btn-sm">Show All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {top8.map(a => <AppCard key={a.id} app={a} />)}
        </div>
      </section>
    </div>
  )
}