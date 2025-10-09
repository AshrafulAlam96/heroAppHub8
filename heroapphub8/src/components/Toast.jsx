import React, { useEffect, useState } from 'react'
import { X } from 'lucide-react' // optional close icon

export default function Toast({ message, onClose }) {
  const [progress, setProgress] = useState(100)

  // 🔍 Detect type from message
  const lower = message.toLowerCase()
  let type = 'info'
  if (lower.includes('success') || lower.includes('installed')) type = 'success'
  else if (lower.includes('error') || lower.includes('fail') || lower.includes('uninstall')) type = 'error'
  else if (lower.includes('warn') || lower.includes('caution')) type = 'warning'

  // 🕒 Auto dismiss with countdown
  useEffect(() => {
    const duration = 3000 // ms
    const step = 100 / (duration / 50)
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p <= 0) {
          clearInterval(interval)
          onClose()
          return 0
        }
        return p - step
      })
    }, 50)
    return () => clearInterval(interval)
  }, [onClose])

  const colors = {
    info: 'bg-blue-500 border-blue-600',
    success: 'bg-green-500 border-green-600',
    warning: 'bg-yellow-400 border-yellow-500 text-black',
    error: 'bg-red-500 border-red-600',
  }

  return (
    <div className="fixed top-4 right-4 z-50 w-72 animate-slide-in">
      <div
        className={`relative text-white rounded shadow-md overflow-hidden border-l-4 p-3 pr-8 ${colors[type]}`}
      >
        {/* Message */}
        <div className="flex items-center gap-2">
          {type === 'success' && <span>✅</span>}
          {type === 'error' && <span>❌</span>}
          {type === 'warning' && <span>⚠️</span>}
          {type === 'info' && <span>ℹ️</span>}
          <span className="font-medium">{message}</span>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-white/90 hover:text-white"
          onClick={onClose}
        >
          <X size={16} />
        </button>

        {/* Progress Bar */}
        <div
          className="absolute bottom-0 left-0 h-1 bg-white/70"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
