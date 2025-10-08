import { Link } from 'react-router-dom'

export default function AppCard({ app }) {
  return (
    <Link
      to={`/apps/${app.id}`}
      className="card bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-200"
    >
      <figure className="p-4">
        <img
          src={app.image}
          alt={app.title}
          className="rounded-xl w-60 h-60 object-cover mx-auto"
        />
      </figure>

      <div className="card-body items-start text-left px-4 pt-0 pb-4">
        {/* Title & Company */}
        <h3 className="card-title text-base font-semibold leading-tight text-amber-950">
          {app.title}: {app.companyName}
        </h3>
        {/* Stats row */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-gray-600 mt-2">
          <span className='bg-yellow-200 rounded-full p-0.5'>⭐ {app.ratingAvg}</span>
          <span>📥 {app.downloads.toLocaleString()}K</span>
          <span>💾 {app.size} MB</span>
        </div>
      </div>
    </Link>
  )
}
