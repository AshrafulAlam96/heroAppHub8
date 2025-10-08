import { useEffect } from 'react'

export default function Toast({message, onClose}) {
  useEffect(()=>{
    const t = setTimeout(()=> onClose(), 2500)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="fixed right-4 bottom-6 bg-success text-white px-4 py-2 rounded shadow">
      {message}
    </div>
  )
}
