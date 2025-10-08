import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import apps from '../data/apps.json'
import { installApp, isInstalled } from '../utils/storage'
import Toast from '../components/Toast'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

export default function AppDetails(){
  const { id } = useParams()
  const app = apps.find(a => a.id === Number(id))
  const [installed, setInstalled] = useState(app ? isInstalled(app.id) : false)
  const [toastMsg, setToastMsg] = useState('')

  if (!app) {
    return <div className="p-6 bg-white rounded shadow text-center">App not found</div>
  }

  const handleInstall = () => {
    const ok = installApp(app.id)
    if (ok) {
      setInstalled(true)
      setToastMsg('App installed successfully')
    } else {
      setInstalled(true)
      setToastMsg('App is already installed')
    }
  }

  // convert ratings to recharts data
  const chartData = app.ratings.map(r=>{
    return { name: r.name.replace(' star',''), count: r.count }
  }).reverse() // optional reverse if you want 5->1 order

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1 bg-white p-4 rounded shadow">
        <img src={app.image} alt={app.title} className="w-full h-48 object-cover rounded" />
        <div className="mt-4">
          <div className="text-lg font-bold">{app.title}</div>
          <div className="text-sm text-gray-500">{app.companyName}</div>
          <div className="mt-2">Downloads: {app.downloads.toLocaleString()}</div>
          <div>Reviews: {app.reviews.toLocaleString()}</div>
          <div>Rating: ⭐ {app.ratingAvg}</div>
          <button className={`btn mt-4 ${installed ? 'btn-disabled' : 'btn-primary'}`} onClick={handleInstall} disabled={installed}>
            {installed ? 'Installed' : 'Install'}
          </button>
        </div>
      </div>

      <div className="md:col-span-2 bg-white p-4 rounded shadow">
        <h3 className="font-semibold mb-2">Reviews</h3>
        <div style={{ width: '100%', height: 250 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h3 className="font-semibold mt-6 mb-2">Description</h3>
        <p className="text-gray-700">{app.description}</p>
      </div>

      {toastMsg && <Toast message={toastMsg} onClose={()=> setToastMsg('')} />}
    </div>
  )
}
