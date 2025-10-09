import React, {useState, useEffect} from 'react'
import apps from '../data/apps.json'
import { getInstalledIds, uninstallApp } from '../utils/storage'
import Toast from '../components/Toast'

import AppError from '../assets/App-Error.png'

export default function MyInstallation(){
  const [installedIds, setInstalledIds] = useState(getInstalledIds())
  const [toast, setToast] = useState('')

  useEffect(()=> {
    setInstalledIds(getInstalledIds())
  }, [])

  const installedApps = apps.filter(a => installedIds.includes(a.id))

  function handleUninstall(id) {
    uninstallApp(id)
    const remaining = getInstalledIds()
    setInstalledIds(remaining)
    setToast('App uninstalled')
  }

  if (installedApps.length === 0) {
    return <div className="p-6 bg-gray-800 rounded shadow text-center">
            <div className="text-center justify-items-center py-16 bg-neutral-900">
              <img className='h-70 w-98 items-center ' src={AppError} />
              <h1 className="text-4xl font-bold p-5">Oops!!! — App Not Found</h1>
              <a href='/apps' className="btn btn-soft btn-warning btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg p-4">Search Again </a>
            </div>
          </div>
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">My Installation</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {installedApps.map(a => (
          <div key={a.id} className="bg-white p-4 rounded shadow flex gap-4">
            <img src={a.image} alt={a.title} className="w-16 h-16 object-cover rounded"/>
            <div className="flex-1">
              <div className="font-semibold">{a.title}</div>
              <div className="text-sm text-gray-500">{a.companyName}</div>
              <div className="mt-2">Downloads: {a.downloads.toLocaleString()}</div>
            </div>
            <div>
              <button className="btn btn-error btn-sm" onClick={()=> handleUninstall(a.id)}>Uninstall</button>
            </div>
          </div>
        ))}
      </div>

      {toast && <Toast message={toast} onClose={()=> setToast('')} />}
    </div>
  )
}