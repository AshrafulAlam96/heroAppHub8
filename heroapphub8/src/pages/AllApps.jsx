import React, {useState, useMemo, useEffect} from 'react'
import appsData from '../data/apps.json'
import AppCard from '../components/AppCard'
import Loading from '../components/Loading'

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
      <div className="mb-4">
        <h1 className="text-2xl font-bold">All Apps</h1>
        <p className="text-gray-500">Browse all available apps</p>
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
        <div className="p-6 bg-white rounded shadow text-center">No App Found</div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map(a => <AppCard key={a.id} app={a} />)}
      </div>
    </div>
  )
}
