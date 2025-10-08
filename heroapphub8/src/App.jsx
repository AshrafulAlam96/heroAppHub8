import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AllApps from './pages/AllApps'
import AppDetails from './pages/AppDetails'
import MyInstallation from './pages/MyInstallation'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AllApps />} />
        <Route path="/apps/:id" element={<AppDetails />} />
        <Route path="/installation" element={<MyInstallation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
