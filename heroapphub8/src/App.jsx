import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import AppDetails from './pages/AppDetails'
import MyInstallation from './pages/MyInstallation'
import NotFound from './pages/NotFound'
import Loading from './components/Loading'

export default function App(){
  const location = useLocation()
  const [navLoading, setNavLoading] = useState(false)

  useEffect(() => {
    // show a small loading animation on each route change
    setNavLoading(true)
    const t = setTimeout(()=> setNavLoading(false), 300)
    return () => clearTimeout(t)
  }, [location.pathname])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {navLoading && <Loading />}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/apps" element={<AllApps/>} />
          <Route path="/apps/:id" element={<AppDetails/>} />
          <Route path="/installation" element={<MyInstallation/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
