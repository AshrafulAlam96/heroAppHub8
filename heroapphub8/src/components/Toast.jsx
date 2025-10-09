import React, { useEffect } from 'react'

export default function Toast({ message, onClose }) {
  // Auto-close after 3 seconds
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="alert alert-success shadow-lg animate-slide-in">
        <span className="font-medium">{message}</span>
      </div>
    </div>
  )
}
