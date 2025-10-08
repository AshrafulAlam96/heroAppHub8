import { Link } from 'react-router-dom'

export default function AppCard({app}) {
  return (
    <Link to={`/apps/${app.id}`} className="card bg-white shadow hover:shadow-md transition">
      <div className="flex gap-4 p-4 items-center">
        <img src={app.image} alt={app.title} className="w-16 h-16 rounded"/>
        <div className="flex-1">
          <div className="font-semibold">{app.title}</div>
          <div className="text-sm text-gray-500">{app.companyName}</div>
          <div className="text-sm mt-1">Downloads: {app.downloads.toLocaleString()}</div>
        </div>
        <div className="text-sm text-gray-600">
          ⭐ {app.ratingAvg}
        </div>
      </div>
    </Link>
  )
}
