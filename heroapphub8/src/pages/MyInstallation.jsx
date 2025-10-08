import React, {useState, useEffect} from 'react'
import apps from '../data/apps.json'
import { getInstalledIds, uninstallApp } from '../utils/storage'
import Toast from '../components/Toast'

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
    return <div className="p-6 bg-white rounded shadow text-center">No installed apps yet</div>
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