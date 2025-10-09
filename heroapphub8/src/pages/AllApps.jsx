import React, {useState, useMemo, useEffect} from 'react'
import appsData from '../data/apps.json'
import AppCard from '../components/AppCard'
import Loading from '../components/Loading'

import AppError from '../assets/App-Error.png'

export default function AllApps(){
  const [q, setQ] = useState('')
  const [loading, setLoading] = useState(false)
  const [sort, setSort] = useState('none') // 'high-low' or 'low-high' or none

  // search with simulated small delay for loading UX
  const [debouncedQ, setDebouncedQ] = useState(q)
  useEffect(()=> {
    setLoading(true)
    const t = setTimeout(()=> {
      setDebouncedQ(q)
      setLoading(false)
    }, 300)
    return ()=> clearTimeout(t)
  }, [q])

  const filtered = useMemo(()=>{
    const lower = debouncedQ.trim().toLowerCase()
    let arr = appsData.filter(a => a.title.toLowerCase().includes(lower))
    if (sort === 'high-low') {
      // High -> Low (descending)
      arr = arr.sort((a,b)=> b.downloads - a.downloads)
    } else if (sort === 'low-high') {
      arr = arr.sort((a,b)=> a.downloads - b.downloads)
    }
    return arr
  }, [debouncedQ, sort])

  return (
    <div>
      {/* Title */}
      <div className="text-center justify-items-center mb-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent p-0.5">All Applications List</h1>
        <p className="text-sm text-blue-300 p-2">Browse all available apps</p>
      </div>

      {/* Top row: total + search + sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <div>Total apps: <strong>{filtered.length}</strong></div>
        <div className="flex gap-3 items-center">
          <input value={q} onChange={(e)=> setQ(e.target.value)} placeholder="Search apps..." className="input input-bordered" />
          <select className="select select-bordered" value={sort} onChange={e=> setSort(e.target.value)}>
            <option value="none">Sort by downloads</option>
            <option value="high-low">High → Low</option>
            <option value="low-high">Low → High</option>
          </select>
        </div>
      </div>

      {loading && <div className="py-6"><Loading/></div>}

      {!loading && filtered.length === 0 && (
        <div className="p-6 bg-gray-800 rounded shadow text-center">
          <div className="text-center justify-items-center py-16 bg-neutral-900">
                <img className='h-70 w-98 items-center ' src={AppError} />
                <h1 className="text-4xl font-bold p-5">Oops!!! — App Not Found</h1>
                <a href='/apps' className="btn btn-soft btn-warning btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-lg p-4">Search Again </a>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(a => <AppCard key={a.id} app={a} />)}
      </div>
    </div>
  )
}
