import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import apps from '../data/apps.json'
import { installApp, isInstalled } from '../utils/storage'
import Toast from '../components/Toast'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

import Download from '../assets/icon-downloads.png'
import Rate from '../assets/icon-ratings.png'
import Review from '../assets/icon-review.png'

export default function AppDetails() {
  const { id } = useParams()
  const app = apps.find(a => a.id === Number(id))
  const [installed, setInstalled] = useState(app ? isInstalled(app.id) : false)
  const [toastMsg, setToastMsg] = useState('')

  if (!app) {
    return <div className="p-6 bg-white rounded shadow text-center">App not found 😢</div>
  }

  const handleInstall = () => {
    const ok = installApp(app.id)
    if (ok) {
      setInstalled(true)
      setToastMsg('App installed successfully ✅')
    } else {
      setInstalled(true)
      setToastMsg('App is already installed')
    }
  }

  const chartData = app.ratings.map(r => ({
    name: r.name.replace(' star', ''),
    count: r.count,
  })).reverse()

  return (
    <div className="bg-base-100 min-h-screen py-10 px-4">
      {/* Top section */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-gray-800 rounded-2xl shadow p-6 md:p-10 mb-10">
        <img
          src={app.image}
          alt={app.title}
          className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-2xl shadow"
        />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-1">{app.title}</h1>
          <p className="text-blue-300 mb-2">Developed by <span className='text-amber-200 font-semibold'>{app.companyName}</span></p>
          <hr className="my-4 border-gray-300" />
          
          {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 items-center text-center bg-gray-900 shadow p-6 rounded-2xl mb-10">
            <div className="text-center justify-items-center">
              <img className='h-8 w-8 items-center' src={Download} />
              <p className="text-blue-500">Downloads</p>
              <h1 className="text-4xl font-extrabold">{app.downloads.toLocaleString()} K</h1>
        </div>
       
        <div className="text-center justify-items-center">
            <img className='h-10 w-10 items-center' src={Rate} />
            <p className="text-blue-500">Average Rating</p>
            <h1 className="text-4xl font-extrabold">{app.ratingAvg}</h1>
        </div>
        <div className="text-center justify-items-center">
          <img className='h-10 w-10 items-center' src={Review} />
          <p className="text-blue-500">Reviews</p>
          <h1 className="text-4xl font-extrabold">{app.reviews}</h1>
        </div>
      </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            <button
              className={`btn ${installed ? 'btn-disabled' : 'btn-success'}`}
              onClick={handleInstall}
              disabled={installed}
            >
              {installed ? 'Installed' : 'Install'} ({app.size} MB)
            </button>
            <Link to="/apps" className="btn btn-outline">
              Back to All Apps
            </Link>
          </div>
        </div>
      </div>

      {/* Ratings Breakdown */}
      <div className="bg-gray-800 shadow rounded-2xl p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-center">Ratings Breakdown</h2>
        <div className="w-full h-40">
          <ResponsiveContainer>
            <BarChart layout="vertical" data={chartData}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={40} />
              <Tooltip />
              <Bar dataKey="count" fill="#fbbf24" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-800 shadow rounded-2xl p-6 mb-10">
        <h3 className="text-2xl font-semibold mb-3">About this App</h3>
        <p className="text-blue-400 leading-relaxed text-justify">{app.description}</p>
      </div>

      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg('')} />}
    </div>
  )
}
