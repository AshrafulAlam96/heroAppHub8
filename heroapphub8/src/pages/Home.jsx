import React from 'react'
import apps from '../data/apps.json'
import AppCard from '../components/AppCard'
import { Link } from 'react-router-dom'
import AppStore from '../assets/App_Store.png'
import Play from '../assets/google-play.png'
import Hero from '../assets/hero.png'

export default function Home(){
  const top8 = apps.slice(0,8)

  return (
    <div>
      {/* Banner */}
      <section className="text-center py-12">
        <div className="text-9xl md:text-5xl font-bold text-blue-950">We Build <br></br><span className='bg-gradient-to-r from-indigo-800 to-indigo-500 bg-clip-text text-transparent'>Amazing</span> Apps</div>
        <p className="text-gray-600 mt-3">Explore, install and manage apps quickly with HeroHub.</p>
        <div className="mt-6 flex justify-center gap-4">
          <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="btn btn-active bg-amber-50 text-black">
            <img className='h-8 w-8' src={AppStore} />App Store</a>
          <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="btn btn-active bg-amber-50 text-black"><img className='h-8 w-8' src={Play} />Play Store</a>
        </div>
      </section>

      {/* Banner-Image */}
     
        <div className="flex justify-center items-center">
          <img
            src={Hero}
            alt="Banner-Image"
            className="w-2xl h-auto"/>
        </div>

       <section className="bg-gradient-to-r from-amber-700 to-amber-900 text-white py-15">
        <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Trusted By Millions, Built For You
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Total Downloads */}
          <div>
            <h3 className="text-4xl font-bold">29.6M</h3>
            <p className="text-sm text-purple-200">21% More Than Last Month</p>
            <p className="mt-2 text-lg font-medium">Total Downloads</p>
          </div>

          {/* Total Reviews */}
          <div>
            <h3 className="text-4xl font-bold">906K</h3>
            <p className="text-sm text-purple-200">46% More Than Last Month</p>
            <p className="mt-2 text-lg font-medium">Total Reviews</p>
          </div>

          {/* Active Apps */}
          <div>
            <h3 className="text-4xl font-bold">132+</h3>
            <p className="text-sm text-purple-200">31 More Will Launch</p>
            <p className="mt-2 text-lg font-medium">Active Apps</p>
          </div>
        </div>
      </div>
    </section>

      {/* Stats */}
      
      <section>
        <div className="max-w-6xl mx-auto text-center px-4 p-5">
          <h2 className="text-3xl font-semibold text-amber-900 p-0.5">Top Charted Apps</h2>
          <p className='text-sm text-cyan-900 p-2'>Choose Your Favourite Applications</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          {top8.map(a => <AppCard key={a.id} app={a} />)}
        </div>
          <Link to="/apps" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg  bg-gradient-to-r from-amber-800 to-amber-500">Show All</Link>
        </div>  
      </section>
    </div>
  )
}