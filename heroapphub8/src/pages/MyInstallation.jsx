import React, { useState, useEffect } from 'react'
import apps from '../data/apps.json'
import { getInstalledIds, uninstallApp } from '../utils/storage'
import Toast from '../components/Toast'
import AppError from '../assets/App-Error.png'

export default function MyInstallation() {
  const [installedIds, setInstalledIds] = useState(getInstalledIds())
  const [toast, setToast] = useState('')
  const [sortOption, setSortOption] = useState('size')

  useEffect(() => {
    setInstalledIds(getInstalledIds())
  }, [])

  const installedApps = apps
    .filter((a) => installedIds.includes(a.id))
    .sort((a, b) =>
      sortOption === 'size' ? b.size - a.size : b.downloads - a.downloads
    )

  function handleUninstall(id) {
    uninstallApp(id)
    const remaining = getInstalledIds()
    setInstalledIds(remaining)
    setToast('App uninstalled ❌')
  }

  // Empty State
  if (installedApps.length === 0) {
    return (
      <section className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-center px-4">
        <div className="bg-gray-900 rounded-xl shadow-md p-10 max-w-md">
          <img
            src={AppError}
            alt="No Apps"
            className="w-90 h-70 mx-auto mb-6 opacity-80"
          />
          <h1 className="text-3xl font-bold text-amber-500 mb-3">
            Oops! No Installed Apps
          </h1>
          <p className="text-green-300 mb-6">
            You haven’t installed any apps yet. Explore and add some!
          </p>
          <a
            href="/#/apps"
            className="btn btn-warning text-white px-6 font-semibold"
          >
            Browse Apps
          </a>
        </div>
      </section>
    )
  }

  // Installed Apps List
  return (
    <section className="min-h-screen bg-gray-800 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent p-0.5">Your Installed Apps</h1>
          <p className="text-sm text-blue-300 p-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <p className="text-sm font-bold text-blue-300 p-2">
            {installedApps.length} App{installedApps.length !== 1 && 's'} Found
          </p>
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered select-sm text-blue-300"
          >
            <option value="size">Sort By Size</option>
            <option value="downloads">Sort By Downloads</option>
          </select>
        </div>

        {/* App List */}
        <div className="space-y-4">
          {installedApps.map((a) => (
            <div
              key={a.id}
              className="flex items-center justify-between bg-amber-50 rounded-lg shadow-sm hover:shadow-md transition p-4"
            >
              {/* Left section */}
              <div className="flex items-center gap-4">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-16 h-16 rounded-lg object-cover bg-gray-100"
                />
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {a.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1">
                      <span className="text-green-300">📥</span>
                      {a.downloads.toLocaleString()} K
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="text-amber-200">⭐</span>
                      {a.ratingAvg}
                    </span>
                    <span className="flex items-center gap-1">
                     {a.size} MB
                    </span>
                  </div>
                </div>
              </div>

              {/* Right section (Uninstall button) */}
              <button
                className="btn btn-sm text-white font-medium"
                style={{
                  backgroundColor: '#f51137',
                  borderColor: '#f51137',
                }}
                onClick={() => handleUninstall(a.id)}
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </section>
  )
}
