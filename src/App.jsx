import AppRoutes from './routes/AppRoutes'

import { Toaster } from "react-hot-toast"

import Admin from './pages/admin/Admin'
import Restaurants from './pages/admin/Restaurants'
import Hotels from './pages/admin/Hotels'
import HotelsRequests from './pages/admin/HotelsRequests'
import TourGuidesRequests from './pages/admin/TourGuidesRequests'
import TourGuides from './pages/admin/TourGuides'
import Profile from './pages/profile/Profile'
import Services from './pages/profile/Services'

function App() {

  return (
    <>
      <Toaster />
      <AppRoutes />
      {/* <Admin /> */}
      {/* <Restaurants />
      <Hotels />
      <HotelsRequests />
      <TourGuides />
      <TourGuidesRequests />
      <Profile /> */}
      {/* <Services /> */}
    </>
  )
}

export default App
