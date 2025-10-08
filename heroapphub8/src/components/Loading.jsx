export default function Loading(){
  return (
    <div className="fixed inset-0 flex items-start justify-center pointer-events-none z-50">
      <div className="mt-6 p-3 bg-white/80 rounded shadow flex items-center gap-3">
        <div className="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-primary"></div>
        <div className="text-sm">Loading...</div>
      </div>
    </div>
  )
}